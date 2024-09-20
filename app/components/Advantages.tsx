import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import React from "react";
import { vt } from "../fonts";

const Advantages = () => {
  return (
    <div className="w-full h-screen gap-32 justify-center relative z-10 bg-white/8 backdrop-blur-md py-20 px-64 flex flex-col">
      <div className="flex flex-col gap-4">
        <Badge className="w-max">Our Advantage</Badge>
        <h1 className="text-7xl flex flex-col gap-3">
          Key Advantages of Using
          <span className="text-secondary-foreground flex justify-between">
            Our VPN Service{" "}
            <Button
              size={"lg"}
              className="flex gap-[.35rem] font-normal self-end px-8"
              variant="grey"
            >
              See More
            </Button>
          </span>
        </h1>
      </div>
      <div className="flex gap-12 h-full w-full">
        <div className="w-full h-5/6 p-6 overflow-hidden glass rounded-[1.25rem] flex justify-center items-center">
          <div className="relative w-full overflow-hidden h-full glass rounded-[1.25rem] p-8 flex justify-between">
            <div className="glass absolute -top-24 -left-24 w-2/5 aspect-square flex justify-center items-center rounded-full">
              <div className="glass absolute w-4/6 aspect-square flex justify-center items-center rounded-full">
                <div className="bg-accent aspect-square w-min p-7 rounded-full flex justify-center items-center">
                  <Globe color="#000" size={40} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <div className="self-end relative z-30">
              <div className={`${vt.className} tracking-wide text-7xl`}>
                Many Networks
              </div>
              <div className="flex flex-col text-xl pr-8 text-foreground/50 tracking-tight">
                Enjoy the flexibility of connecting to numerous global networks
                and enhanced online privacy
              </div>
            </div>
          </div>
            <div className="bg-accent w-1/2 absolute aspect-square rounded-full -bottom-52 -right-32 blur-[96px] opacity-20"></div>
        </div>
        <div className="w-full h-5/6 p-6 overflow-hidden glass rounded-[1.25rem] flex justify-center items-center">
          <div className="relative w-full overflow-hidden h-full glass rounded-[1.25rem] p-8 flex justify-between">
            <div className="glass absolute -top-24 -left-24 w-2/5 aspect-square flex justify-center items-center rounded-full">
              <div className="glass absolute w-4/6 aspect-square flex justify-center items-center rounded-full">
                <div className="bg-accent aspect-square w-min p-7 rounded-full flex justify-center items-center">
                  <Globe color="#000" size={40} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <div className="self-end relative z-30">
              <div className={`${vt.className} tracking-wide text-7xl`}>
                Many Networks
              </div>
              <div className="flex flex-col text-xl pr-8 text-secondary-foreground tracking-tight">
                Enjoy the flexibility of connecting to numerous global networks
                and enhanced online privacy
              </div>
            </div>
          </div>
            <div className="bg-accent w-1/2 absolute aspect-square rounded-full -bottom-52 -right-32 blur-[96px] opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
