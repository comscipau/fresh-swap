import React from "react";
import GLASS from "../assets/GLASS.png";
import RICH from "../assets/RICH.png";

const Details = () => {
  return (
    <div className="text-white gradient2 font-causten">
      <div className="flex items-center justify-between pt-[5.75rem] gap-[3.44rem] pl-11 pr-[8.44rem]">
        <img src={GLASS} alt="GLASS" />
        <div className="text-right w-[573px]">
          <p className="text-[4rem] font-bold">
            So, why go <span className="text-tThird">FRESH?</span>
          </p>
          <p className="text-2xl leading-7">
            As a <span className="font-bold">PROJECT</span> -{" "}
            <span className="text-tThird">Fresh</span>
            <span className="text-secondary">Swap</span> allows you to grow your
            project treasury regardless of whether you have a taxed, or a
            non-taxed token. As all the taxes and fees are collected before or
            after the swap in USDC which does not devalue the project in anyway
            shape or form as opposed to existing model.
            <br />
            <br />
            In addition to that, all projects are required to be paired with
            USDC as opposed to any other volatile crypto, which leads to
            stabilization in prices.
            <br />
            <br />
            As an <span className="font-bold">INVESTOR</span> -{" "}
            <span className="text-tThird">Fresh</span>
            <span className="text-secondary">Swap</span> allows you to be in
            control of the liquidity. With our unique DAO controlled Liquidity
            Pool, you can sleep well knowing your funds are safe! Along with
            that, any token with a tax can be traded on FreshSwap with 0 trading
            fee!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-[7.94rem] gap-[3.44rem] px-[8.44rem]">
        <div className="w-[573px]">
          <p className="text-[4rem] font-bold">
            <span className="text-secondary">Earn</span> Passively!
          </p>
          <p className="mt-8 text-2xl">
            With our solid referral program you can get rich without lifting a
            finger! We encourage anyone and everyone to refer projects to launch
            on our platform and as a reward you earn 10% of all the fees
            generated from that pool for the next month!
          </p>
        </div>
        <img src={RICH} alt="RICH" />
      </div>
    </div>
  );
};

export default Details;
