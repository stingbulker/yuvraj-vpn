import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, ShieldHalf } from "lucide-react";
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
      <div id="pricingCards" className="flex h-2/3 w-full gap-8">
        <div className="glass h-full w-1/3 rounded-2xl">
          <Badge className="rounded-xl border-accent/30">
            <Shield color="hsl(65 100% 52%)" />
          </Badge>
        </div>
        <div className="glass h-full w-1/3 rounded-2xl">
          <Badge className="rounded-xl border-accent/30">
            <ShieldHalf color="hsl(65 100% 52%) p-29 i-498" />
          </Badge>
        </div>
        <div className="glass h-full w-1/3 rounded-2xl">
          <Badge className="rounded-xl border-accent/30">
            <ShieldCheck color="hsl(65 100% 52%)" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
