import React, { useEffect, useState } from "react";
import { API } from "./repos/api";
import { Repo, ReposPage } from "./repos/Page";

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetchReactGithubRepos()
      .then((repos) => {
        setRepos(repos);
      })
      .catch((error) => {
        console.error(`Error: `, error.message);
      });
  }, []);

  return (
    <div className="App">
      <ReposPage repos={repos} />
    </div>
  );
}

/**
 * N.B. Everything below could be moved out into a separate file/hook
 */

interface Node {
  forkCount: number;
  stargazerCount: number;
  id: string;
  name: string;
  url: string;
}

interface Edge {
  node: Node;
}
interface APIResponse {
  data: {
    search: {
      edges: Edge[];
    };
  };
}

function fetchReactGithubRepos() {
  // N.B. This could be converted to a hook
  // N.B.  This could be refactored to be more generic like passing in the query and url.
  //        It is specific just to get it working for this exercise

  const REACT_REPO_SEARCH_QUERY = `query {
    search(first:20, type:REPOSITORY, query:"react", ){
      edges {
        node{
          ... on Repository{
            id,
            stargazerCount,
            forkCount
            name, url
          }
        }
      }
    }
  }`;

  const body = {
    query: REACT_REPO_SEARCH_QUERY,
  };

  const headers = {
    "Content-type": "application/json",
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  };

  return fetch(API.github, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then((repos: APIResponse) => {
      const formattedRepos = repos.data.search.edges.map(({ node }) => {
        const repo: Repo = {
          id: node.id,
          forks: node.forkCount,
          stars: node.stargazerCount,
          name: node.name,
          url: node.url,
        };

        return repo;
      });

      return formattedRepos;
    })
    .catch((error) => {
      console.error(`Error: `, error.message);
      return [];
    });
}
export default App;
