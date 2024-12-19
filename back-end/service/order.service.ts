import { Order } from "../model/order";
import orderDb from "../repository/order.db";

const getAllOrders = async (): Promise<Order[]> => orderDb.getAllOrders();  

export default {getAllOrders}; 