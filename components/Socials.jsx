import { Github, Instagram, Dribbble, Linkedin } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    icon: <Github />,
    url: "https://github.com/Yann-Deukam",
  },
  {
    icon: <Linkedin />,
    url: "https://cm.linkedin.com/in/deukam-yann-a41648329",
  },
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/yann_donald_01/profilecard/?igsh=MXIzOXE3bXNiNDhkbg==",
  },
  {
    icon: <Dribbble />,
    url: "https://dribbble.com/yanndeukam237",
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
