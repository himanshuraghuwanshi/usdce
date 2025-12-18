import leftBg from "../../assets/images/aboutBg.png";

const index = () => {
  return (
     <div>
        <section className="relative bg-[#F2F2F2] overflow-hidden">
      
       <img
        src={leftBg}
        alt=""
        className="
          absolute
          top-0
          left-0
          h-full
          w-full
          pointer-events-none
          select-none
        "
      />

       <div className="relative max-w-[1440px] mx-auto px-4 lg:px-20 py-8 lg:py-12 text-center z-10">

         <div className="flex items-center justify-center gap-6 mb-10">
          <span className="h-[2px] w-[28%] bg-gradient-to-r from-transparent via-[#4150F5] to-[#8190FD] opacity-80" />

          <span className="
            border border-[#5F6FF3]
            bg-white
            text-[#5D6DFF]
            rounded-full
            text-[14px] sm:text-[16px] lg:text-[18px]
            px-6
            py-1.5
            font-audiowide
            whitespace-nowrap
          ">
            Streamlined. Stable. Asset
          </span>

          <span className="h-[2px] w-[28%] bg-gradient-to-l from-transparent via-[#4150F5] to-[#8190FD] opacity-80" />
        </div>

         <h2 className="text-[24px] md:text-[44px] font-semibold text-black leading-tight mb-6">
          Verify USDCE: Fully Backed
          <br />
          and Transparent
        </h2>

         <p className="max-w-[760px] mx-auto text-[15px] md:text-[16px] leading-7 text-black mb-10">
          <span className="font-semibold">USDCE</span> is fully Backed 1:1 by
          Binance-pegged USDC on the BSC Chain. Holders can independently verify
          the backing and the minting process through the following links:
        </p>

         <div className="space-y-4 text-[15px] text-black">

          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="font-semibold">
              Proof of Reserve (Locked Assets):
            </span>
            <a
              href="https://bscscan.com/"
              target="_blank"
              className="underline underline-offset-4 hover:text-[#5F6FF3]"
            >
              View on BSC Scan ↗
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="font-semibold">
              Binance Pegged USDC:
            </span>
            <a
              href="https://bscscan.com/"
              target="_blank"
              className="underline underline-offset-4 hover:text-[#5F6FF3]"
            >
              View on BSC Scan ↗
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="font-semibold">
              USDCE on MST Chain:
            </span>
            <a
              href="https://mstscan.com/"
              target="_blank"
              className="underline underline-offset-4 hover:text-[#5F6FF3]"
            >
              View on MST Scan ↗
            </a>
          </div>

        </div>
      </div>
    </section>
     </div>
  );
};

export default index;
