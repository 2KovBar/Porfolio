"use client";
import { useState, useEffect } from "react";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

//  links
const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  // { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "team",
    path: "/testimonials",
    icon: <HiUser />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

//next link
import Link from "next/link";

//next router
import { useRouter } from "next/router";

const Nav = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const pathname = router.pathname;

  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto
                  xl:right-[2%] z-50 top-0 w-full xl:w-16 xl-max-md  xl:h-screen"
    >
      <div
        className="flex w-full xl:flex-col items-center 
                  justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8
                  bg-primary/60 backdrop:blur-sm text-3xl xl:text-xl xl:rounded-full"
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-violet-500"
              } relative flex items-center group hover:text-violet-500 transition-all duration-300`}
              key={index}
              href={link.path}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div
              className="p-3 rounded-2xl"
              >{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
