"use client";

import pieChartDataRaw from "@/data/pie-chart-data.json";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "./ui/chart";

interface PieDataItem {
  browser: string;
  visitors: number;
  fill: string;
}

const chartData: PieDataItem[] = Array.isArray(pieChartDataRaw)
  ? pieChartDataRaw
  : (pieChartDataRaw as PieDataItem[]) || [];

const totalVisitors = chartData.reduce((acc, item) => acc + item.visitors, 0);

const chartConfig: ChartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
  other: { label: "Other", color: "var(--chart-5)" }
};

const AppPieChart = () => (
  <div>
    <h1 className="text-lg font-medium mb-6">Browser Usage</h1>
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (!viewBox) return null;
              // Destructure cx and cy from viewBox, fallback to 0 if undefined
              const { cx = 0, cy = 0 } = viewBox as { cx?: number; cy?: number };
              return (
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x={cx}
                    y={cy}
                    className="fill-foreground text-3xl font-bold"
                  >
                    {totalVisitors.toLocaleString()}
                  </tspan>
                  <tspan
                    x={cx}
                    y={cy + 24}
                    className="fill-muted-foreground"
                  >
                    Visitors
                  </tspan>
                </text>
              );
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
    <div className="mt-4 flex flex-col gap-2 items-center">
      <div className="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month{" "}
        <TrendingUp className="h-4 w-4 text-green-500" />
      </div>
      <div className="leading-none text-muted-foreground">
        Showing total visitors for the last 6 months
      </div>
    </div>
  </div>
);

export default AppPieChart;
