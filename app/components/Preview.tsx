import React from "react";
import { vt } from "../fonts";
import { BatteryFull, ChevronLeft, Signal, Wifi } from "lucide-react";

const Preview = () => {
  return (
    <div className="w-full h-screen relative flex items-center ">
      <div
        className={`${vt.className} tracking-widest leading-[0.75] text-center text-secondary-foreground/35 text-[25rem]`}
      >
        Preview Our Platform
      </div>
      <div className="absolute bottom-24 left-[43rem] w-[27rem] aspect-[9/18] glass p-3 rounded-[3rem]">
        <div className="w-full h-full bg-background rounded-[3rem] py-4 px-6">
          <div className="w-full flex justify-between items-center">
            9:41
            <div className="ml-12 py-4 px-14 border border-white/30 rounded-full"></div>
            <div className="flex gap-1">
              <Signal />
              <Wifi />
              <BatteryFull />
            </div>
          </div>
          <div className="py-6 flex justify-between items-center text-2xl">
            <ChevronLeft size={30} />
            Netherlands
          </div>
          <div className="text-2xl">
            Historical
            <div className="text-secondary-foreground">Statistic</div>
          </div>
        </div>
      </div>
      <div className="absolute top-24 right-[43rem] w-[27rem] aspect-[9/18] glass p-3 rounded-[3rem]">
        <div className="w-full h-full bg-background rounded-[3rem]"></div>
      </div>
    </div>
  );
};

export default Preview;
