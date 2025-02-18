import BentoSvg from "./svg/SecondLine/BentoSvg";
import BentoSvg2 from "./svg/SecondLine/BentoSvg2";
import Rectangle20Svg from "./svg/SecondLine/Rectangle20Svg";
import RectangleSvg19 from "./svg/SecondLine/RectangleSvg19";

const SecondBorder = () => {
  return (
    <div>
      <div className="mt-6 flex items-center gap-6">
        <div className="relative">
          <div>
            <RectangleSvg19></RectangleSvg19>
          </div>
          <div className="absolute top-0 left-16">
            <BentoSvg></BentoSvg>
          </div>
          <div className="flex flex-col space-y-2 items-center text-center absolute bottom-12">
            <h3 className="text-[32px] font-semibold text-[#FFFFFF]">
              Lending & Borrowing
            </h3>
            <p className="text-xl text-[#B3B2BE]">
              Access liquidity or earn interest through our secure lending and
              borrowing protocols.
            </p>
          </div>
        </div>
        <div className="relative">
          <div>
            <Rectangle20Svg></Rectangle20Svg>
            <div className="absolute top-0 left-[56px]">
              <BentoSvg2></BentoSvg2>
            </div>
            <div className="flex flex-col items-center text-center absolute bottom-12 left-[185px]">
              <h3 className="text-[32px] font-semibold text-[#FFFFFF]">
                Portfolio Management
              </h3>
              <p className="text-xl text-[#B3B2BE]">
                Comprehensive tools for tracking,analyzing and <br /> optimizing
                your crypto portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 items-center mx-auto justify-center text-center">
        <button className="text-[#FFFFFF] text-2xl rounded-full md:px-12 py-5 bg-linear-to-r from-[#2151FE] to-[#851BFF] cursor-pointer">
          Launch Orbit Agent
        </button>
      </div>
    </div>
  );
};

export default SecondBorder;
