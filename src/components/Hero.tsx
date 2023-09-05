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
          Desarrollador con +4 años de experiencia desarrollando aplicaciones
          Frontend Javascript en React.js, Next.js Framework, Redux.js,
          TailwindCSS, SASS o Bootstrap, Blockchain con Ethers.js, Smart
          Contracts, Solidity o Binance API y entornos virtuales con Three.js
          integrados con redes blockchain.
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
