import Header from "../components/header";
import Main from ".././components/mainPage";
import InspiredBySection from "../components/InspiredByUSDCSection"
import StreamedLinedSection from "../components/StreamedLinedSection"
import ExploreSection from "../components/ExploreSection"
import ScrollSection from "../components/ScrollTransactionPage"
import Tokenomics from "../components/TokenomicsPage"
const DashBoard = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <InspiredBySection/>
      <StreamedLinedSection />
      <ExploreSection />
      <ScrollSection/>
      <Tokenomics />
    </div>
  );
};

export default DashBoard;
