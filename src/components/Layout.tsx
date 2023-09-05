import Header from "./Header";
import Wrapper, { WrapperContent } from "./Wrapper";
import tw from "twin.macro";

interface Props {
  title?: string;
  hasHero?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title = "Portafolio | Jair Pérez",
  children,
}: Props) {
  return (
    <Wrapper title={title}>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}

const Main = tw(WrapperContent)``;
