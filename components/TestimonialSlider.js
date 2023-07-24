// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Vitalina Kovbasiuk",
    position: "Front-End Developer",
    message:
      "Hello, I am a beginner full-stack developer. Motivated and ready to take on challenging tasks. I work well in a team and learn quickly. I have knowledge of Javascript, React, React Redux, HTML, CSS, SASS, Bootstrap, Webpack, GitHub. Responsible: stress-resistant, goal-oriented, sociable, capable of learning, active life position. I'm constantly interested in learning new technologies in web development. I will be glad if you consider my candidacy and we can discuss the details of the work. Sincerely, Vitalina!",
  },
  {
    image: "/t-avt-2.png",
    name: "Oleksandr Barabash",
    position: "Front-End Developer",
    message:
      "Hello, I am studying Front End technologies. I have knowledge of HTML, CSS, JavaScript, React, React Redux. I will be glad if you consider my candidacy and we can discuss the details of the work. Sincerely, Oleksandr!",
  },
  {
    image: "/Alona.png",
    name: "Alona Aliyev",
    position: "UI/UX Designer",
    message:
      "Hello, I’m young and talented UI/UX designer who strives to create the best user experience for people. Working throughout the entire design cycle for mobile applications (iOS/Android), responsive web sites, and SaaS systems following the Human-Centered Design approach. Happy to work on user research, wireframing, prototyping, branding, intuitive interfaces. My usual workflow - understand (user/brand), research, analyze, design, re-design, launch, analyze again.",
  },
];

//next image
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
//icons
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[700px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name , position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={200} height={200} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quate & message */}
              <div
                className="flex-1 flex flex-col justify-center before:w-[1px]
                 xl:before:bg-white/20 xl:before:absolute xl:before:left-0
                   xl:before:h-[200px] relative xl:pl-20"
              >
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* mesage */}
                <div className="text-center md:text-left text-xs md:text-sm xl:text-lg">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
