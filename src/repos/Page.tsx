export interface Repo {
  id: string;
  name: string;
  url: string;
  stars: number;
  forks: number;
}
interface ReposPageProps {
  repos: Repo[];
}

export function ReposPage({ repos }: ReposPageProps) {
  return (
    <article>
      <header>
        <h1>React Git repositories</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stars</th>
            <th>Forks</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  data-testid="table-row-repo-link-1"
                  href={repo.url}
                >
                  {repo.name}
                </a>
              </td>
              <td data-testid="table-row-repo-stars-1">{repo.stars}</td>
              <td data-testid="table-row-repo-forks-1">{repo.forks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
