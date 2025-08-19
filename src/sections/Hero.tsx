import React from "react";
import assets from "../assets/assets";

const Hero: React.FC = () => {
  return (
    <div id="" className="flex flex-col items-center justify-center py-4 gap-6">

      <div className="flex items-center border border-neutral-300 py-1 px-3 rounded-3xl gap-2.5">
        <img src={assets.group_profile} alt="" className="w-20" />
        <p className="text-sm font-medium text-neutral-500">Trusted by 10k people</p>
      </div>

      <div className="flex flex-col items-center gap-5">
        <h3 className="font-medium text-center text-4xl sm-text-5xl md:text-6xl xl:text-[84px] xl:leading-[95px] max-w-5xl text-neutral-700">Turning imagination into <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">digital</span> impact.</h3>
        <p className="max-w-lg text-xl text-center text-neutral-400">Creating meaningful connections and turning big ideas into interactive digital experiences.</p>
      </div>

      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl flex justify-center">
        <img src={assets.hero_img} alt="" className="w-[90%] lg:w-full z-10" />
        <img src={assets.bgImage1} alt="" className="absolute top-0 left-0 bottom-0 -z-10" />
      </div>

    </div>
  );
};

export default Hero;
