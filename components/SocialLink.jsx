import Image from "next/image";

export default function SocialLink({ link, source, size = 30 }) {
  return (
    <div className="flex items-center">
      <a href={link} target="_blank">
        <Image src={source} height={size} width={size} />
      </a>
    </div>
  );
}
