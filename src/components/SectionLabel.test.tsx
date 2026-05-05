import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SectionLabel } from "./SectionLabel";

describe("SectionLabel", () => {
  it("renders number, kicker, and h2 title", () => {
    render(<SectionLabel number="01" kicker="The problem" title="A silent disease." />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("The problem")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "A silent disease." })
    ).toBeInTheDocument();
  });
});
