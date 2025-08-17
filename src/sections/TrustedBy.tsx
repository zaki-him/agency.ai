import React from "react";
import { company_logos } from "../assets/assets";

const TrustedBy: React.FC = () => {
  return (
    <div className="flex flex-col gap-7 items-center py-8">
      <p>Trusted by Leading Companies</p>
      <div className="flex items-center justify-center gap-6 relative flex-wrap">
        {company_logos.map((item, index) => (
          <img src={item} alt="" key={index} className="w-24 lg:30" />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
