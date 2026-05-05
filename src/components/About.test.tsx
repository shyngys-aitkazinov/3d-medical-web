import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { About } from "./About";

describe("About", () => {
  it("renders founder name, headline, and selected work", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { level: 2, name: /one engineer/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Shyngys Aitkazinov")).toBeInTheDocument();
    expect(screen.getAllByText(/Lyceum Technology/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Align Tech/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Glassdome/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/KAIST/).length).toBeGreaterThan(0);
  });

  it("renders the founder portrait", () => {
    render(<About />);
    const photo = screen.getByRole("img", { name: /portrait of shyngys aitkazinov/i });
    expect(photo).toHaveAttribute("src", "/founder.jpg");
  });

  it("uses the real GitHub URL", () => {
    render(<About />);
    const gh = screen.getByRole("link", { name: /github/i });
    expect(gh).toHaveAttribute("href", "https://github.com/shyngys-aitkazinov");
    expect(gh).toHaveAttribute("target", "_blank");
  });

  it("links the LinkedIn profile and both emails", () => {
    render(<About />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/shyngys-aitkazinov-00496b193/"
    );
    expect(
      screen.getByRole("link", { name: /saitkazinov@3d-medical\.ch/i })
    ).toHaveAttribute("href", "mailto:saitkazinov@3d-medical.ch");
    expect(
      screen.getByRole("link", { name: /saitkazinov@ethz\.ch/i })
    ).toHaveAttribute("href", "mailto:saitkazinov@ethz.ch");
  });
});
