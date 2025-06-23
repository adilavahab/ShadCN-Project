"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart";
import barChartDataRaw from "@/data/bar-chart-data.json";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface ChartDataItem {
  month: string;
  desktop: number;
  mobile: number;
}

const chartData: ChartDataItem[] = Array.isArray(barChartDataRaw)
  ? barChartDataRaw
  : (typeof barChartDataRaw === "object" && barChartDataRaw !== null && "default" in barChartDataRaw && Array.isArray((barChartDataRaw as { default: unknown }).default))
    ? (barChartDataRaw as { default: ChartDataItem[] }).default
    : [];

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

const AppBarChart = () => (
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

export default AppBarChart;
