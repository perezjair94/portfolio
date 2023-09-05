import { cleanup, render, screen } from "@testing-library/react";
import Home from "@/pages/index";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

describe("Home", () => {
  afterEach(cleanup);

  it("render a heading", () => {
    render(<Home />);
    screen.getByRole("heading", { name: /Front-end Developer/i });
  });

  it("render a caption", () => {
    render(<Home />);
    const caption = screen.getByRole("caption");
    expect(caption).toHaveTextContent("Javascript, React.js, Next.js, Web3.js");
  });

  it("render a description", () => {
    render(<Home />);
    const description = screen.getByRole("description");
    expect(description).toHaveTextContent(
      "Desarrollador Frontend con +4 años de experiencia desarrollando aplicaciones Frontend Javascript con React.js, Next.js Framework, Redux.js, TailwindCSS, SASS o Bootstrap."
    );
  });

  it("render a link", () => {
    render(<Home />);
    const linkCurricullum = screen.getByRole("linkCurriculum");
    expect(linkCurricullum).toHaveTextContent("Ver curriculum");
  });
});
