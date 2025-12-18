
const index = () => {
  return (
    <div className="bg-[#E8E8E8] ">
      <section className="max-w-[90%] mx-auto py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:sticky lg:top-[140px] self-start">
            <h1 className="font-semibold text-[44px] lg:text-[48px] leading-[1.2] text-left max-w-[60%] mb-6 text-4xl">
              Powering Fast Affordable Stable Transaction
            </h1>
            <p className=" max-w-[90%] text-left text-gray-800 leading-7 text-[18px]">
              Designed for trust and interoperability, it delivers seamless
              performance across modern blockchain ecosystems.
            </p>
          </div>
          <div className=" space-y-10 lg:space-y-14 text-left max-w-[90%]">
            <div className="text-[28px] md:text-[30px] lg:text-[32px]  leading-[1.3]">
              Designed for{" "}
              <span className="text-[#5F6FF3] font-medium">Scalability</span>,
              supporting growing on-chain adoption
            </div>
            <div className="text-[28px] md:text-[30px] lg:text-[32px] leading-[1.3]">
              Faster{" "}
              <span className="text-[#5F6FF3] font-medium">
                Settlement Times
              </span>{" "}
              compared to congested mainnets
            </div>
            <div className="text-[28px] md:text-[30px] lg:text-[32px] leading-[1.3] xl:text-[35px]">
              <span className="text-[#5F6FF3] font-medium">Cost-efficient</span>{" "}
              transactions enabled by MST Chain’s low gas fees
            </div>
            <div className="text-[28px] md:text-[30px] lg:text-[32px] leading-[1.3] xl:text-[35px]">
              Secure{" "}
              <span className="text-[#5F6FF3]  font-medium">Lock-and-Mint</span>{" "}
              mechanism for cross-chain stability{" "}
            </div>
            <div className="text-[28px] md:text-[30px] lg:text-[32px] leading-[1.3] xl:text-[35px]">
              Upgrade-ready architecture for future{" "}
              <span className="text-[#5F6FF3] font-medium">Native</span> USDC
              issuance
            </div>
            <div className="text-[28px] md:text-[30px] lg:text-[32px] leading-[1.3] xl:text-[35px]">
              <span className="text-[#5F6FF3] font-medium">Transparent</span>{" "}
              and <span className="text-[#5F6FF3] font-medium">Verifiable</span>{" "}
              supply across source and destination chains{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
