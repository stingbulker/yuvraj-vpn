"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CirclePlay, Ellipsis } from "lucide-react";
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
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
  }, [api, logSlidesInView]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-20">
      <div className="glass absolute top-40 flex h-[65vw] w-[65vw] items-center justify-center rounded-full">
        <div className="glass flex h-[45vw] w-[45vw] items-center justify-center rounded-full">
          <div className="glass h-[25vw] w-[25vw] rounded-full"></div>
        </div>
      </div>
      <div className="absolute -left-32 top-32 h-24 w-[50rem] rotate-12 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -left-32 top-[30rem] h-24 w-[75rem] rotate-12 rounded-full bg-white/15 blur-3xl"></div>
      <div className="absolute -right-32 top-32 h-24 w-[50rem] -rotate-12 rounded-full bg-white/10 blur-3xl"></div>
      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <h1 className="text-8xl">Ultimate Online Privacy</h1>
          <h1 className="text-8xl text-secondary-foreground">with Our VPN</h1>
        </motion.div>
        <div className="flex flex-col items-center text-xl text-secondary-foreground">
          <p>
            Safeguard your data, access global content, and enjoy fast, secure
          </p>
          <p>browsing. Our VPN app offers top-notch security.</p>
        </div>
        <div className="flex gap-2">
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
                className="aspect-square basis-[14.28%] p-4"
              >
                <Card
                  className={cn(
                    `glass flex h-full w-full flex-col justify-between`,
                    currentSlide === index &&
                      "!bg-accent font-semibold text-black",
                  )}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div
                        className="h-10 w-10 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url("${process.env.NEXT_PUBLIC_SITE_URL}/${country}.png")`,
                        }}
                      ></div>
                      {currentSlide === index ? (
                        <div className="flex items-center gap-1 rounded-xl bg-black/15 px-2">
                          <span className="text-green-500">•</span>
                          <span className="font-medium">Connect</span>
                        </div>
                      ) : (
                        <Ellipsis />
                      )}
                    </div>
                  </CardHeader>
                  <CardFooter className="flex flex-col items-start leading-3">
                    <span>Location</span>
                    <span className={`${vt.className} text-4xl`}>
                      {country}
                    </span>
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
