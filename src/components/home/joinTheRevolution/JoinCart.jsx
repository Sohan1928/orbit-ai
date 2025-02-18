import BentoSvg53 from "./svg/firstCart/BentoSvg53";
import BgSvg from "./svg/firstCart/BgSvg";
import BentoSvg20 from "./svg/secondCart/BentoSvg20";
import BentoSvg5 from "./svg/secondCart/BentoSvg5";
import SecondBgSvg from "./svg/secondCart/SecondBgSvg";
import BentoSvg52 from "./svg/thirdCart/BentoSvg52";
import ThirdBgSvg from "./svg/thirdCart/ThirdBgSvg";

const JoinCart = () => {
  return (
    <div className="mt-20 max-w-[1328px] mx-auto md:flex items-center gap-6">
      {/* First Cart */}
      <div className="relative">
        <BgSvg></BgSvg>
        {/* heading */}
        <div className="flex flex-col space-y-2 absolute items-center text-center top-12 left-16">
          <h2 className="text-[26px] text-[#FFFFFF] font-semibold">
            Cross-Chain Integration
          </h2>
          <p className="text-[16px] text-[#B3B2BE]">
            Seamlessly connect and operate across 116 <br /> different
            blockchain networks.
          </p>
        </div>
        <div className="absolute bottom-0 left-14">
          <BentoSvg53></BentoSvg53>
        </div>
      </div>
      {/* Second Cart */}
      <div className="relative">
        <SecondBgSvg></SecondBgSvg>
        {/* heading */}
        <div className="flex flex-col items-center space-y-2 absolute top-12 left-16 text-center">
          <h3 className="text-[26px] text-[#FFFFFF] font-semibold">
            Al-Enhanced Trading
          </h3>
          <p className="text-[16px] text-[#B3B2BE]">
            Leverage advanced Al algorithms for <br /> smarter, more efficient
            trading strategies.
          </p>
        </div>
        <div className="absolute top-44 left-14">
          <BentoSvg5></BentoSvg5>
        </div>
        <div className="absolute bottom-0 left-0">
          <BentoSvg20></BentoSvg20>
        </div>
      </div>
      {/* Third Cart */}
      <div className="relative">
        <ThirdBgSvg></ThirdBgSvg>
        {/* heading */}
        <div className="flex flex-col items-center text-center space-y-2 absolute top-12 left-16">
          <h3 className="text-[26px] font-semibold text-[#FFFFFF]">
            High-Speed Transactions
          </h3>
          <p className="text-[16px] text-[#B3B2BE]">
            Experience lightning-fast swaps and <br /> transfers across Orbit
            Agent.
          </p>
        </div>
        <div className="absolute -bottom-8 -left-14">
          <BentoSvg52></BentoSvg52>
        </div>
      </div>
    </div>
  );
};

export default JoinCart;
