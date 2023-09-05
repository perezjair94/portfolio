import Experience from "./Experience";
import Section from "./Section";
import experiences from "@/data/experiences.json";

export default function Experiences() {
  return (
    <Section title="Experiencia">
      {experiences.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
    </Section>
  );
}
