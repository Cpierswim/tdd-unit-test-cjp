import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmptyTable from "./EmptyTable";

afterEach(() => {
  cleanup();
});

describe("Empty Table Component", () => {
  render(<EmptyTable />);
  const table = screen.getByTestId("table");

  it("Table Rendering", () => {
    expect(table).toBeInTheDocument();
  });

  it("Should contain a <td>", () => {
    expect(table).toContainHTML("<td></td>");
  });
});
