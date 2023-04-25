import React from "react";

import JD from "../assets/jd.png";
import DEREK from "../assets/derek.png";
import KRAKEN from "../assets/kraken.png";
import MANIFESTA from "../assets/manifesta.png";
import CHAD from "../assets/chad.png";

const Team = () => {
  return (
    <div className="bg-gradient3 bg-stretch font-caustenBold pt-[178px] pb-[74px] lg:pb-[268px] -mt-1">
      <p className="text-center text-white text-[64px] hidden lg:block">
        Meet the <span className="text-[#FAA72C]">TEAM</span>
      </p>
      <p className="text-center text-[#FAA72C] text-[64px] block lg:hidden">
        MEET THE TEAM
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-[130px]">
        <div>
          <img
            src={JD}
            alt="JD"
            className="w-[128px] h-[128px] lg:w-full lg:h-full"
          />
          <p className="text-2xl text-secondary text-center mt-6">JD</p>
        </div>
        <div className="mt-0 lg:mt-48">
          <img
            src={MANIFESTA}
            alt="MANIFESTA"
            className="w-[128px] h-[128px] lg:w-full lg:h-full"
          />
          <p className="text-2xl text-secondary text-center mt-6">MANIFESTA</p>
        </div>
        <div>
          <img
            src={DEREK}
            alt="DEREK"
            className="w-[128px] h-[128px] lg:w-full lg:h-full"
          />
          <p className="text-2xl text-secondary text-center mt-6">DEREK</p>
        </div>
        <div className="mt-0 lg:mt-48">
          <img
            src={CHAD}
            alt="CHAD"
            className="w-[128px] h-[128px] lg:w-full lg:h-full"
          />
          <p className="text-2xl text-secondary text-center mt-6">CHAD</p>
        </div>
        <div>
          <img
            src={KRAKEN}
            alt="KRAKEN"
            className="w-[128px] h-[128px] lg:w-full lg:h-full"
          />
          <p className="text-2xl text-secondary text-center mt-6">KRAKEN</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
