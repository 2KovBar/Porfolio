//next image
import Image from "next/image";
//next link
import Link from "next/link";
//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center justify-center px-16 xl:px-0 xl:h-[110px]">
      <div className="container mx-auto ">
        <div className="flex flex-row justify-between items-center gap-y-6 py-8">
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
