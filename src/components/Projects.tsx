import Project from "./Project";
import Section from "./Section";
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <Section title="Proyectos">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Section>
  );
}
