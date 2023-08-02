import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxArrowBottomRight,
} from "react-icons/rx";

// data
export const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Adobe Photoshop, Adobe Illustrator, Adobe XD,Sketch, Figma, InVision, Canva, Blender 3D, Spine 3D, Spline 2D.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Visual Studio Code, GitHub, React, Node.js, React Redux, HTML, CSS, SASS, Bootstrap, Webpack, Parcel, Vue.js, TypeScript, MySQL.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Image, Mobile, Content Optimization, Links and Internal Linking, Page Load Speed, Analytics and Tracking Security Provision, URLs.",
  },
  // {
  //   icon: <RxCrop />,
  //   title: "Branding",
  //   description: "Adobe Photoshop, Adobe Illustrator.",
  // },
];

import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] md:h-[360px]  mb-32"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.20)] rounded-lg px-6 py-8 flex h-[320px] md:max-xl:text-sm
             sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer  hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
