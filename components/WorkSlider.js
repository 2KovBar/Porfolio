import React, { useEffect } from "react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
import { Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const WorkSlider = () => {
  const workSlider = {
    slides: [
      {
        images: [
          {
            title: "title",
            path: "/thumb11.jpg",
            url: "https://oleksandrb93.github.io/react-movie/",
          },
          {
            title: "title",
            path: "/thumb22.jpg",
            url: "https://oleksandrb93.github.io/weather/",
          },
          {
            title: "title",
            path: "/thumb33.jpg",
            url: "https://chidorishar.github.io/Petly-Frontend",
          },
          {
            title: "title",
            path: "/thumb44.jpg",
            url: "https://spotify-clone-red-chi.vercel.app/",
          },
        ],
      },
      {
        images: [
          {
            title: "title",
            path: "/thumb5.jpg",
            url: "https://oleksandrb93.github.io/react-movie/",
          },
          {
            title: "title",
            path: "/thumb6.jpg",
            url: "https://oleksandrb93.github.io/react-movie/",
          },
          {
            title: "title",
            path: "/thumb2.jpg",
            url: "https://oleksandrb93.github.io/react-movie/",
          },
          {
            title: "title",
            path: "/thumb3.jpg",
            url: "https://oleksandrb93.github.io/react-movie/",
          },
        ],
      },
    ],
  };
  
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[510px]"
    >
      {workSlider.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 cursor-pointer">
              {slide.images.map((image, imageIndex) => {
                return (
                  <div
                    key={imageIndex}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group border border-[red] rounded-[10px]"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                        <Image
                          src={image.path}
                          width={450}
                          height={380}
                          alt=""
                          priority={true}
             
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                      group-hover:opacity-50 transition-all duration-700"
                      ></div>
                      {/* title */}
                      <div
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20
                      transition-all duration-300"
                      >
                        <Link href={image.url}>
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icon */}

                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
