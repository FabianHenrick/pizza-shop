import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./dashbpard-revenue-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className=" flex flex-col gap-4">
        <h1 className="font text-3xl tracking-tighter"> Dashboard</h1>
        <div className=" grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
        </div>
      </div>
    </>
  );
}
