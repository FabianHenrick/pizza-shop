import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";

const data = [
  { date: "10/12", revenue: 200 },
  { date: "11/12", revenue: 600 },
  { date: "12/12", revenue: 937 },
  { date: "13/12", revenue: 402 },
  { date: "14/12", revenue: 215 },
  { date: "15/12", revenue: 1603 },
  { date: "16/12", revenue: 195 },
];

export function RevenueChart() {
  return (
    <div>
      <Card className="col-span-6">
        <CardHeader className="flex-row items-center justify-between pb-8">
          <div className="space-y-1">
            {" "}
            <CardTitle className="text-base font-medium ">
              Receita no período
            </CardTitle>
            <CardDescription>Receita diária no periodo</CardDescription>
          </div>
        
      </Card>
    </div>
  );
}
