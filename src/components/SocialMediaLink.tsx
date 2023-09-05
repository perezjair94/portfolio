import Link from "next/link";
import { Icon, IconProps } from "./Icon";

interface Props {
  link: string;
  icon: IconProps["name"];
  size?: number;
}

export default function SocialLink({ link, icon, size = 30 }: Props) {
  return (
    <Link href={link} target="_blank">
      <Icon name={icon} size={size} className="hover:text-pink-500" />
    </Link>
  );
}
