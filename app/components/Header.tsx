"use client";

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
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { vt } from "../fonts";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const countries = [
  "India",
  "USA",
  "Canada",
  "Singapore",
  "UK",
  "Japan",
  "China",
  "Russia",
  "Netherlands",
  "France",
];

export default function Header() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(3);

  const logSlidesInView = useCallback((emblaApi: any) => {
    const slides = emblaApi.slidesInView();
    console.log(slides);
    console.log("current slide", slides[Math.round((slides.length - 1) / 2)]);
    setCurrentSlide(slides[Math.round((slides.length - 1) / 2)] - 1);
  }, []);

  useEffect(() => {
    if (api) {
      api.on("slidesInView", logSlidesInView);
    }
  }, [api]);

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
          opts={{
            align: "start",
          }}
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="select-none">
            {countries.map((country, index) => (
              <CarouselItem
                key={index}
                className="basis-[14.28%] aspect-square"
              >
                <Card
                  className={cn(
                    `w-full h-full bg-neutral-800`,
                    currentSlide === index && "bg-accent text-black"
                  )}
                >
                  <CardHeader>
                    <div className="flex">
                      <div className="w-10 h-10 bg-neutral-300 rounded-full"></div>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex flex-col gap-2">
                    <p>Location</p>
                    <p className={`${vt.className} text-4xl`}>{country}</p>
                    <p>{currentSlide == index && "current"}</p>
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
