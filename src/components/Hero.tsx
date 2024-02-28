import Link from "next/link";
import styles from "@/styles/hero.module.css";
import { Icon } from "./Icon";

export default function Hero() {
  return (
    <section className={styles.content}>
      <div className={styles.bio}>
        <h1 className={styles.title}>Desarrollador Frontend</h1>
        <span className={styles.caption} role="caption">
          Javascript, React.js, Next.js, Web3.js
        </span>
        <p role="description">
          Como desarrollador Frontend, he elaborado con éxito distintos sitios
          web. Lideré equipos de desarrollo de manera efectiva, garantizando el
          uso correcto de herramientas. Actualmente trabajo principalmente con
          TypeScript, React, Next.js, y Tailwind CSS. Tengo más de 5 años de
          experiencia donde he trabajado de forma remota para Startups, agencias
          de marketing y fondos financieros.
        </p>
        <Link
          role="linkCurriculum"
          className={styles.link}
          href="/docs/CV%20-%20Jair%20Pérez.pdf"
          target="_blank"
        >
          <span>Ver curriculum</span>
          <Icon name="MoveRight" size={20} className={styles["link-icon"]} />
        </Link>
      </div>
    </section>
  );
}
