import patternImage from "../../assets/images/magicPatter.png";

const InspiredByUSDCSection = () => {
  return (
    <section className="relative  bg-[#5D6DFF] overflow-x-hidden">
       <img
        src={patternImage}
        alt=""
        className="
          hidden md:block
          absolute
          -right-20
          -bottom-20
          lg:-right-10
          lg:-bottom-10
          max-w-[200px]
          max-h-[380px]
          w-full
          pointer-events-none
          select-none
          z-0
        "
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-20 py-12 lg:py-12 text-center text-white z-10">
        <div className="flex items-center justify-center gap-6 mb-14">
          <span className="h-[0.3vh] w-[28%] bg-gradient-to-r from-transparent via-[#d2d4e9] to-[#e0e3fa] opacity-80" />

          <span className="bg-[#F6F7FB] text-black rounded-full px-4 sm:px-5 lg:px-6 py-1 sm:py-1.5 font-audiowide text-[14px] sm:text-[16px] lg:text-[24px] whitespace-nowrap">
            Inspired By USDC
          </span>

          <span className="h-[2px] w-[28%] bg-gradient-to-l from-transparent via-[#d2d4e9] to-[#e0e3fa] opacity-80" />
        </div>
        <h2 className="text-[34px] md:text-[44px] font-medium leading-tight mb-8">
          USDCE : Circle-Aligned
          <br />
          Bridged Stablecoin
        </h2>
        <p className="text-[16px] md:text-[17px] leading-7 max-w-[820px] mx-auto text-white/90 mb-10">
          Circle’s prescribed framework for deploying bridged USDC on EVM
          Blockchains has been adopted, allowing for optional migration to
          native issuance in the future.
        </p>

        <div className="flex justify-center">
          <a
            href="https://www.circle.com/bridged-usdc"
            target="_blank"
            className="
              inline-flex items-center gap-3
              px-4 md:px-7 py-2 md:py-3
              border border-white/80
              text-white text-sm font-medium
              rounded
              hover:bg-white hover:text-[#5D6DFF]
              transition
            "
          >
            Explore Bridged USDC Standard
            <span className="text-xl group-hover:text-white inline-flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InspiredByUSDCSection;
