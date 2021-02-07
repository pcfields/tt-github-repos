import React from "react";
import { render, screen } from "@testing-library/react";
import { ReposPage } from "./Page";

describe("ReposPage", () => {
  test("displays page title", () => {
    render(<ReposPage />);

    const pageTitle = screen.getByRole("heading", { level: 1 });
    expect(pageTitle).toBeInTheDocument();
  });

  test("displays table with headings", () => {
    render(<ReposPage />);

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
    render(<ReposPage />);

    const repoNameLinkRowData = screen.getByTestId("table-row-repo-link-1");
    const repoStarsRowData = screen.getByTestId("table-row-repo-stars-1");
    const repoForksRowData = screen.getByTestId("table-row-repo-forks-1");

    expect(repoNameLinkRowData).toHaveTextContent("reactor");
    expect(repoNameLinkRowData).toHaveAttribute("href", "https://github.com");
    expect(repoStarsRowData).toHaveTextContent("10");
    expect(repoForksRowData).toHaveTextContent("20");
  });
});
