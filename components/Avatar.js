//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex flex-col xl:max-w-none absolute">
      <div className="w-full h-full ">
        <Image src={"/mirror22.png"} width={737} height={678} alt="avatar" />
      </div>
      <div className="w-70 h-full bg-gradient-to-t from-cyan-500 to-transparent-100 opacity-60">
        <Image
          src={"/mirror11.png"}
          width={737}
          height={678}
          alt="avatar1"
          // style={{ opacity: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Avatar;
