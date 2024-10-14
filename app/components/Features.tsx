import { Badge } from "@/components/ui/badge";
import { ChartNoAxesColumn, Power, Rocket, RotateCcw } from "lucide-react";
import React from "react";
import { vt } from "../fonts";

const Features = () => {
  return (
    <div className="flex h-screen w-full justify-between px-64 py-[3%]">
      <div id="featuresDetail" className="flex w-1/2 flex-col justify-between">
        <div className="flex flex-col gap-6">
          <Badge className="w-max">Our Features</Badge>
          <div className="text-[5.5rem] leading-[1.1]">
            Explore Features
            <div className="text-secondary-foreground">of Our Solution</div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="mr-28 flex flex-col gap-6 pb-8">
            <div className="flex items-center gap-4">
              <Badge className="!inner-shadow rounded-xl border-accent/30">
                <Rocket color="hsl(65 100% 52%)" />
              </Badge>
              <div
                className={`${vt.className} text-6xl tracking-normal text-accent`}
              >
                Speed Test
              </div>
            </div>
            <div className="text-xl text-secondary-foreground">
              Evaluate your internet connection's performance and speed with our
              integrated VPN speed test tool, ensuring you get the most out of
              your online experience
            </div>
            <div className="relative top-3 flex w-full">
              <div className="h-[1px] w-[75%] bg-accent"></div>
              <div className="h-[1px] w-[35%] bg-white/10"></div>
            </div>
          </div>
          <div className="mr-28 flex flex-col gap-6 border-b border-white/10 pb-8">
            <div className="flex items-center gap-4">
              <Badge className="rounded-xl">
                <ChartNoAxesColumn />
              </Badge>
              <div className={`${vt.className} text-6xl tracking-normal`}>
                Historical Statistics
              </div>
            </div>
            <div className="text-xl text-secondary-foreground">
              Access detailed historical data on your network's performance to
              monitor trends and optimize usage, enabling you to make informed
              decisions for better connectivity
            </div>
          </div>
          <div className="mr-28 flex flex-col gap-6 border-b border-white/10 pb-8">
            <div className="flex items-center gap-4">
              <Badge className="rounded-xl">
                <Power />
              </Badge>
              <div className={`${vt.className} text-6xl tracking-normal`}>
                Connecting Network
              </div>
            </div>
            <div className="text-xl text-secondary-foreground">
              Easily connect to a variety of secure servers worldwide with our
              seamless network connection feature, ensuring fast and reliable
              access to global content
            </div>
          </div>
        </div>
      </div>
      <div
        id="featuresCard"
        className="glass ws-[40rem] aspect-[3/4] h-full rounded-[3rem] p-3"
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[3rem] bg-background px-6 py-4">
        <div className="absolute -top-1/4 right-[2%] aspect-square w-full rounded-full bg-accent opacity-15 blur-3xl z-20"></div>
          <div className="flex h-2/5 w-full flex-col items-center justify-center">
            <div className="text-3xl font-extralight">Uploading</div>
            <div className={`${vt.className} text-[12rem] leading-none tracking-normal`}>
              62.5
            </div>
            <Badge className="border-none px-6 py-2 text-3xl">MB/s</Badge>
          </div>
          <div className="bg-clip bg-strips absolute -left-[16%] top-[0%] aspect-square h-[100%] bg-primary/[5%]">
            <div className="absolute right-[66.99%] top-[30%] aspect-square w-1/2 rounded-[2rem] bg-accent"></div>
            <div className="absolute right-[60%] top-[63.9%] h-[5.5rem] w-1/2 rotate-[-30deg] rounded-[1.5rem] bg-accent"></div>
          </div>
          <div className="bg-clip absolute -left-[10%] top-[14%] aspect-square h-[90%] bg-background"></div>
          <div className="bg-clip absolute -left-[6.9%] top-[19.5%] aspect-square h-[85%] bg-primary/[5%]">
            <div className="absolute left-1/2 h-full w-[0.5px] bg-white/10"></div>
            <div className="absolute bottom-[23.9%] left-[40%] aspect-square w-1/5 rounded-full border border-white/10 bg-[#26262c] flex justify-center items-center">
              <RotateCcw size={75} strokeWidth={1} />
            </div>
            <div className="absolute bottom-[10%] flex w-full justify-between px-[20%]">
              <div className="flex flex-col gap-2 text-center">
                <div className="text-2xl font-extralight">Download</div>
                <div className={`${vt.className} text-5xl`}>61.5 MB/s</div>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <div className="text-2xl font-extralight">Ping</div>
                <div className={`${vt.className} text-5xl`}>47.52 MS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
