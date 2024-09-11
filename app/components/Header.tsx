import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Header() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* <div className="w-[75vw] h-[75vw] rounded-full bg-neutral-900 border-solid border-2 border-neutral-800"></div> */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
        <h1 className="text-8xl ">Ultimate Online Privacy</h1>
        <h1 className="text-8xl text-neutral-500 ">with Our VPN</h1></div>
        <div className="flex flex-col items-center text-neutral-500">
        <p>
          Safeguard your data, access global content, and enjoy fast, secure
        </p>
        <p>browsing. Our VPN app offers top-notch security.</p></div>
        <div className="flex gap-2 ">
          <Button size={"lg"} variant='yellow'>Get Started</Button>
          <Button size={"lg"} className="flex gap-[.35rem] font-normal" variant='grey'><CirclePlay size={18} />Tutorial</Button>
        </div>
      </div>
      <div className="">
      <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
    </div>
  );
}
