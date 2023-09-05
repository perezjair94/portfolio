import tw from "twin.macro";
import SocialLink from "./SocialMediaLink";
import { WrapperContent } from "./Wrapper";
import styles from "@/styles/header.module.css";

export default function Header() {
  return (
    <header>
      <Content className={styles.content}>
        <h1 className={styles.logo}>Jair Pérez</h1>
        <div className={styles.nav}>
          <SocialLink
            link="https://instagram.com/perezjair94"
            icon="Instagram"
            size={24}
          />
          <SocialLink
            link="https://github.com/perezjair94"
            icon="Github"
            size={24}
          />
          <SocialLink
            link="https://www.linkedin.com/in/perezjair94/"
            icon="Linkedin"
            size={24}
          />
        </div>
      </Content>
    </header>
  );
}

const Content = tw(WrapperContent)``;
