import { Github, Instagram, Dribbble, Linkedin } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    icon: <Github />,
    url: "https://github.com/yann-deukam",
  },
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/yann-deukam/",
  },
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/yanndonald801/",
  },
  {
    icon: <Dribbble />,
    url: "https://dribbble.com/yanndonald",
  },
];

export default function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.url}
            target="_blank"
            className={iconStyles}
          >
            <span className="iconStyles"> {item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
}
