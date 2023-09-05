import styles from "@/styles/experiences.module.css";
import Link from "next/link";
import { Icon } from "./Icon";

interface Props extends IExperience {}

export default function Experience(props: Props) {
  return (
    <div className={styles.card} role="experience">
      <div className={styles["card-header"]}>
        <Link href={props.company.url} className={styles.link}>
          <h2 className={styles.title}>{props.company.name}</h2>
          <Icon name="ExternalLink" className="text-pink-500" />
        </Link>
        <span>{props.location}</span>
      </div>
      <div className={styles.caption}>
        <b>{props.jobTitle.name}</b>
        {" - "}
        <i>
          {props.jobTitle.startDate} - {props.jobTitle.finsihDate}
        </i>
      </div>
      <p>{props.description}</p>
    </div>
  );
}
