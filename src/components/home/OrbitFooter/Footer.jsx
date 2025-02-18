import FooterLineSvg from "./svg/FooterLineSvg";

const Footer = () => {
  return (
    <div className="max-w-[1328px] mx-auto pb-8">
      <div className="flex">
        {/* left side text */}
        <div className="w-[664px]">
          <div className="text-[36px] text-start font-bold bg-gradient-to-r from-[#2151FE] to-[#851BFF] inline-block text-transparent bg-clip-text">
            <h4 className="">Orbit</h4>
          </div>
          <p className="text-xl mt-10 text-[#B3B2BE]">
            Orbit is not just another DeFi platform; it is a <br />{" "}
            comprehensive ecosystem designed to <br /> revolutionize cross-chain
            interactions and <br />
            optimize your crypto experience.
          </p>
        </div>
        {/* right side text */}
        <div>
          <div className="flex items-center justify-between mx-auto w-[664px] px-4 text-white">
            <nav className="flex flex-col space-y-10">
              <h6 className="text-2xl font-semibold text-[#FFFFFF]">Home</h6>
              <div className="flex flex-col space-y-4">
                <a className="text-lg text-[#B3B2BE]">Features</a>
                <a className="text-lg text-[#B3B2BE]">Pricing</a>
                <a className="text-lg text-[#B3B2BE]">Integrations</a>
                <a className="text-lg text-[#B3B2BE]">FAQs</a>
                <a className="text-lg text-[#B3B2BE]">Blog</a>
              </div>
            </nav>
            <nav className="flex flex-col space-y-10">
              <h6 className="text-2xl font-semibold text-[#FFFFFF]">
                More Templates
              </h6>
              <div className="flex flex-col space-y-4">
                <a className="text-lg text-[#B3B2BE]">NajmAI</a>
                <a className="text-lg text-[#B3B2BE]">Sawad</a>
                <a className="text-lg text-[#B3B2BE]">Ruya</a>
                <a className="text-lg text-[#B3B2BE]">Nashra</a>
                <a className="text-lg text-[#B3B2BE]">Bayt</a>
              </div>
            </nav>
            <nav className="flex flex-col space-y-10">
              <h6 className="text-2xl font-semibold text-[#FFFFFF]">Company</h6>
              <div className="flex flex-col space-y-4">
                <a className="text-lg text-[#B3B2BE]">About</a>
                <a className="text-lg text-[#B3B2BE]">Contact</a>
                <a className="text-lg text-[#B3B2BE]">Privacy Policy</a>
                <a className="text-lg text-[#B3B2BE]">Terms & Condition</a>
                <a className="text-lg text-[#B3B2BE]">Get Templates</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <FooterLineSvg></FooterLineSvg>
        <div className="text-[#B3B2BE] mt-10 flex items-center justify-between text[16px] underline">
          <div className="flex items-center gap-6">
            <a>Privacy</a>
            <a>Policy</a>
          </div>
          <div>
            <a>Copyright 2025</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
