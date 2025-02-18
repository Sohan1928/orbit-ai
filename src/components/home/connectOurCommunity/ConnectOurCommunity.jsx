import CommunityBgSvg from "./svg/CommunityBgSvg";
import DiscordSvg from "./svg/DiscordSvg";
import EllipseSvg27 from "./svg/EllipseSvg27";
import FacebookSvg from "./svg/FacebookSvg";
import FiverSvg from "./svg/FiverSvg";
import GoogleSvg from "./svg/GoogleSvg";
import InstagramSvg from "./svg/InstagramSvg";
import LineSvg4 from "./svg/LineSvg4";
import LineSvg6 from "./svg/LineSvg6";
import MiddleBgSvg from "./svg/MiddleBgSvg";
import MiddleManSvg from "./svg/MiddleManSvg";
import TelegramSvg from "./svg/TelegramSvg";
import TwitterSvg from "./svg/TwitterSvg";

const ConnectOurCommunity = () => {
  return (
    <div className="mt-[160px] max-w-[1328px] mx-auto">
      <div>
        <h3 className="text-[50px] font-semibold mx-auto text-[#FFFFFF] text-center flex items-center flex-col">
          Connect with Our Community
        </h3>
      </div>
      {/* below svg */}
      <div className="relative">
        <CommunityBgSvg></CommunityBgSvg>
        <div className="absolute top-36 left-0">
          <FiverSvg></FiverSvg>
        </div>
        {/* social all svg */}
        <div className="absolute top-[156px] left-28">
          <FacebookSvg></FacebookSvg>
        </div>
        <div className="absolute top-[330px] left-[210px]">
          <DiscordSvg></DiscordSvg>
        </div>
        <div className="absolute top-[418px] left-[398px]">
          <TelegramSvg></TelegramSvg>
        </div>
        <div className="absolute bottom-[290px] left-[900px]">
          <GoogleSvg></GoogleSvg>
        </div>
        <div className="absolute bottom-[376px] left-[1090px]">
          <InstagramSvg></InstagramSvg>
        </div>
        <div className="absolute top-[155px] left-[1195px]">
          <TwitterSvg></TwitterSvg>
        </div>
        {/* middle svg */}
        <div className="absolute top-40 left-[470px]">
          <MiddleBgSvg></MiddleBgSvg>
        </div>
        <div className="absolute top-68 left-[595px]">
          <MiddleManSvg></MiddleManSvg>
        </div>
        {/* left side all svg */}
        <div className="absolute top-[240px] left-[535px] z-40">
          <EllipseSvg27></EllipseSvg27>
        </div>
        <div className="absolute top-[250px] left-[470px]">
          <LineSvg6></LineSvg6>
        </div>
        <div className="absolute top-[332px] left-[535px] z-40">
          <EllipseSvg27></EllipseSvg27>
        </div>
        <div className="absolute top-[341px] left-[470px]">
          <LineSvg6></LineSvg6>
        </div>
        <div className="absolute top-[420px] left-[535px] z-40">
          <EllipseSvg27></EllipseSvg27>
        </div>
        <div className="absolute top-[430px] left-[470px]">
          <LineSvg6></LineSvg6>
        </div>
        {/* right side all svg */}
        <div className="absolute top-[240px] left-[778px] z-40">
          <EllipseSvg27></EllipseSvg27>
        </div>
        <div className="absolute top-[250px] left-[792px]">
          <LineSvg4></LineSvg4>
        </div>
        <div className="absolute top-[332px] left-[778px] z-40">
          <EllipseSvg27></EllipseSvg27>
        </div>
        <div className="absolute top-[341px] left-[792px]">
          <LineSvg4></LineSvg4>
        </div>
        <div className="absolute top-[420px] left-[778px] z-40">
          <EllipseSvg27></EllipseSvg27>
        </div>
        <div className="absolute top-[430px] left-[792px]">
          <LineSvg4></LineSvg4>
        </div>
      </div>
    </div>
  );
};

export default ConnectOurCommunity;
