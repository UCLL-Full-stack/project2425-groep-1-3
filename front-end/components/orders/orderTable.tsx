import React, { useState } from "react";
import { Order } from "@/types";

type Props = {
  orders: Array<Order>;
};

const OrderTable: React.FC<Props> = ({ orders: initialOrders }: Props) => {
  const [orders, setOrders] = useState(initialOrders);

  const handleChangeStatus = (orderId: number) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: order.status === "Paid" ? "Not Paid" : "Paid",
            }
          : order
      )
    );
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Order ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Order Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Delivery Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Total Amount</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const orderDate = new Date(order.orderDate);
              const deliveryDate = new Date(order.deliveryDate);

              return (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {orderDate.toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {deliveryDate.toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">${order.totalAmount}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.status}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="text-blue-500"
                      onClick={() => order.id !== undefined && handleChangeStatus(order.id)}
                    >
                      Change status
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button className="flex items-center px-6 py-3 text-xl bg-[#ff8921] hover:bg-[#ff642bbb] rounded">
            Create Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;