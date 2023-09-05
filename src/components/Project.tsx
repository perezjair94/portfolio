import Link from "next/link";
import styles from "@/styles/project.module.css";
import { Icon } from "./Icon";

interface Props extends IProject {}

export default function Project({ title, url, createdAt, description }: Props) {
  return (
    <div className={styles.card} role="project-wrapper">
      <Link href={url} target="_blank" className={styles.link}>
        <h2 className={styles.title}>{title}</h2>
        <Icon name="ExternalLink" className="text-pink-500" />
        <i className={styles.caption}>{createdAt}</i>
      </Link>
      <p role="project-description">{description}</p>
    </div>
  );
}
