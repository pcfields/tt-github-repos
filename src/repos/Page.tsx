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
            <td>
              <a
                target="_blank"
                rel="noreferrer noopener"
                data-testid="table-row-repo-link-1"
                href="https://github.com"
              >
                reactor
              </a>
            </td>
            <td data-testid="table-row-repo-stars-1">10</td>
            <td data-testid="table-row-repo-forks-1">20</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
