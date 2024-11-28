import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div id="home">
      <div className="flex justify-start px-10 py-20 md:px-24 md:py-40  h-dvh">
        <div className="z-10">
          <div className="font-firaCode mb-10">
            <h1 className="text-3xl lg:text-6xl md:text-5xl font-extrabold md:w-[35rem] max-w-[45rem] mb-4">
              Trusted Multi-Chain <span className="text-[#f9d423]">DEX</span>{" "}
              Platform
            </h1>
            <p className="text-[#9E9E9E] ">
              Trade, earn and own crypto on the all-in-one multi-chain DEX
            </p>
          </div>
          <div className="flex gap-6">
            <Button variant="custom" size="lg">
              Connect Wallet
            </Button>
            <Button variant="content" size="lg">
              Trade Crypto
            </Button>
          </div>
        </div>
        <div className="z-10 hidden lg:block absolute top-1/3 left-[77%] bg-gradient-to-br from-[#FFF6D7] to-[#E4B40D] rounded-full h-44 w-44"></div>
        <img
          src="/star-img.png"
          alt="star image"
          width={40}
          className="absolute top-[30%] left-[10%]"
        />
        <img
          src="/star-img1.png"
          alt="star image"
          width={30}
          className="absolute top-[20%] left-[83%]"
        />
        <img
          src="/star-img.png"
          alt="star image"
          width={35}
          className="absolute top-[87%] left-[83%]"
        />
        <div className="absolute top-[20%] left-[1%] h-[60vh] w-[80vw] border border-[#484848] rounded-[50%] transform rotate-[10deg] z-0"></div>
        <div className="absolute top-[6%] left-[-15%] h-[90vh] w-[110vw] border border-[#484848] rounded-[50%] transform rotate-[10deg] z-0"></div>

        <div className="absolute top-[-5%] left-[-25%] h-[130vh] w-[140vw] border border-[#484848] rounded-[50%] transform rotate-[10deg] z-0"></div>

        <div className="absolute top-[10%] left-[7%] h-36 w-36 blur-[100px] rounded-full bg-gradient-to-r from-[#E4B40D] to-[#EDD955]"></div>
        <div className="absolute top-[65%] left-[78%] h-40 w-40 blur-[120px] rounded-full bg-gradient-to-r from-[#E4B40D] to-[#EDD955]"></div>
      </div>
    </div>
  );
};

export default Hero;
