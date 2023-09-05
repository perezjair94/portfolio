import Experience from "./Experience";
import Section from "./Section";

const experiences = [
  {
    company: {
      name: " Capital Investment",
      url: "https://www.capitalinvestmenttm.com",
    },
    location: "Medellín, Antioquia",
    jobTitle: {
      name: "Frontend Developer",
      startDate: "Noviembre, 2022",
      finsihDate: "Agosto, 2023",
    },
    description: `
      Desarrollador Front-end Blockchain, Soporte en gestión de
      proyectos y análisis de requerimientos para aplicaciones Web3 y
      Blockchain, integración e implementación con web3.js, ethers.js,
      MetaMask, Samart Contract o Solidity.
    `,
  },
  {
    company: {
      name: " Banca Crypto",
      url: "https://bancacrypto.vercel.app",
    },
    location: "Medellín, Antioquia",
    jobTitle: {
      name: "Frontend Developer",
      startDate: "Octubre, 2021",
      finsihDate: "Noviembre, 2021",
    },
    description: `
      Desarrollador Front-end Blockchain, Soporte en gestión de
      proyectos y análisis de requerimientos para aplicaciones Web3 y
      Blockchain, integración e implementación con web3.js, ethers.js,
      MetaMask, Samart Contract o Solidity.
    `,
  },
  {
    company: {
      name: " DrakeTech",
      url: "https://bancacrypto.vercel.app",
    },
    location: "Ontario, Canadá",
    jobTitle: {
      name: "Frontend Developer",
      startDate: "Septiembre, 2021",
      finsihDate: "Octubre, 2022",
    },
    description: `
      Desarrollador Frontend, maquetador de aplicaciones web con Ant
      Design y Bootstrap, integración con APIs e implementación con
      React y Redux, apoyo en la gestión de proyectos y análisis de los
      requisitos para aplicación de programas.
    `,
  },
  {
    company: {
      name: " Startups Lab - Agencia",
      url: "https://bancacrypto.vercel.app",
    },
    location: "Montería, Córdoba",
    jobTitle: {
      name: "Frontend Developer",
      startDate: "Agosto, 2019",
      finsihDate: "Septiembre, 2021",
    },
    description: `
      Desarrollador Frontend, maquetador de aplicaciones web con Ant
      Design y Bootstrap, integración con APIs e implementación con
      React y Redux, apoyo en la gestión de proyectos y análisis de los
      requisitos para aplicación de programas.
    `,
  },
];

export default function Experiences() {
  return (
    <Section title="Experiencia">
      {experiences.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
    </Section>
  );
}
