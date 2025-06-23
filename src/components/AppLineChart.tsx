"use client";

import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "./ui/chart";

interface ChartDataItem {
  month: string;
  desktop: number;
  mobile: number;
}

const chartConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" }
};

const AppLineChart = () => {
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    fetch("http://shadcn-project.onrender.com/api/line-chart-data")
      .then(res => res.json())
      .then(data => setChartData(data))
      .catch(err => console.error("Failed to load line chart data", err));
  }, []);

  return (
    <ChartContainer config={chartConfig} className="mt-6">
      <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line dataKey="desktop" type="monotone" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        <Line dataKey="mobile" type="monotone" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  );
};

export default AppLineChart;
