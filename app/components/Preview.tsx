"use client";

import React from "react";
import { vt } from "../fonts";
import { BatteryFull, ChevronLeft, Signal, Wifi } from "lucide-react";
import { type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

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
    <div className="relative flex h-screen w-full items-center">
      <div
        className={`${vt.className} text-center text-[25rem] leading-[0.75] tracking-widest text-secondary-foreground/35`}
      >
        Preview Our Platform
      </div>
      <div className="glass absolute bottom-24 left-[43rem] aspect-[9/18] w-[27rem] rounded-[3rem] p-3">
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
      <div className="glass absolute right-[43rem] top-24 aspect-[9/18] w-[27rem] rounded-[3rem] p-3">
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
          <div id="mobileContent" className="flex flex-col justify-between"></div>
          {/* <div className="h-3 w-36 self-center rounded-full bg-white"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
