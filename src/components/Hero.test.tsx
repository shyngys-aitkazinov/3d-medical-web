import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the editorial headline and subhead", () => {
    render(<Hero />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(/Reading the brain/i);
    expect(h1).toHaveTextContent(/in three dimensions/i);
    expect(screen.getByText(/CT angiography volume/i)).toBeInTheDocument();
    expect(screen.getByText(/intracranial aneurysms/i)).toBeInTheDocument();
  });

  it("primary CTA links to the contact mailto", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: /open a conversation/i });
    expect(cta).toHaveAttribute("href", "mailto:saitkazinov@3d-medical.ch");
  });

  it("secondary CTA anchors to #problem", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: /read the dossier/i });
    expect(cta).toHaveAttribute("href", "#problem");
  });

  it("includes the SPH attribution badge", () => {
    render(<Hero />);
    expect(
      screen.getByRole("img", { name: /eth student project house/i })
    ).toBeInTheDocument();
  });

  it("renders the metadata strip with modality, pathology, stage", () => {
    render(<Hero />);
    expect(screen.getByText(/Modality/i)).toBeInTheDocument();
    expect(screen.getByText(/CTA · 3D/)).toBeInTheDocument();
    expect(screen.getByText(/Pathology/i)).toBeInTheDocument();
    expect(screen.getByText(/Aneurysm/)).toBeInTheDocument();
  });
});
