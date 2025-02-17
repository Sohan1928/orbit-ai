import SecondBorder from "./SecondBorder";
import EllipseSvg20 from "./svg/EllipseSvg20";
import EllipseSvg21 from "./svg/EllipseSvg21";
import EllipseSvg22 from "./svg/EllipseSvg22";
import MaskGroupSvg from "./svg/MaskGroupSvg";
import OrbitBoxSvg from "./svg/OrbitBoxSvg";
import RectangleSvg17 from "./svg/RectangleSvg17";
import TickSvg from "./svg/TickSvg";

const AllBorders = () => {
  return (
    <div className="mt-20 pb-20">
      <div className="flex gap-6">
        <div className="border relative border-[#262346] bg-[#040128] rounded-[20px] shadow-[#262346] shadow-[inset_15px_10px_20px_20px] w-[790px] h-[537px]">
          <div className="top-[28px] left-[320px] absolute z-100">
            <TickSvg></TickSvg>
          </div>
          <div className="absolute right-68 -top-[25px] rounded-b-lg z-100">
            <EllipseSvg20></EllipseSvg20>
          </div>
          <div className="absolute top-0 left-[252px] z-80">
            <EllipseSvg21></EllipseSvg21>
          </div>
          <div className="absolute top-0">
            <EllipseSvg22></EllipseSvg22>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 absolute bottom-16 left-[140px]">
            <h3 className="text-[#FFFFFF] text-[32px] font-semibold">
              Swaps & Bridges
            </h3>
            <p className="text-[#B3B2BE] text-xl">
              Effortlessly swap tokens and bridge assets across 116 <br />
              chains with optimal efficiency.
            </p>
          </div>
          <div className="w-[287px] h-[209px] z-20 border-[#040128] rounded-b-[20px] absolute -top-4 left-60 border-8 border-t-transparent bg-[#040128]"></div>
          <div className="w-[270px] h-[95px] z-100 border-[#616383] border-t-transparent rounded-b-[20px] absolute top-[93px] left-[250px] border-2"></div>
          <div className="absolute">
            <OrbitBoxSvg></OrbitBoxSvg>
          </div>
        </div>
        {/* <div className="border border-[#262346] bg-[#040128] rounded-[20px] w-[514px] h-[537px]">
        </div> */}
        <div className="relative">
          <div>
            <RectangleSvg17></RectangleSvg17>
          </div>
          <div className="absolute -top-1.5">
            <MaskGroupSvg></MaskGroupSvg>
          </div>
          <div className="absolute flex flex-col space-y-4 items-center text-center bottom-16">
            <h3 className="text-[32px] font-semibold text-[#FFFFFF]">
              Staking & Yield
            </h3>
            <p className="text-xl text-[#B3B2BE]">
              Maximize your returns with our intelligent staking and yield
              farming strategies.
            </p>
          </div>
        </div>
      </div>
      <div>
        <SecondBorder></SecondBorder>
      </div>
    </div>
  );
};

export default AllBorders;
