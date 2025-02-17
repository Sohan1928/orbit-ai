import EllipseSvg from "./svg/EllipseSvg";
import EllipseSvg2 from "./svg/EllipseSvg2";
import IconSvg from "./svg/IconSvg";
import LineSvg from "./svg/LineSvg";
import ManIconSvg from "./svg/manIconSvg";
import Rectangle3Svg from "./svg/Rectangle3Svg";
import Rectangle4Svg from "./svg/Rectangle4Svg";
import RectangleSvg1 from "./svg/RectangleSvg1";
import RectangleSvg2 from "./svg/RectangleSvg2";
import Svg1 from "./svg/smallSvg/Svg1";
import Svg2 from "./svg/smallSvg/Svg2";
import Svg3 from "./svg/smallSvg/Svg3";
import Svg4 from "./svg/smallSvg/Svg4";
import Svg5 from "./svg/smallSvg/Svg5";
import SquareBorderSvg from "./svg/SquareBorderSvg";
import TreeSvg from "./svg/TreeSvg";
import VastSvg from "./svg/VastSvg";

const Banner = () => {
  return (
    <div className="mt-[80px] relative">
      <div className=" text-center">
        <h1 className="text-white font-semibold text-[50px]">
          Your Al Companion for <br /> Effortless DeFi
        </h1>
        <p className="text-[#B3B2BE] mt-6">
          Effortless, automated, and intuitive—Orbit transforms how you
          interacts with DeFi.
        </p>
        <button className="mt-10 text-[#FFFFFF] text-xl rounded-full md:px-[30px] py-3 bg-linear-to-r from-[#2151FE] to-[#851BFF]">
          Explore
        </button>
      </div>
      <span className="absolute -top-52">
        <RectangleSvg1></RectangleSvg1>
      </span>
      <div className="mx-auto text-center max-w-[1328px] mt-8">
        <div className="absolute right-0 top-64">
          <RectangleSvg2></RectangleSvg2>
        </div>
        <div className="relative">
          <SquareBorderSvg></SquareBorderSvg>

          <div className="absolute bottom-[191px] left-[416px]">
            <TreeSvg></TreeSvg>
          </div>
          <div className="absolute bottom-[568px] left-[602px]">
            <ManIconSvg></ManIconSvg>
          </div>
          <div className="absolute bottom-[372px] left-[592px]">
            <IconSvg></IconSvg>
          </div>
        </div>
        <div>
          <div className="absolute left-[655px] bottom-[232px]">
            <Svg1></Svg1>
          </div>
          <div className="absolute left-[748px] bottom-[236px]">
            <Svg2></Svg2>
          </div>
          <div className="absolute left-[848px] bottom-[232px]">
            <Svg3></Svg3>
          </div>
          <div className="absolute left-[938px] bottom-[232px]">
            <Svg4></Svg4>
          </div>
          <div className="absolute left-[1032px] bottom-[232px]">
            <Svg5></Svg5>
          </div>
        </div>
      </div>
      <div className="absolute left-[420px] top-[170px]">
        <EllipseSvg></EllipseSvg>
      </div>
      <div className="absolute -bottom-20">
        <VastSvg></VastSvg>
      </div>
      <div className="absolute -bottom-20 left-[530px]">
        <EllipseSvg2></EllipseSvg2>
      </div>
      <div>
        <h3 className="text-white absolute text-[28px] font-semibold left-[680px] bottom-8">
          Vast ecosystem integration
        </h3>
      </div>
      <div className="absolute left-48">
        <LineSvg></LineSvg>
      </div>
      <div className="absolute -bottom-16 left-48">
        <img src="CompanyName.png" alt="" />
      </div>
      <div className="absolute -bottom-20 left-[90px] ">
        <Rectangle3Svg></Rectangle3Svg>
      </div>
      <div className="absolute flex items-center -bottom-20 right-[80px]">
        <Rectangle4Svg></Rectangle4Svg>
      </div>
    </div>
  );
};

export default Banner;
