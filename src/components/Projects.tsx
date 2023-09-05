import Project from "./Project";
import Section from "./Section";

const projects = [
  {
    title: "Cesquant",
    url: "https://cequant.net",
    createdAt: "Abril, 2021",
    description: "Plataforma de cursos financieros.",
  },
];

export default function Projects() {
  return (
    <Section title="Proyectos">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Section>
  );
}
