import React from "react";
import { render, screen } from "@testing-library/react";
import { ReposPage } from "./Page";

describe("ReposPage", () => {
  test("displays page title", () => {
    render(<ReposPage repos={[]} />);

    const pageTitle = screen.getByRole("heading", { level: 1 });
    expect(pageTitle).toBeInTheDocument();
  });

  test("displays table with headings", () => {
    render(<ReposPage repos={[]} />);

    const repoNameTableHeading = screen.getByRole("columnheader", {
      name: "Name",
    });
    const repoStarsTableHeading = screen.getByRole("columnheader", {
      name: "Stars",
    });
    const repoForksTableHeading = screen.getByRole("columnheader", {
      name: "Forks",
    });

    expect(repoNameTableHeading).toBeInTheDocument();
    expect(repoStarsTableHeading).toBeInTheDocument();
    expect(repoForksTableHeading).toBeInTheDocument();
  });

  test("displays repo details in table", () => {
    const THE_REPO = {
      id: "abc123",
      name: "reactor",
      url: "https://github.com",
      stars: 10,
      forks: 20,
    };
    const REPOS = [THE_REPO];

    render(<ReposPage repos={REPOS} />);

    const repoNameLinkRowData = screen.getByTestId("table-row-repo-link-1");
    const repoStarsRowData = screen.getByTestId("table-row-repo-stars-1");
    const repoForksRowData = screen.getByTestId("table-row-repo-forks-1");

    expect(repoNameLinkRowData).toHaveTextContent(THE_REPO.name);
    expect(repoNameLinkRowData).toHaveAttribute("href", THE_REPO.url);
    expect(repoStarsRowData).toHaveTextContent(`${THE_REPO.stars}`);
    expect(repoForksRowData).toHaveTextContent(`${THE_REPO.forks}`);
  });
});
