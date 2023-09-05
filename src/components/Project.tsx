import Link from "next/link";

interface Props {
  title: string;
  url: string;
}

export default function Project({ title, url }: Props) {
  return (
    <div role="project-wrapper">
      <Link href={url} target="_blank">
        <h2>{title}</h2>
      </Link>
    </div>
  );
}
