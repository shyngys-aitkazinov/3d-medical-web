import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { EmailLink } from "./EmailLink";

describe("EmailLink", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  it("renders an anchor with the mailto: href", () => {
    render(<EmailLink email="x@y.com" />);
    const a = screen.getByRole("link");
    expect(a).toHaveAttribute("href", "mailto:x@y.com");
  });

  it("uses the email as link text by default", () => {
    render(<EmailLink email="x@y.com" />);
    expect(screen.getByRole("link", { name: /x@y\.com/ })).toBeInTheDocument();
  });

  it("renders custom children when provided", () => {
    render(<EmailLink email="x@y.com">Write me</EmailLink>);
    expect(screen.getByRole("link", { name: /write me/i })).toBeInTheDocument();
  });

  it("copies the address to the clipboard on click and shows feedback", () => {
    render(<EmailLink email="x@y.com" />);
    const a = screen.getByRole("link");
    a.addEventListener("click", (e) => e.preventDefault());
    fireEvent.click(a);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("x@y.com");
    expect(screen.getByText(/copied/i)).toBeInTheDocument();
  });
});
