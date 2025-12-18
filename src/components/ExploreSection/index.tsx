import topLeftPattern from "../../assets/images/magicPatterTopLeft.png";
import bottomRightPattern from "../../assets/images/magicPatterBottomLeft.png";
import leftCurve from "../../assets/images/LeftCurveLine.png";
import rightCurve from "../../assets/images/RIghtCurveLine.png";
import figma1 from "../../assets/figma1.png";
import figma2 from "../../assets/images/figma2.png";
import figma3 from "../../assets/images/figma3.png";
const index = () => {
  return (
    <section className="relative w-full bg-[#5D6DFF] overflow-hidden">
       <img
        src={topLeftPattern}
        alt=""
        className="hidden md:block absolute -left-85 -top-30 max-w-[500px] z-0"
      />

      <img
        src={bottomRightPattern}
        alt=""
        className="hidden md:block absolute -right-65 -bottom-20 max-w-[400px] z-0"
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-20 py-8 text-center text-white z-10">
        <div className="flex items-center justify-center gap-6 mb-10">
          <span className="h-[2px] w-[28%] bg-gradient-to-r from-transparent via-white/40 to-white/10" />

          <span
            className="
  bg-[#F6F7FFB2] text-black 
    rounded-full
   
    text-[14px] sm:text-[16px] lg:text-[24px]
    px-4 sm:px-5 lg:px-6
    py-1 sm:py-1.5 font-audiowide whitespace-nowrap

  "
          >
            Explore the Process
          </span>

          <span className="h-[2px] w-[28%] bg-gradient-to-l from-transparent via-white/40 to-white/10" />
        </div>

        <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-medium mb-4">
          Lock & Mint Mechanism
        </h2>

        <p className="text-[15px] md:text-[17px] text-white/90 max-w-[720px] mx-auto mb-16">
          A guided sequence that makes the entire experience effortless.
        </p>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="flex flex-col items-center mb-8 max-w-[260px]">
            <div className="relative mb-2">
              <div className="w-28 h-28 rounded-full flex items-center justify-center">
                <img
                  src={figma1}
                  alt=""
                  className="text-[#F0B90B] text-xl font-bold"
                />
              </div>
            </div>
            <p className="text-lg leading-snug font-semibold">
              <span className="font-bold text-[22px]">Lock assets on</span> <br /> Binance smart chain
            </p>
          </div>

          <img
            src={leftCurve}
            alt=""
            className="hidden lg:block left-1/2 top-1/3 -translate-y-2 w-50"
          />
          <div className="flex flex-col items-center max-w-[720px] text-center">
            <p
              className="
      order-2
      lg:order-1
      text-lg
      mb-4
      leading-snug
     font-semibold
    "
            >
                <span className="text-[22px] font-bold">Mint USDCE</span> on <br/> MST Blockchain
            </p>

            <div
              className="
      order-1
      lg:order-2
      w-28
      h-28
      rounded-full
      flex
      items-center
      justify-center
    "
            >
              <img src={figma2} alt="" className=" object-contain" />
            </div>
          </div>
          <img
            src={rightCurve}
            alt=""
            className="hidden lg:block right-1/2 top-1/3 -translate-y-3 w-50"
          />
          <div className="flex flex-col items-center max-w-[260px]">
            <div className="relative mb-2">
              <div className="w-28 h-28 rounded-full flex items-center justify-center">
                <span className="text-[#5D6DFF] text-xl font-bold">
                  <img
                    src={figma3}
                    alt=""
                    className="text-[#5D6DFF] text-xl font-bold"
                  />
                </span>
              </div>
            </div>
            <p className="text-lg leading-snug font-semibold">
              Use across MST <br />
              <span className="font-bold">dApps</span>, <span className="font-bold">Wallets,</span> <br/>and <span className="font-bold">Platforms</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
