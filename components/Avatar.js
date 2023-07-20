//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <div className="w-full h-full  object-cover transform scaleX(-1) relative">
        <Image
          src={"/photo_5316634583317465224_x-removebg-preview.png"}
          width={737}
          height={678}
          alt="avatar"
          // className="translate-z-0 w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full absolute ">
        <Image
          src={"/photo_5316634583317465224_x-removebg-preview.png"}
          width={737}
          height={678}
          alt="avatar1"
          style={{ transform: "scale(-1, -1)", opacity: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Avatar;
