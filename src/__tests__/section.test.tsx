import Section from "@/components/Section";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

const section = {
  title: "Experiencia",
  content: <p>Experiencia</p>,
};

describe("Section component", () => {
  afterEach(cleanup);

  it("render content", () => {
    render(<Section title={section.title}>{section.content}</Section>);

    const wrapper = screen.getByRole("section-content");
    expect(wrapper).toHaveTextContent(section.title);
  });
});
