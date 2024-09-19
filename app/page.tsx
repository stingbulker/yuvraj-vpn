import Advantages from "./components/Advantages";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-[300vh] bg-background">
      <Navbar />
      <Header />
      <Advantages />
    </div>
  );
}
