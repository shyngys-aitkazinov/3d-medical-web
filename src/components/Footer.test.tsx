import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders wordmark, current year, and SPH attribution", () => {
    render(<Footer />);
    expect(screen.getByText("3D-Medical")).toBeInTheDocument();
    expect(screen.getByText(/Volumetric machine learning/i)).toBeInTheDocument();
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`${year}.*3D-Medical`))).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /eth student project house/i })).toHaveAttribute(
      "href",
      "https://sph.ethz.ch/"
    );
  });

  it("repeats the four primary contact links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /^linkedin$/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/shyngys-aitkazinov-00496b193/"
    );
    expect(screen.getByRole("link", { name: /^github$/i })).toHaveAttribute(
      "href",
      "https://github.com/shyngys-aitkazinov"
    );
    expect(screen.getByRole("link", { name: /3d-medical\.ch/i })).toHaveAttribute(
      "href",
      "mailto:saitkazinov@3d-medical.ch"
    );
    expect(screen.getByRole("link", { name: /ethz\.ch/i })).toHaveAttribute(
      "href",
      "mailto:saitkazinov@ethz.ch"
    );
  });

  it("includes the section index links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /the problem/i })).toHaveAttribute("href", "#problem");
    expect(screen.getByRole("link", { name: /the approach/i })).toHaveAttribute("href", "#approach");
    expect(screen.getByRole("link", { name: /the founder/i })).toHaveAttribute("href", "#about");
  });
});
