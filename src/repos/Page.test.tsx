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
});
