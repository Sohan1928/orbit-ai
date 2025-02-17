import Banner from "./components/home/banner/Banner";
import Navbar from "./components/home/navbar/Navbar";
import OrbitAgent from "./components/home/orbitAgent/OrbitAgent";

function App() {
  return (
    <div className="max-w-[1728px] mx-auto bg-[#040128]">
      <Navbar></Navbar>
      <Banner></Banner>
      <OrbitAgent></OrbitAgent>
    </div>
  );
}

export default App;
