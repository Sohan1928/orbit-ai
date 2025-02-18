import Banner from "./components/home/banner/Banner";
import ConnectOurCommunity from "./components/home/connectOurCommunity/ConnectOurCommunity";
import JoinTheRevolution from "./components/home/joinTheRevolution/JoinTheRevolution";
import Navbar from "./components/home/navbar/Navbar";
import OrbitAgent from "./components/home/orbitAgent/OrbitAgent";
import Footer from "./components/home/OrbitFooter/Footer";

function App() {
  return (
    <div className="max-w-[1728px] mx-auto bg-[#040128]">
      <Navbar></Navbar>
      <Banner></Banner>
      <OrbitAgent></OrbitAgent>
      <JoinTheRevolution></JoinTheRevolution>
      <ConnectOurCommunity></ConnectOurCommunity>
      <Footer></Footer>
    </div>
  );
}

export default App;
