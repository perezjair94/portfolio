import Project from "@/components/Project";
import { render, screen } from "@testing-library/react";

const project = {
  title: "Cesquant",
  url: "https://cequant.net",
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
  });
});
