"use client";

import { Button } from "@/components/ui/button";
import { CirclePlay, Ellipsis } from "lucide-react";
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
      <div className="absolute top-40 w-[65vw] h-[65vw] flex items-center justify-center rounded-full glass">
        <div className="w-[45vw] h-[45vw] flex items-center justify-center rounded-full glass">
          <div className="w-[25vw] h-[25vw] rounded-full glass"></div>
        </div>
      </div>
      <div className="absolute top-32 -left-32 rotate-12 blur-3xl rounded-full w-[50rem] h-24 bg-white/10"></div>
      <div className="absolute top-[30rem] -left-32 rotate-12 blur-3xl rounded-full w-[75rem] h-24 bg-white/15"></div>
      <div className="absolute top-32 -right-32 -rotate-12 blur-3xl rounded-full w-[50rem] h-24 bg-white/10"></div>
      <div className="relative flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl ">Ultimate Online Privacy</h1>
          <h1 className="text-8xl text-secondary-foreground ">with Our VPN</h1>
        </div>
        <div className="flex flex-col items-center text-secondary-foreground text-xl">
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
      <div className="relative top-14 flex w-full">
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
                className="basis-[14.28%] aspect-square p-4"
              >
                <Card
                  className={cn(
                    `w-full h-full glass flex flex-col justify-between`,
                    currentSlide === index &&
                      "!bg-accent text-black font-semibold"
                  )}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div
                        className="w-10 h-10 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url("http://localhost:3000/${country}.png")`,
                        }}
                      ></div>
                      {currentSlide === index ? (
                        <div className="flex items-center gap-1 bg-black/15 px-2 rounded-xl">
                          <span className="text-green-500">•</span>
                          <span className="font-medium">Connect</span>
                        </div>
                      ) : (
                        <Ellipsis />
                      )}
                    </div>
                  </CardHeader>
                  <CardFooter className="items-start flex flex-col leading-3">
                    <span>Location</span>
                    <span className={`${vt.className} text-4xl`}>
                      {country}
                    </span>
                    <span>{currentSlide == index && ""}</span>
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
