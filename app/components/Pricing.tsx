import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const Pricing = () => {
  return (
    <div className="flex h-screen w-full flex-col gap-20 px-64 py-20">
      <div id="pricingHeader" className="flex flex-col gap-4">
        <Badge className="w-max">Our Pricing</Badge>
        <div className="flex flex-col gap-3 text-7xl">
          Flexible Pricing plans for
          <div className="flex justify-between text-secondary-foreground">
            Every VPN Need
            <Button
              size={"lg"}
              className="flex gap-[.35rem] self-end px-8 font-normal"
              variant="grey"
            >
              See More
            </Button>
          </div>
        </div>
      </div>
      <div id="pricingCards" className="flex gap-8 h-2/3 w-full">
        <div className="glass h-full w-1/3 rounded-2xl"></div>
        <div className="glass h-full w-1/3 rounded-2xl"></div>
        <div className="glass h-full w-1/3 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Pricing;
