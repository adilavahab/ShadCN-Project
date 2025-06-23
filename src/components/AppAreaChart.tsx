"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis
} from "recharts";

interface ChartDataItem {
  month: string;
  desktop: number;
  mobile: number;
}

const chartConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-2)" },
  mobile: { label: "Mobile", color: "var(--chart-1)" }
};

const AppAreaChart = () => {
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    fetch("http://shadcn-backend.onrender.com/api/area-chart-data.json")
      .then(res => res.json())
      .then(data => setChartData(data))
      .catch(err => console.error("Failed to load area chart data", err));
  }, []);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Total Visitors</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area dataKey="mobile" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" />
          <Area dataKey="desktop" type="natural" fill="url(#fillDesktop)" stroke="var(--color-desktop)" stackId="a" />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AppAreaChart;
