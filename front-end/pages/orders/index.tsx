import Header from "@/components/header";
import OrderTable from "@/components/orders/orderTable";
import orderService from "@/services/OrderService";
import { Order } from "@/types";
import Head from "next/head";
import { useEffect, useState } from "react";

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Array<Order>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderService.getAllOrders();
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          setError("An error occurred");
        }
      } catch (error) {
        setError("An error occurred");
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
        <Head>
                <title>Orders</title>
        </Head>
        <Header />
      <h1 className="text-center text-3xl mt-4">Orders</h1>
      {error && <p>{error}</p>}
      <OrderTable orders={orders} />
    </div>
  );
};

export default OrdersPage;