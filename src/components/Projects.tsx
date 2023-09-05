import Project from "./Project";
import Section from "./Section";

const projects = [
  {
    title: "Cesquant",
    url: "https://cequant.net",
  },
  {
    title: "Cesquant",
    url: "https://cequant.net",
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
