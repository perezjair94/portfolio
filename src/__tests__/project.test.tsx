import Project from "@/components/Project";
import { render, screen } from "@testing-library/react";

const project = {
  title: "Cesquant",
  url: "https://cequant.net",
  createdAt: "Abril, 2021",
  description: "Plataforma de cursos financieros.",
};

describe("Experience component", () => {
  it("render content", () => {
    render(<Project {...project} />);
    screen.getByRole("project-wrapper");
  });

  it("render a title", () => {
    render(<Project {...project} />);
    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent(project.title);

    const description = screen.getByRole("project-description");
    expect(description).toHaveTextContent(project.description);
  });
});
