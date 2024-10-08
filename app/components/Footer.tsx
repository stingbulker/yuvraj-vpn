import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const Footer = () => {
  return (
    <div className="flex h-screen w-full flex-col py-20">
      <div className="flex flex-col items-center justify-center gap-6">
        <Badge>Let's Start Now</Badge>
        <div className="text-center text-8xl">Protect Your Privacy, Start
          <div className="text-secondary-foreground">Using Our VPN</div>
        </div>
        {/* <Button
            size={"lg"}
            className=" py-4 text-2xl"
            variant="yellow"
          >
            Get Started
          </Button> */}
      </div>
    </div>
  );
};

export default Footer;
