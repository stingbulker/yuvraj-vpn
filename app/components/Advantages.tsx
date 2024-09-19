import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const Advantages = () => {
  return (
    <div className="w-full h-full relative z-10 bg-white/8 backdrop-blur-md py-20 px-40 flex flex-col">
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
      <div className=""></div>
    </div>
  );
};

export default Advantages;
