//next image
import Image from "next/image";
//next link
import Link from "next/link";
//components
import Socials from "../components/Socials";
import { useState, useEffect } from "react";

const Header = () => {
  const [navbar, setNavBar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  return (
      <header
        className={`absolute z-30 py-2 bg-zinc-700/40 backdrop-blur-[1px] md:backdrop-blur-0 md:bg-zinc-100/0  w-full flex items-center justify-center px-16 xl:px-0 ${
          navbar ? "h-[50px]" : "h-[70px]"
        }`}
      >
        <div className="container mx-auto ">
          <div className="flex flex-row justify-between items-center gap-y-6">
            <Link href={"/"}>
              <Image
                src={"/2KB-final.png"}
                width={60}
                height={60}
                alt=""
                priority={true}
              />
            </Link>
            <Socials />
          </div>
        </div>
      </header>
  );
};

export default Header;
