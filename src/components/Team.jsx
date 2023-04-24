import React from "react";

import JD from "../assets/jd.png";
import DEREK from "../assets/derek.png";
import KRAKEN from "../assets/kraken.png";
import MANIFESTA from "../assets/manifesta.png";
import CHAD from "../assets/chad.png";

const Team = () => {
  return (
    <div className="bg-gradient3 bg-stretch font-caustenBold pt-[178px] pb-[268px]">
      <p className="text-center text-white text-[64px] hidden lg:block">
        Meet the <span className="text-[#FAA72C]">TEAM</span>
      </p>
      <p className="text-center text-[#FAA72C] text-[64px] block lg:hidden">
        MEET THE TEAM
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-[130px]">
        <div>
          <img src={JD} alt="JD" />
          <p className="text-2xl text-secondary text-center mt-6">JD</p>
        </div>
        <div className="mt-0 lg:mt-48">
          <img src={MANIFESTA} alt="MANIFESTA" />
          <p className="text-2xl text-secondary text-center mt-6">MANIFESTA</p>
        </div>
        <div>
          <img src={DEREK} alt="DEREK" />
          <p className="text-2xl text-secondary text-center mt-6">DEREK</p>
        </div>
        <div className="mt-0 lg:mt-48">
          <img src={CHAD} alt="CHAD" />
          <p className="text-2xl text-secondary text-center mt-6">CHAD</p>
        </div>
        <div>
          <img src={KRAKEN} alt="KRAKEN" />
          <p className="text-2xl text-secondary text-center mt-6">KRAKEN</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
