"use client"

import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { vt } from "../fonts";

const countries = [
  {
    country: "India",
    flag: "/india.png",
  },
  {
    country: "USA",
    flag: "/usa.png",
  },
  {
    country: "Canada",
    flag: "/canada.png",
  },
  {
    country: "Singapore",
    flag: "/singapore.png",
  },
  {
    country: "Japan",
    flag: "/japan.png",
  },
  {
    country: "China",
    flag: "/china.png",
  },
  {
    country: "UK",
    flag: "/uk.png",
  },
];

export default function Header() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-20">
      {/* <div className="w-[75vw] h-[75vw] rounded-full bg-neutral-900 border-solid border-2 border-neutral-800"></div> */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl ">Ultimate Online Privacy</h1>
          <h1 className="text-8xl text-neutral-500 ">with Our VPN</h1>
        </div>
        <div className="flex flex-col items-center text-neutral-500">
          <p>
            Safeguard your data, access global content, and enjoy fast, secure
          </p>
          <p>browsing. Our VPN app offers top-notch security.</p>
        </div>
        <div className="flex gap-2 ">
          <Button size={"lg"} variant="yellow">
            Get Started
          </Button>
          <Button
            size={"lg"}
            className="flex gap-[.35rem] font-normal"
            variant="grey"
          >
            <CirclePlay size={18} />
            Tutorial
          </Button>
        </div>
      </div>
      <div className="flex w-full">
        <Carousel
          className="w-full"
          plugins={[
            // Autoplay({
            //   delay: 4000,
            // }),
          ]}
        >
          <CarouselContent className="w-full">
            {countries.map((country, index) => (
              <CarouselItem key={index} className="w-[1/7]">
                <Card>
                  <CardHeader>
                    <div className="flex">
                      <div className="w-10 h-10 bg-neutral-300 rounded-full"></div>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex flex-col gap-2">
                    <p>Location</p>
                    <p className={`${vt.className} text-4xl`}>{country.country}</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
}
