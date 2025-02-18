import JoinCart from "./JoinCart";

const JoinTheRevolution = () => {
  return (
    <div className="mt-[160px]">
      <div className="flex items-center flex-col text-center space-y-6">
        <h2 className="text-[50px] font-semibold text-[#FFFFFF]">
          Join the Revolution
        </h2>
        <p className="text-xl text-[#B3B2BE]">
          Be part of the next generation of decentralized finance
        </p>
      </div>
      <JoinCart></JoinCart>
    </div>
  );
};

export default JoinTheRevolution;
