import { Badge } from "@/components/ui/badge";
import { ChartNoAxesColumn, Power, Rocket } from "lucide-react";
import React from "react";
import { vt } from "../fonts";

const Features = () => {
  return (
    <div className="flex h-screen w-full justify-between px-64 py-28">
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
              <Badge className="rounded-xl !inner-shadow border-accent/30">
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
            <div className="w-full flex relative top-3">
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
        className="glass aspect-[9/18] w-2/5 rounded-[3rem] p-3"
      >
        <div className="flex h-full w-full flex-col rounded-[3rem] bg-background px-6 py-4">
          <div className="flex flex-col justify-center items-center w-full h-2/5">
            <div className="text-2xl font-light">Uploading</div>
            <div className={`${vt.className} text-9xl tracking-normal`}>62.5</div>
            <Badge className="border-none py-2 px-4">MB/s</Badge>
          </div>
          {/* <div className="relative right-1/2 top-1/4 w-[200%] h-[200%] bg-gray-700 overflow-hidden"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
