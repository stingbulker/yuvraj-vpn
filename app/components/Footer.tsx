import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute z-10 flex h-full w-full flex-col items-center justify-between pt-20 bg-background/40">
        <div className="flex w-full flex-col items-center gap-10 bg-gradient-to-b from-background to-background/5 pb-20">
          <Badge className="w-max">Let's Start Now</Badge>
          <div className="text-center text-7xl">
            Protect Your Privacy, Start
            <div className="text-secondary-foreground">Using Our VPN</div>
          </div>
          <Button size={"lg"} className="w-max py-3 text-xl" variant="yellow">
            Get Started
          </Button>
        </div>
        <div className="flex w-full flex-col items-center bg-gradient-to-t from-background to-background/5 pt-20 text-secondary-foreground">
          <div className="flex gap-48 py-8 text-2xl">
            <div>Instagram</div>
            <div>Twitter</div>
            <div>LinkedIn</div>
            <div>Facebook</div>
            <div>Discord</div>
          </div>
          <div className="h-[1px] w-3/5 bg-white/10"></div>
          <div className="py-6">© 2024 Vaguard. All rights reserved</div>
        </div>
      </div>
      <div className="absolute left-[12%] top-[20%] flex h-4/5 w-9/12 items-center justify-center">
        <div className="absolute h-full w-full">
          <div
            className="absolute z-30 top-[39%] left-[71%] h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url("http://localhost:3000/India.png")`,
            }}
          ></div>
          <div
            className="absolute z-30 top-[15%] left-[71%] h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url("http://localhost:3000/Russia.png")`,
            }}
          ></div>
          <div
            className="absolute z-30 top-[33%] left-[79%] h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url("http://localhost:3000/China.png")`,
            }}
          ></div>
          <div
            className="absolute z-30 top-[28%] left-[18%] h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url("http://localhost:3000/USA.png")`,
            }}
          ></div>
          <div
            className="absolute z-30 top-[20%] left-[25%] h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url("http://localhost:3000/Canada.png")`,
            }}
          ></div>
          <div
            className="absolute z-30 top-[49%] left-[80%] h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url("http://localhost:3000/Singapore.png")`,
            }}
          ></div>
          <div
            className="absolute z-30 top-[30%] left-[88%] h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url("http://localhost:3000/Japan.png")`,
            }}
          ></div>
        </div>
        <Image
          className="w-full grayscale"
          src={`/worldMap.png`}
          width={1280}
          height={720}
          alt=""
        />
        {/* <div className="absolute z-10 h-full w-full bg-background opacity-50"></div> */}
      </div>
    </div>
  );
};

export default Footer;
