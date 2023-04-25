import React, { useEffect } from "react";
// import TRENDING from "../assets/trending.png";
// import LOGO_SM from "../assets/LOGO_SM.png";
import DIVIDER from "../assets/DIVIDER.png";
import DIVIDER_SM from "../assets/DIVIDER_SM.svg";
// import WALLET from "../assets/wallet.svg";
import LOGO from "../assets/LOGO.png";

const Home = () => {
  // const list = [
  //   { name: "FreshSwap", value: "+800%" },
  //   { name: "FreshSwap", value: "+800%" },
  //   { name: "FreshSwap", value: "+800%" },
  //   { name: "FreshSwap", value: "+800%" },
  //   { name: "FreshSwap", value: "+800%" },
  //   { name: "FreshSwap", value: "+800%" },
  //   { name: "FreshSwap", value: "+800%" },
  //   { name: "FreshSwap", value: "+800%" },
  //   { name: "FreshSwap", value: "+800%" },
  //   { name: "FreshSwap", value: "+800%" },
  // ];

  // useEffect(() => {
  //   const scrollable = document.querySelector(".scrollable");
  //   scrollable.addEventListener(
  //     "wheel",
  //     function (e) {
  //       if (e.wheelDelta > 0) {
  //         this.scrollLeft -= 100;
  //       } else {
  //         this.scrollLeft += 100;
  //       }
  //     },
  //     { passive: true }
  //   );
  // }, []);

  return (
    <div className="lg:heroGradient heroGradientSM">
      {/* <div className="pl-[8.44rem] pr-[123px] flex flex-col items-center mb-12 font-causten relative">
        <p className="font-black leading-[405px] text-[406px] text-primary relative z-[1]">
          FRESH
        </p>
        <p className="font-bold text-white text-[62px] -mt-[118px] relative z-[2]">
          CREATE. INNOVATE. FRESH-EN UP!
        </p>
        <p className="px-16 text-2xl font-medium text-center text-white mt-7 font-inter">
          A fresher take on the existing DEX model, it has been rebuilt from the
          ground up to facilitate and tackle the fresher needs and issues of
          DeFi!
        </p>
        <div className="mt-[51px] flex gap-6">
          <button className="text-[#BF8EFF] w-[328px] py-[14px] heroBtn font-semibold text-base">
            DOCUMENTATION
          </button>
          <select
            name=""
            id=""
            className="heroBtn font-semibold text-base text-[#BF8EFF] w-[328px] py-[18px] outline-none text-center"
          >
            <option value="">CONNECT TO DAPP</option>
            <option value="BSC">BSC Network</option>
            <option value="Arbitrum">Arbitrum Network</option>
          </select>
        </div>
        <img src={LOGO_HERO} alt="" className="-mt-14" />
      </div> */}
      {/* <ul className="flex flex-row overflow-x-scroll gap-9 scrollbar-hide scrollable bg-primary">
        <li className="pl-20 pr-6 py-6 bg-secondary text-white min-w-[215px] flex">
          <img src={TRENDING} alt="TRENDING" />
          <span className="ml-2 text-xl font-bold text-tPrimary">Trending</span>
        </li>

        {list.map((item, index) => (
          <li
            key={index}
            className="py-6 min-w-[147px] text-tSecondary text-xs font-inter flex items-center"
          >
            #{index + 1} <img src={LOGO_SM} alt="LOGO_SM" className="mx-1" />{" "}
            {item.name} <span className="ml-1 text-tThird">{item.value}</span>
          </li>
        ))}
      </ul> */}
      <div className="px-4 lg:px-[135px]">
        <p className="hidden lg:block text-[406px] leading-[406px] pt-16 text-tFourth text-center font-caustenBlack">
          FRESH
        </p>

        <div className="flex mt-0 lg:-mt-32 justify-center items-center flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-[695px] lg:-ml-4">
            <p className="font-caustenMedium lg:font-caustenBold lg:text-[#69501D] text-white text-xl lg:text-[62px] leading-[36px] lg:leading-[72px] text-center lg:text-left">
              <span className="hidden lg:block">
                CREATE. INNOVATE.
                <br /> FRESH-EN UP!
              </span>
              <span className="block lg:hidden font-caustenMedium">
                Create. Innovate. Freshen Up!
              </span>
            </p>
            <p className="font-inter font-medium text-base lg:text-2xl text-white lg:text-[#754E00] pt-4 pb-8 text-center lg:text-left">
              A fresher take on the existing DEX model, it has been rebuilt from
              the ground up to facilitate and tackle the fresher needs and
              issues of DeFi!
            </p>
            <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-9">
              <button className="heroBtn h-[56px] w-[328px] font-caustenSemiBold text-base text-[#754E00]">
                DOCUMENTATION
              </button>
              <select
                name=""
                id=""
                className="heroBtn h-[56px] w-[328px] outline-none text-center font-caustenSemiBold text-base text-[#754E00] hover:cursor-pointer appearance-none"
              >
                <option value="">CONNECT TO DAPP</option>
                <option value="BSC">BSC NETWORK</option>
                <option value="Arbitrum">ARBITRUM NETWORK</option>
              </select>
            </div>
          </div>
          <div className="w-[159px] lg:w-[466px]">
            <img src={LOGO} alt="logo" className="mt-5 lg:-mt-[70px] lg:ml-9" />
          </div>
        </div>
      </div>
      <img src={DIVIDER} alt="DIVIDER" className="w-full hidden lg:block" />
      <img src={DIVIDER_SM} alt="DIVIDER" className="w-full block lg:hidden" />
    </div>
  );
};

export default Home;
