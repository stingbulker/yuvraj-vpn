import Advantages from "./components/Advantages";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import Preview from "./components/Preview";

export default function Home() {
  return (
    <div className="h-[400vh] bg-background">
      <Navbar />
      <Header />
      <Advantages />
      <Preview/>
    </div>
  );
}
