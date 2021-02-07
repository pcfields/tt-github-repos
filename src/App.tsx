import React from "react";
import { Repo, ReposPage } from "./repos/Page";

function App() {
  const repos: Repo[] = [];

  return (
    <div className="App">
      <ReposPage repos={repos} />
    </div>
  );
}

export default App;
