import Header from "./components/Header";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-[300vh] bg-background">
      <Navbar />
      <Header />
      <div className="w-full h-full relative z-10 bg-black">
        <div className="absolute -top-20 blur-2xl w-full h-64 bg-black"></div>
      </div>
    </div>
  );
}
