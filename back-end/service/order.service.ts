import { Order } from "../model/order";
import orderDb from "../repository/order.db";

const getAllOrders = async (): Promise<Order[]> => orderDb.getAllOrders();  
const createOrder = async (orderData: any): Promise<Order> => {
    const order = new Order(orderData);
    return orderDb.createOrder(order);
  };
export default {getAllOrders, createOrder}; 