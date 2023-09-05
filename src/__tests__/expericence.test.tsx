import Experience from "@/components/Experience";
import { cleanup, render, screen } from "@testing-library/react";

const section = {
  company: {
    name: "Capital Investment",
    url: "https://www.capitalinvestmenttm.com",
  },
  location: "Medellín, Antioquia",
  jobTitle: {
    name: "Frontend",
    startDate: "Noviembre, 2022",
    finsihDate: "Agosto, 2023",
  },
  description:
    "Desarrollador Front-end Blockchain, Soporte en gestión de proyectos y análisis de requerimientos para aplicaciones Web3 y Blockchain, integración e implementación con web3.js, ethers.js, MetaMask, Samart Contract o Solidity.",
};

describe("Experience component", () => {
  afterEach(cleanup);

  it("render content", () => {
    render(<Experience {...section} />);

    const wrapper = screen.getByRole("experience");
    expect(wrapper).toHaveTextContent(section.company.name);
    expect(wrapper).toHaveTextContent(section.location);
    expect(wrapper).toHaveTextContent(section.jobTitle.name);
    expect(wrapper).toHaveTextContent(
      `${section.jobTitle.startDate} - ${section.jobTitle.finsihDate}`
    );
    expect(wrapper).toHaveTextContent(section.description);
  });
});
