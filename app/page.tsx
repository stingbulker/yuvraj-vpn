import Advantages from "./components/Advantages";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-[300vh] bg-background">
      <Navbar />
      <Header />
      <div className="w-full h-full relative z-10 bg-white/8 backdrop-blur-md">
        {/* <div className="absolute -top-20 blur-2xl w-full h-64 bg-white/8 backdrop-blur-md"> */}
          <Advantages />
        {/* </div> */}
      </div>
    </div>
  );
}
