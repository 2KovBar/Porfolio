import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  const workSlider = {
    slides: [
      {
        images: [
          {
            title: "title",
            path: "/thumb1.jpg",
            url: "https://oleksandrb93.github.io/react-movie/",
          },
          {
            title: "title",
            path: "/thumb2.jpg",
            url: "https://oleksandrb93.github.io/weather/",
          },
          {
            title: "title",
            path: "/thumb3.jpg",
            url: "https://chidorishar.github.io/Petly-Frontend",
          },
          {
            title: "title",
            path: "/thumb4.jpg",
            url: "https://spotify-clone-red-chi.vercel.app/",
          },
        ],
      },
      {
        images: [
          {
            title: "title",
            path: "/thumb4.jpg",
            url: "https://oleksandrb93.github.io/react-movie/",
          },
          {
            title: "title",
            path: "/thumb1.jpg",
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
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imageIndex) => {
                return (
                  <div
                    key={imageIndex}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <a href={image.url}>
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                      </a>
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
