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
    console.log(navbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  return (
    <div className="">
      <header
        className={`absolute z-30 bg-zinc-700/40 backdrop-blur-[1px] w-full flex items-center justify-center py-0 px-16 xl:px-0 ${
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
    </div>
  );
};

export default Header;
