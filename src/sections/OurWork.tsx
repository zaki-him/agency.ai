import React from "react";
import assets from "../assets/assets";
import WorkCard from "../components/WorkCard";

const OurWork: React.FC = () => {
  const cardInfo = [
    {
      title: "Mobile app marketing",
      desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
      img: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      desc: "We help you execute your plan and deliver results.",
      img: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      desc: "We help you create a marketing strategy that drives results.",
      img: assets.work_fitness_app,
    },
  ];

  return (
    <div id="work" className="m-2 p-2">
      <div className="flex flex-col items-center gap-5 py-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-neutral-700">
          Our Work
        </h1>
        <p className="text-center text-neutral-500 md:text-xl">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cardInfo.map((item, index) => (
            <WorkCard work={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
