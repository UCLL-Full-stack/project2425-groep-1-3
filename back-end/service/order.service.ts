import { Order } from "../model/order";
import orderDb from "../repository/order.db";

const getAllOrders = async (): Promise<Order[]> => orderDb.getAllOrders();  
const createOrder = async (orderData: any): Promise<Order> => {
    const order = new Order(orderData);
    return orderDb.createOrder(order);
  };
const deleteOrderById = async (id: number): Promise<Order> => orderDb.deleteOrderById(id);
export default {getAllOrders, createOrder, deleteOrderById}; 