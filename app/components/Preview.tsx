"use client";

import React from "react";
import { vt } from "../fonts";
import {
  BatteryFull,
  ChevronLeft,
  Ellipsis,
  Home,
  Power,
  Settings,
  Signal,
  Wifi,
} from "lucide-react";
import { type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const chartConfig = {
  usage: {
    label: "Usage",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", usage: 10 },
  { month: "February", usage: 5 },
  { month: "March", usage: 7 },
  { month: "April", usage: 20 },
  { month: "May", usage: 6 },
  { month: "June", usage: 15 },
];

const Preview = () => {
  return (
    <div className="relative flex h-screen w-full">
      <div
        className={`${vt.className} text-center text-[25rem] leading-[0.75] tracking-widest text-secondary-foreground/35`}
      >
        Preview Our Platform
      </div>
      <div className="glass absolute bottom-24 left-1/4 aspect-[9/18] w-[27rem] rounded-[3rem] p-3">
        <div className="relative flex h-full w-full flex-col rounded-[3rem] bg-background px-6 py-4">
          <div className="flex w-full items-center justify-between">
            9:41
            <div className="ml-12 rounded-full border border-white/30 px-14 py-4"></div>
            <div className="flex gap-1">
              <Signal />
              <Wifi />
              <BatteryFull />
            </div>
          </div>
          <div className="flex items-center justify-between py-6 text-2xl">
            <ChevronLeft size={30} />
            Netherlands
          </div>
          <div className="text-2xl">
            Historical
            <div className="text-secondary-foreground">Statistic</div>
          </div>
          <div className="h-full">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart accessibilityLayer data={chartData}>
                <Bar dataKey="usage" fill="hsl(65 100% 52%)" radius={4} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="flex items-center justify-between border-b border-white/5 py-6">
            <div className="flex flex-col">
              <div className="text-secondary-foreground">Usage</div>
              Time
            </div>
            <div className={`${vt.className} text-6xl tracking-normal`}>
              120:32:20
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-white/5 py-6">
            <div className="flex flex-col">
              <div className="text-secondary-foreground">Use</div>
              Within
            </div>
            <div className={`${vt.className} text-6xl tracking-normal`}>
              58 DAYS
            </div>
          </div>
          <div className="flex items-center justify-between py-6 text-secondary-foreground">
            <div>1 Month</div>
            <div>Ytd</div>
            <div>3 Year</div>
            <div className="text-foreground">All Time</div>
          </div>
          <div className="h-3 w-36 self-center rounded-full bg-white"></div>
        </div>
      </div>
      <div className="glass absolute right-1/4 top-24 aspect-[9/18] w-[27rem] rounded-[3rem] p-3">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[3rem] bg-background px-6 py-4">
          <div className="flex w-full items-center justify-between">
            9:41
            <div className="ml-12 rounded-full border border-white/30 px-14 py-4"></div>
            <div className="flex gap-1">
              <Signal />
              <Wifi />
              <BatteryFull />
            </div>
          </div>
          <div
            id="mobileContent"
            className="relative flex h-full flex-col justify-between"
          >
            <div id="mobileHeader" className="mt-4 text-5xl">
              Connect to Network
              <div className="text-secondary-foreground">Netherlands</div>
            </div>
            <div className="absolute left-4 top-24 flex aspect-square w-11/12 items-center justify-center rounded-full border border-white/10">
              <div className="absolute h-full w-full rounded-full bg-accent opacity-15 blur-3xl"></div>
              <div className="absolute flex aspect-square w-4/6 items-center justify-center rounded-full border border-white/10">
                <div className="flex aspect-square w-min items-center justify-center rounded-full border border-white/10 p-7">
                  <Power size={50} strokeWidth={2} />
                </div>
              </div>
            </div>
            <div id="mobileFooter" className="flex flex-col">
              <div className="flex items-center justify-between py-6">
                <div className="flex flex-col">
                  <div className="text-secondary-foreground">Connecting</div>
                  Time
                </div>
                <div className={`${vt.className} text-6xl tracking-normal`}>
                  00:02:36
                </div>
              </div>
              <div id="cards" className="relative right-[50%] flex gap-4">
                <Card
                  className={`flex aspect-square h-56 flex-col justify-between bg-background`}
                >
                  <CardHeader className="flex items-end">
                    <Ellipsis />
                  </CardHeader>
                </Card>
                <Card
                  className={`flex aspect-square h-56 flex-col justify-between bg-accent text-black`}
                >
                  <CardHeader className="flex justify-between">
                    <div className="flex items-center justify-between">
                      <div
                        className="h-10 w-10 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url("${process.env.NEXT_PUBLIC_SITE_URL}/Netherlands.png")`,
                        }}
                      ></div>
                      <div className="flex items-center gap-1 rounded-xl bg-black/15 px-2">
                        <span className="text-green-500">•</span>
                        <span className="font-medium">Connect</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex flex-col items-start leading-3">
                    <span>Location</span>
                    <span className={`${vt.className} text-4xl`}>
                      Netherlands
                    </span>
                  </CardFooter>
                </Card>
                <Card
                  className={`flex aspect-square h-56 flex-col justify-between bg-background`}
                >
                  <CardHeader className="flex justify-between">
                    <div className="flex items-center justify-between">
                      <div
                        className="h-10 w-10 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url("${process.env.NEXT_PUBLIC_SITE_URL}/France.png")`,
                        }}
                      ></div>
                      <div className="flex items-center gap-1 rounded-xl bg-black/15 px-2">
                        <span className="text-green-500">•</span>
                        <span className="font-medium">Connect</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex flex-col items-start leading-3">
                    <span>Location</span>
                    <span className={`${vt.className} text-4xl`}>France</span>
                  </CardFooter>
                </Card>
              </div>
              <div id="badges" className="flex justify-between py-6">
                <Badge className="inverted gap-1 px-4 py-3">
                  <Home />
                  Home
                </Badge>
                <Badge className="px-4 py-3">Search</Badge>
                <Badge className="px-4 py-3">Speed</Badge>
                <Badge className="px-4 py-3">
                  <Settings />
                </Badge>
              </div>
              <div className="h-[5px] w-36 self-center rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
