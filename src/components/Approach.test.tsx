import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Approach } from "./Approach";

describe("Approach", () => {
  it("renders the section with all four pillars", () => {
    const { container } = render(<Approach />);
    expect(
      screen.getByRole("heading", { level: 2, name: /volumetric models/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /native 3d/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /vessel-aware/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /calibrated uncertainty/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /benchmarked/i })).toBeInTheDocument();
    expect(container.querySelector("section#approach")).toBeInTheDocument();
  });

  it("includes the pipeline strip steps", () => {
    render(<Approach />);
    ["I/O", "Pre", "Net", "Cal", "Out"].forEach((s) => {
      expect(screen.getByText(s)).toBeInTheDocument();
    });
  });
});
