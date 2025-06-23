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
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface ChartDataItem {
  month: string;
  desktop: number;
  mobile: number;
}

const chartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)"
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-4)"
  }
};

const AppBarChart = () => {
       const [chartData, setChartData] = useState<ChartDataItem[]>([]);

       useEffect(() => {
       fetch("http://localhost:5000/api/bar-chart-data")
      .then((res) => res.json())
      .then((data) => setChartData(data))
      .catch((err) => console.error("Error fetching bar chart data:", err));
  }, []);
 
  return (
  <div>
    <h1 className="text-lg font-medium mb-6">Total Revenue</h1>
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} tickMargin={10} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  </div>
);
};
export default AppBarChart;
