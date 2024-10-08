import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Shield, ShieldCheck, ShieldHalf } from "lucide-react";
import React from "react";
import { vt } from "../fonts";

const Pricing = () => {
  return (
    <div className="flex h-screen w-full flex-col gap-28 px-64 py-20">
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
      <div id="pricingCards" className="flex w-full gap-14 px-20">
        <div className="glass overflow-hidden relative flex h-full w-full flex-col gap-10 rounded-2xl px-10 py-8">
          <Badge className="w-max !inner-shadow rounded-xl border-accent/30">
            <Shield color="hsl(65 100% 52%)" size={40} strokeWidth={1} />
          </Badge>
          <div className="flex flex-col gap-4">
            <div className={`text-4xl font-medium text-accent`}>Basic Plan</div>
            <div className="text-xl text-secondary-foreground">
              Start enjoying the use and features of VPN without spending money
            </div>
          </div>
          <div className="inline-block align-baseline">
            <span className={`${vt.className} text-8xl leading-10`}>$0</span>
            <span className={`text-2xl text-secondary-foreground`}>
              /account
            </span>
          </div>
          <div className="h-px w-full bg-white/10"></div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xl font-light">
              <Check /> Access 2 network
            </div>
            <div className="flex items-center gap-2 text-xl font-light">
              <Check /> Speed test features
            </div>
            <div className="flex items-center gap-2 text-xl font-light">
              <Check /> Max 4 hours/day
            </div>
          </div>
          <Button
            size={"lg"}
            className="w-full py-4 font-light text-2xl"
            variant="grey"
          >
            Sign Up
          </Button>
          <div className="absolute opacity-10 -bottom-32 -right-20 h-3/4 w-3/4 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="glass overflow-hidden relative flex h-full w-full flex-col gap-10 rounded-2xl px-10 py-8">
          <Badge className="w-max !inner-shadow rounded-xl border-accent/30">
            <ShieldHalf color="hsl(65 100% 52%)" size={40} strokeWidth={1} />
          </Badge>
          <div className="flex flex-col gap-4">
            <div className={`text-4xl font-medium text-accent`}>Standard Plan</div>
            <div className="text-xl text-secondary-foreground">
              Suitable for those who use VPN service oftenly
            </div>
          </div>
          <div className="inline-block align-baseline">
            <span className={`${vt.className} text-8xl leading-10`}>$38</span>
            <span className={`text-2xl text-secondary-foreground`}>
              /month
            </span>
          </div>
          <div className="h-px w-full bg-white/10"></div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xl font-light">
              <Check /> Access 8 network
            </div>
            <div className="flex items-center gap-2 text-xl font-light">
              <Check /> Speed test features
            </div>
            <div className="flex items-center gap-2 text-xl font-light">
              <Check /> Max 8 hours/day
            </div>
          </div>
          <Button
            size={"lg"}
            className="w-full py-4 font-light text-2xl"
            variant="yellow"
          >
            Subscribe
          </Button>
          <div className="absolute opacity-10 -bottom-32 -right-20 h-3/4 w-3/4 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="glass overflow-hidden relative flex h-full w-full flex-col gap-10 rounded-2xl px-10 py-8">
          <Badge className="w-max !inner-shadow rounded-xl border-accent/30">
            <ShieldCheck color="hsl(65 100% 52%)" size={40} strokeWidth={1} />
          </Badge>
          <div className="flex flex-col gap-4">
            <div className={`text-4xl font-medium text-accent`}>Premium Plan</div>
            <div className="text-xl text-secondary-foreground">
              Suitable for those who are always productive using unlimited VPN
            </div>
          </div>
          <div className="inline-block align-baseline">
            <span className={`${vt.className} text-8xl leading-10`}>$98</span>
            <span className={`text-2xl text-secondary-foreground`}>
              /month
            </span>
          </div>
          <div className="h-px w-full bg-white/10"></div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xl font-light">
              <Check /> Unlimited access network
            </div>
            <div className="flex items-center gap-2 text-xl font-light">
              <Check /> Speed test features
            </div>
            <div className="flex items-center gap-2 text-xl font-light">
              <Check /> Unlimited hours/week
            </div>
          </div>
          <Button
            size={"lg"}
            className="w-full py-4 font-light text-2xl"
            variant="grey"
          >
            Subscribe
          </Button>
          <div className="absolute opacity-10 -bottom-32 -right-20 h-3/4 w-3/4 bg-accent rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
