import React, { useEffect } from "react";
import TRENDING from "../assets/trending.png";
import LOGO_SM from "../assets/LOGO_SM.png";
import DIVIDER from "../assets/DIVIDER.png";
import WALLET from "../assets/wallet.svg";
import LOGO_HERO from "../assets/LOGO_HERO.png";

const Home = () => {
  const list = [
    { name: "FreshSwap", value: "+800%" },
    { name: "FreshSwap", value: "+800%" },
    { name: "FreshSwap", value: "+800%" },
    { name: "FreshSwap", value: "+800%" },
    { name: "FreshSwap", value: "+800%" },
    { name: "FreshSwap", value: "+800%" },
    { name: "FreshSwap", value: "+800%" },
    { name: "FreshSwap", value: "+800%" },
    { name: "FreshSwap", value: "+800%" },
    { name: "FreshSwap", value: "+800%" },
  ];

  useEffect(() => {
    const scrollable = document.querySelector(".scrollable");
    scrollable.addEventListener(
      "wheel",
      function (e) {
        if (e.wheelDelta > 0) {
          this.scrollLeft -= 100;
        } else {
          this.scrollLeft += 100;
        }
      },
      { passive: true }
    );
  }, []);

  return (
    <div className="heroGradient">
      <div className="bg-primary px-[8.44rem] flex justify-between items-center">
        <ul className="flex font-causten font-bold text-xl text-white">
          <li className="hover:cursor-pointer">Trade</li>
          <li className="mx-6 hover:cursor-pointer">Tools</li>
          <li className="hover:cursor-pointer">Team</li>
        </ul>
        <button className="flex py-2 px-5 bg-secondary rounded-2xl my-2">
          <img src={WALLET} alt="WALLET" />
          <span className="ml-4 font-causten font-bold text-xl">
            Connect Wallet
          </span>
        </button>
      </div>
      <div className="pl-[8.44rem] pr-[123px] flex justify-between my-12">
        <div className="w-[35.81rem] mt-6">
          <div className="font-causten font-bold">
            <p className="text-tFourth text-5xl">
              Fresh<span className="text-tPrimary">Swap.</span>
            </p>
            <p className="text-[64px] text-tFourth">CREATE. INNOVATE.</p>
            <p className="text-[64px] text-tFourth">
              <span className="text-tFifth">FRESHEN</span>&nbsp; UP!
            </p>
          </div>
          <p className="text-white font-inter text-[28px]">
            A fresher take on the existing DEX model, it has been rebuilt from
            the ground up to facilitate and tackle the fresher needs and issues
            of DeFi!
          </p>
          <button className="launchBtn font-causten font-semibold text-[32px] text-tPrimary py-5 px-12 mt-8">
            LAUNCHING Q1 2023
          </button>
        </div>
        <div className="w-[28.38rem]">
          <img src={LOGO_HERO} alt="LOGO_HERO" />
        </div>
      </div>
      <ul className="flex flex-row gap-9 overflow-x-scroll scrollbar-hide scrollable bg-primary">
        <li className="pl-20 pr-6 py-6 bg-secondary text-white min-w-[215px] flex">
          <img src={TRENDING} alt="TRENDING" />
          <span className="text-xl text-tPrimary ml-2 font-bold">Trending</span>
        </li>

        {list.map((item, index) => (
          <li
            key={index}
            className="py-6 min-w-[147px] text-tSecondary text-xs font-inter flex items-center"
          >
            #{index + 1} <img src={LOGO_SM} alt="LOGO_SM" className="mx-1" />{" "}
            {item.name} <span className="text-tThird ml-1">{item.value}</span>
          </li>
        ))}
      </ul>
      <img src={DIVIDER} alt="DIVIDER" className="w-full" />
    </div>
  );
};

export default Home;
