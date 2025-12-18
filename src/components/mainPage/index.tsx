import heroBackend from "../../assets/images/heroBacked.png";
import hero from "../../assets/images/Frame 1984079366.svg";
import heroimage from "../../assets/images/heroImage1.png";
import imageWomen from "../../assets/images/hero1.png";
import imageChart from "../../assets/images/hero2.png";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div className="">
      <section className="bg-[#E8E8E8] grid grid-cols-1 lg:grid-cols-2 gap-5 lg:min-h-[calc(100vh-72px)] pt-[82px] py-10">
        <div className="relative w-full z-10 text-center px-6 lg:pr-0 lg:pl-8 mb-10 lg:mb-0">
          <div className="flex items-center justify-center pb-8">
            <img
              src={heroBackend}
              alt=""
              className="max-w-[200px] sm:max-w-[280px] lg:max-w-[340px]"
            />
          </div>

          <h1 className="text-[36px] lg:text-[48px] xl:text-[64px] leading-[44px] md:leading-[52px] lg:leading-[60px] xl:leading-[70px] text-center text-black">
            Circle Aligned Bridged Stable Coin on{" "}
            <span className="font-medium font-audiowide">
              MST <br /> Blockchain
            </span>
          </h1>

          <div className="max-w-[400px] mx-auto relative flex items-center justify-center mt-8 lg:mt-12 py-4">
            <img src={hero} alt="" className="absolute top-2" />
            <p className="font-alumni text-[50px] md:text-[64px] xl:text-[70px] leading-none z-10 font-semibold">
              USDCE
            </p>
          </div>

          <div className="relative mt-8 lg:mt-12 grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-4 max-w-[600px] mx-auto">
            <motion.div
              animate={{ x: [0, 6, 0], y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="bg-[#D0D5FF] flex items-center justify-center px-5 py-4 rounded-lg mx-auto shadow-sm max-w-[200px]"
            >
              <p className="text-[14px] font-inter leading-5 font-medium">
                Digital Stability Built on USDC Principles. Performance Powered
                by MST Blockchain.
              </p>
            </motion.div>

            <motion.div
              animate={{ x: [0, 0, 0], y: [0, -20, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="bg-[#D0D5FF] flex items-center justify-center px-5 py-4 rounded-lg mx-auto shadow-sm max-w-[200px]"
            >
              <p className="text-[14px] font-inter leading-5 font-medium">
                One-to-one reserve backed with Binance-pegged USDC.
              </p>
            </motion.div>

            <motion.div
              animate={{ x: [0, 6, 0], y: [0, -8, 0], rotate: [-2, -2, -2] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="bg-[#D0D5FF] flex items-center justify-center px-5 py-4 rounded-lg mx-auto shadow-sm max-w-[200px] col-span-2 lg:col-span-1"
            >
              <p className="text-[14px] font-inter leading-5 font-medium">
                Stablecoin benefits delivered via cost-efficient gas
              </p>
            </motion.div>
          </div>

          <a
            className="group w-fit mx-auto mt-12 flex items-center gap-2 px-10 py-2 lg:py-3 xl:py-4 border border-[#5D6DFF] text-[#5D6DFF] text-[16px] lg:text-[20px] xl:text-[24px] font-medium hover:bg-[#5D6DFF] hover:text-white transition shadow-[5px_5px_9px_0px_#a8afeebf]"
            href="https://bridge.onestable.io/"
            target="_blank"
          >
            <p className="group-hover:text-white">Mint USDCE</p>
            <span className="text-xl group-hover:text-white inline-flex items-center">
              <svg viewBox="0 0 16 16" height="1em" width="1em">
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </span>
          </a>
        </div>

        <div className="relative w-full mx-auto">
          <div className="hidden md:flex items-center justify-center">
            <img
              src={heroimage}
              alt=""
              className="w-full max-w-full h-auto object-contain sm:max-w-[420px] md:max-w-[620px] lg:max-w-[740px] lg:max-h-[930px] mx-auto"
            />
          </div>

          <div className="md:hidden relative w-full h-[360px] mt-4">
            <div className="relative mx-auto w-[380px] h-full">
              <div className="absolute top-[-50px] left-7 w-[200px] h-[200px] z-10">
                <div className="absolute -left-4 top-0 w-full h-full scale-[1.05] rounded-full rounded-br-none bg-[rgba(95,95,95,0.17)] min-[460px]:scale-[1.12]" />
                <div className="relative w-full h-full rounded-full rounded-br-none overflow-hidden bg-[#E6E6E6]">
                  <img src={imageWomen} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="absolute top-[130px] left-[170px] w-[200px] h-[200px] z-20">
                <div className="absolute inset-0 scale-[1.05] rounded-full rounded-tl-none bg-[rgba(95,95,95,0.17)] min-[460px]:scale-[1.12]" />
                <div className="relative w-full h-full rounded-full rounded-tl-none overflow-hidden">
                  <img src={imageChart} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
