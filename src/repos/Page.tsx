export function ReposPage() {
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
          <tr>
            <td data-testid="table-row-repo-name-1">reactor</td>
            <td data-testid="table-row-repo-stars-1">10</td>
            <td data-testid="table-row-repo-forks-1">20</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
