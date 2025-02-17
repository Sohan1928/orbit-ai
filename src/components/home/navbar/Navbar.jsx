import NavIcon from "./NavIcon";

const Navbar = () => {
  return (
    <div className="max-w-[1328px] mx-auto pt-[30.5px]">
      <div className="flex items-center justify-between px-[30px] py-3 border-[1px] border-[#1D1A3D] rounded-full">
        <NavIcon></NavIcon>
        <ul className="flex text-[#B3B2BE] items-center md:space-x-8 text-xl">
          <li className="cursor-pointer">
            <a>Tokenomics</a>
          </li>
          <li className="cursor-pointer">
            <a>Docs</a>
          </li>
          <li className="cursor-pointer">
            <a>Twitter</a>
          </li>
          <li className="cursor-pointer">
            <a>Discord</a>
          </li>
          <li className="cursor-pointer">
            <a>CA</a>
          </li>
        </ul>
        <button className="text-[#FFFFFF] text-xl rounded-full md:px-[30px] py-4 bg-linear-to-r from-[#2151FE] to-[#851BFF] cursor-pointer">
          Integrate Orbit
        </button>
      </div>
    </div>
  );
};

export default Navbar;
