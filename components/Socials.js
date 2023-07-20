//links
import Link from "next/link";
//icons
import {
  RiYoutubeLine,
  RiGithubLine,
  RiTelegramLine,
  RiLinkedinLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiTelegramLine />
      </Link>{" "}
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>{" "}
    </div>
  );
};

export default Socials;
