import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Problem } from "./Problem";

describe("Problem", () => {
  it("renders the section heading and broadened framing", () => {
    const { container } = render(<Problem />);
    expect(
      screen.getByRole("heading", { level: 2, name: /third dimension is missing/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Modern radiology is volumetric/i)).toBeInTheDocument();
    expect(screen.getByText(/CT, MRI, ultrasound/i)).toBeInTheDocument();
    expect(screen.getByText(/intracranial aneurysms/i)).toBeInTheDocument();
    expect(container.querySelector("section#problem")).toBeInTheDocument();
  });

  it("does not include fabricated statistics", () => {
    render(<Problem />);
    expect(screen.queryByText(/~3%/)).not.toBeInTheDocument();
    expect(screen.queryByText(/30–40%/)).not.toBeInTheDocument();
    expect(screen.queryByText(/≈12%/)).not.toBeInTheDocument();
  });

  it("includes the 'Where 2D struggles' qualitative list", () => {
    render(<Problem />);
    expect(screen.getByText(/Where 2D struggles/i)).toBeInTheDocument();
    expect(screen.getByText(/Oblique vessels/i)).toBeInTheDocument();
    expect(screen.getByText(/Small lesions/i)).toBeInTheDocument();
    expect(screen.getByText(/Anatomical context/i)).toBeInTheDocument();
  });
});
