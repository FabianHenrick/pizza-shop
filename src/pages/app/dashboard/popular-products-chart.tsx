import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import colors from "tailwindcss/colors";

import {
  ResponsiveContainer,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Cell,
} from "recharts";
import { BarChart } from "lucide-react";

const data = [
  { product: "Frango c/ Catupiry", amount: 43 },
  { product: " 4 Queijos", amount: 18 },
  { product: "Pepperoni", amount: 52 },
  { product: "Calabresa", amount: 13 },
  { product: "Mussarela", amount: 45 },
];

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium ">
            Produtos Populares
          </CardTitle>

          <CardDescription>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
            ></Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
