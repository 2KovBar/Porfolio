// //links
// import Link from "next/link";
// //icons
// import { RiGithubLine, RiTelegramLine, RiLinkedinLine } from "react-icons/ri";

// const Socials = () => {
//   return (
//     <div className="flex items-center gap-x-5 text-lg">
//       <Link href={""} className="hover:text-accent transition-all duration-300">
//         <RiGithubLine />
//       </Link>
//       <Link href={""} className="hover:text-accent transition-all duration-300">
//         <RiTelegramLine />
//       </Link>{" "}
//       <Link href={""} className="hover:text-accent transition-all duration-300">
//         <RiLinkedinLine />
//       </Link>{" "}
//     </div>
//   );
// };

// export default Socials;
import React, { useState } from "react";
import { RiGithubLine, RiTelegramLine, RiLinkedinLine } from "react-icons/ri";

const SocialLink = ({ icon, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <button
        className="hover:text-accent transition-all duration-300"
        onClick={handleDropdownToggle}
        onMouseEnter={handleMouseEnter}
      >
        {icon}
      </button>
      {isDropdownOpen && (
        <div className="absolute top-8 left-0 bg-transparent p-2 rounded shadow box-border h-54 w-54 ">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white text-[16px] hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Socials = () => {
  const socialLinks = [
    {
      icon: <RiGithubLine />,
      links: [
        { label: "Vitalina", url: "https://github.com/VitalinaKovbasiuk" },
        { label: "Oleksandr", url: "https://github.com/OleksandrB93" },
        { label: "Alona", url: "https://www.behance.net/lilith_a" },
      ],
    },
    {
      icon: <RiTelegramLine />,
      links: [
        { label: "Alona", url: "https://t.me/aa_lilith" },
        { label: "Oleksandr", url: "https://t.me/Oleksandr_Barabash" },
        { label: "Vitalina", url: "https://t.me/Vitalina_Kovbasiuk" },
      ],
    },
    {
      icon: <RiLinkedinLine />,
      links: [
        {
          label: "Oleksandr",
          url: "https://www.linkedin.com/in/olexandr-barabash-034812139/",
        },
        { label: "Vitalina", url: "https://www.linkedin.com/in/vitalina/" },
        {
          label: "Alona",
          url: "https://www.linkedin.com/in/alyona-kyrylenko-lilith",
        },
      ],
    },
  ];

  return (
    <div className="flex items-center gap-x-5 text-[24px] text-center">
      {socialLinks.map((socialLink, index) => (
        <SocialLink
          key={index}
          icon={socialLink.icon}
          links={socialLink.links}
        />
      ))}
    </div>
  );
};

export default Socials;
