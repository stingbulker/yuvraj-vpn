import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import React from "react";
import { vt } from "../fonts";

const Features = () => {
  return (
    <div className="flex h-screen w-full justify-between border-2 border-sky-500 px-64 py-20">
      <div id="featuresDetail" className="flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <Badge className="w-max">Our Features</Badge>
          <div className="text-[5.5rem] leading-[1.1]">
            Explore Features
            <div className="text-secondary-foreground">of Our Solution</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-accent pr-5">
            <div className="flex gap-4">
              <Badge className="rounded-xl">
                <Rocket />
              </Badge>
              <div className={`${vt.className} text-5xl tracking-normal`}>
                Speed Test
              </div>
            </div>
            <div className="text-secondary-foreground">
              Evaluate your internet connection's performance and speed with our
              integrated VPN speed test tool
            </div>
          </div>
          <div className="flex flex-col border-b border-white/10 pr-5">
            <div className="flex gap-4">
              <Badge className="rounded-xl">
                <Rocket />
              </Badge>
              <div className={`${vt.className} text-5xl tracking-normal`}>
                Speed Test
              </div>
            </div>
            <div className="text-secondary-foreground">
              Evaluate your internet connection's performance and speed with our
              integrated VPN speed test tool
            </div>
          </div>
          <div className="flex flex-col border-b border-white/10 pr-5">
            <div className="flex gap-4">
              <Badge className="rounded-xl">
                <Rocket />
              </Badge>
              <div className={`${vt.className} text-5xl tracking-normal`}>
                Speed Test
              </div>
            </div>
            <div className="text-secondary-foreground">
              Evaluate your internet connection's performance and speed with our
              integrated VPN speed test tool
            </div>
          </div>
        </div>
      </div>
      <div
        id="featuresCard"
        className="glass aspect-[9/18] w-1/2 rounded-[3rem] p-3"
      >
        <div className="flex h-full w-full flex-col rounded-[3rem] bg-background px-6 py-4"></div>
      </div>
    </div>
  );
};

export default Features;
