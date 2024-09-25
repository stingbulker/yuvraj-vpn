import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, ShieldCheck } from "lucide-react";
import React from "react";
import { vt } from "../fonts";

const Advantages = () => {
  return (
    <div className="bg-white/8 relative z-10 flex h-screen w-full flex-col justify-center gap-32 px-64 py-20 backdrop-blur-md">
      <div className="flex flex-col gap-4">
        <Badge className="w-max">Our Advantage</Badge>
        <h1 className="flex flex-col gap-3 text-7xl">
          Key Advantages of Using
          <span className="flex justify-between text-secondary-foreground">
            Our VPN Service{" "}
            <Button
              size={"lg"}
              className="flex gap-[.35rem] self-end px-8 font-normal"
              variant="grey"
            >
              See More
            </Button>
          </span>
        </h1>
      </div>
      <div className="flex h-full w-full gap-12">
        <div className="glass flex h-5/6 w-full items-center justify-center overflow-hidden rounded-[1.25rem] p-6">
          <div className="glass relative flex h-full w-full justify-between overflow-hidden rounded-[1.25rem] p-8">
            <div className="glass absolute -left-24 -top-24 flex aspect-square w-2/5 items-center justify-center rounded-full">
              <div className="glass absolute flex aspect-square w-4/6 items-center justify-center rounded-full">
                <div className="flex aspect-square w-min items-center justify-center rounded-full bg-accent p-7">
                  <Globe color="#000" size={40} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <div className="relative z-30 self-end">
              <div className={`${vt.className} text-7xl tracking-wide`}>
                Many Networks
              </div>
              <div className="flex flex-col pr-8 text-xl tracking-tight text-foreground/50">
                Enjoy the flexibility of connecting to numerous global networks
                and enhanced online privacy
              </div>
            </div>
          </div>
          <div className="absolute -bottom-52 -right-32 aspect-square w-1/2 rounded-full bg-accent opacity-20 blur-[96px]"></div>
        </div>
        <div className="glass flex h-5/6 w-full items-center justify-center overflow-hidden rounded-[1.25rem] p-6">
          <div className="glass relative flex h-full w-full justify-between overflow-hidden rounded-[1.25rem] p-8">
            <div className="glass absolute -left-24 -top-24 flex aspect-square w-2/5 items-center justify-center rounded-full">
              <div className="glass absolute flex aspect-square w-4/6 items-center justify-center rounded-full">
                <div className="flex aspect-square w-min items-center justify-center rounded-full bg-accent p-7">
                  <ShieldCheck color="#000" size={40} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <div className="relative z-30 self-end">
              <div className={`${vt.className} text-7xl tracking-wide`}>
                Secure Connection
              </div>
              <div className="flex flex-col pr-8 text-xl tracking-tight text-secondary-foreground">
                Ensure your online activities & personal data remain private and
                protected from cyber threats
              </div>
            </div>
          </div>
          <div className="absolute -bottom-52 -right-32 aspect-square w-1/2 rounded-full bg-accent opacity-20 blur-[96px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
