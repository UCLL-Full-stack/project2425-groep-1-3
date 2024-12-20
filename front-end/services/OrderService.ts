import { Order } from "@/types";

const getAllOrders = async () => {
  const token = JSON.parse(
    localStorage.getItem("loggedInUser") as string,
  )?.token;
  return await fetch(process.env.NEXT_PUBLIC_API_URL + "/orders", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
};
const addOrder = async (orderData: Order) => {
  const token = JSON.parse(
    localStorage.getItem("loggedInUser") as string,
  )?.token;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
  const newOrder = await response.json();
  return newOrder;
};
const deleteOrder = async (orderId: number) => {
  const token = JSON.parse(
    localStorage.getItem("loggedInUser") as string,
  )?.token;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  );
  return response;
};
const orderService = {
  getAllOrders,
  addOrder,
  deleteOrder,
};
export default orderService;