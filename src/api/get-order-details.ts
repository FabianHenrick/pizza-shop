import { api } from "@/lib/axios";

export interface getOrderDetailsParams {
  orderId: string;
}

export interface getOrderDetailsResponse {
  order: {
    id: string;
    createdAt: Date | null;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    totalInCents: number;
    customer: {
      name: string;
      email: string;
      phone: string | null;
    };
    orderItems: {
      columns: {
        id: string;
        priceInCents: number;
        quantity: number;
      }[];
    };
  };
}

export async function getOrderDetails({ orderId }: getOrderDetailsParams) {
  const response = await api.get<getOrderDetailsResponse>(`/orders/${orderId}`);

  return response.data;
}
