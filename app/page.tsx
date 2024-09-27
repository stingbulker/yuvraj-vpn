import Advantages from "./components/Advantages";
import Features from "./components/Features";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import Preview from "./components/Preview";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div className="h-[700vh] bg-background">
      <Navbar />
      <Header />
      <Advantages />
      <Preview />
      <Features />
      <Pricing/>
    </div>
  );
}
