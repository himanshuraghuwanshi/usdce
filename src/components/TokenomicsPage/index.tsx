import token from "../../assets/images/Token.png";
import tokentype from "../../assets/images/TypeToken.png"
import token2 from "../../assets/images/token2.png"
import token3 from "../../assets/images/token3.png"
import token4 from "../../assets/images/token4.png"
import token5 from "../../assets/images/token5.png"

const index = () => {
  return (
     <div className=" w-full ">
        <div className="bg-[#5D6DFF] w-full">
      <section className=" mx-auto pb-10 w-full overflow-x-hidden">
        <div className="max-w-[90%] mx-auto">
          <div className="flex items-center justify-center gap-6 py-8 ">
            <span className="h-[1.5px] w-[35%] bg-gradient-to-r from-transparent via-white/40 to-white" />
            <span
              className="
  bg-[#F6F7FFB2] text-black
    rounded-full
   
    text-[14px] sm:text-[16px] lg:text-[24px]
    px-4 sm:px-5 lg:px-6
    py-1 sm:py-1.5 font-audiowide whitespace-nowrap"
            >
              Tokenomics
            </span>

            <span className="h-[1.5px] w-[35%] bg-gradient-to-l from-transparent via-white/10 to-white" />
          </div>
          <h2 className="text-[30px] md:text-[38px] font-medium mb-3 text-white">
            USDCE Token Structure
          </h2>
          <p className="text-center text-[18px] text-white/80 mb-16 mx-auto">
            How the token is created, used, and distributed in the ecosystem
          </p>
          <div className="flex flex-col lg:flex-row gap-14">
            <div className="order-2 lg:order-1 w-full lg:w-[45%] hidden lg:flex justify-center lg:justify-start">
              <img
                src={token}
                alt=""
                className="w-[300px] sm:w-[360px] lg:w-[420px]"
              />
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-[55%] flex flex-col justify-between">
              <div className="flex items-start gap-4  border-b-2 pb-2 border-gray-400">
                <img src={tokentype} alt="" className="w-5 h-5 sm:mt-1 mt-2" />
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 w-full">
                  <p
                    className="
    w-full sm:w-[90px]
    text-[14px] sm:text-[16px] lg:text-[18px]
    text-white/90 font-medium
    leading-6 font-inter
  "
                  >
                    Type
                  </p>
                  <p
                    className="
    w-full
    text-[14px] sm:text-[16px] lg:text-[18px]
    text-white/90
    leading-6 font-inter
  "
                  >
                    USD-aligned stable digital token
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4  border-b-2 pb-2 border-gray-400">
                <img src={token2} alt="" className="w-5 h-5 sm:mt-1 mt-2" />
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 w-full">
                  <p
                    className="
    w-full sm:w-[90px]
    text-[14px] sm:text-[16px] lg:text-[18px]
    text-white/90 font-medium
    leading-6 font-inter
  "
                  >
                    Model
                  </p>
                  <p
                    className="
    w-full
    text-[14px] sm:text-[16px] lg:text-[18px]
    text-white/90
    leading-6 font-inter
  "
                  >
                    Lock-and-mint (1:1 value representation)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4  border-b-2 pb-2 border-gray-400">
                <img src={token3} alt="" className="w-5 h-5 sm:mt-1 mt-2" />
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 w-full">
                  <p
                    className="
    w-full sm:w-[90px]
    text-[14px] sm:text-[16px] lg:text-[18px]
    text-white/90 font-medium
    leading-6 font-inter
  "
                  >
                    Network
                  </p>
                  <p
                    className="
    w-full
    text-[14px] sm:text-[16px] lg:text-[18px]
    text-white/90
    leading-6 font-inter
  "
                  >
                    MST Blockchain
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4  border-b-2 pb-2 border-gray-400">
                <img src={token4} alt="" className="w-5 h-5 sm:mt-1 mt-2" />
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 w-full">
                  <p
                    className="
    w-full sm:w-[90px]
    text-[14px] sm:text-[16px] lg:text-[18px]
    text-white/90 font-medium
    leading-6 font-inter
  "
                  >
                    Use Cases
                  </p>
                  <p
                    className="
    w-full
    text-[14px] sm:text-[16px] lg:text-[18px]
    text-white/90
    leading-6 font-inter
  "
                  >
                    Payments, transfers, staking, DeFi, cross-chain settlements
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4  border-b-2 pb-2 border-gray-400">
                <img src={token5} alt="" className="w-5 h-5 sm:mt-1 mt-2" />
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 w-full">
                  <p
                    className="
    w-full sm:w-[90px]
    text-[14px] sm:text-[16px] lg:text-[18px]
    text-white/90 font-medium
    leading-6 font-inter
  "
                  >
                    Supply
                  </p>
                  <p
                    className="
    w-full
    text-[14px] sm:text-[16px] lg:text-[18px]
    text-white/90
    leading-6 font-inter
  "
                  >
                    Minted based on locked reserves via bridge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="py-8 text-[14px] lg:text-[20px] text-black text-center">
        Bridged By <span className="font-semibold">OneStable</span>
    </div>
     </div>
  );
};

export default index;
