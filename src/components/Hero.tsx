import Link from "next/link";
import styles from "@/styles/hero.module.css";
import { Icon } from "./Icon";

export default function Hero() {
  return (
    <section className={styles.content}>
      <div className={styles.bio}>
        <h1 className={styles.title}>Front-end Developer</h1>
        <span className={styles.caption} role="caption">
          Javascript, React.js, Next.js, Web3.js
        </span>
        <p role="description">
          Desarrollador Frontend con +4 años de experiencia desarrollando
          aplicaciones Frontend Javascript con React.js, Next.js Framework,
          Redux.js, TailwindCSS, SASS o Bootstrap.
        </p>
        <Link
          role="linkCurriculum"
          className={styles.link}
          href=""
          target="_blank"
        >
          <span>Ver curriculum</span>
          <Icon name="MoveRight" size={20} className={styles["link-icon"]} />
        </Link>
      </div>
    </section>
  );
}
