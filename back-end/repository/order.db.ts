import { Order } from "../model/order";
import database from "../util/database";

const getAllOrders = async () => {
    try {
        const ordersPrisma = await database.order.findMany();
        return ordersPrisma.map(Order.from);
    }
    catch (error) {
        console.error(error);
        throw new Error('Database error.');
    }
};
export default {
    getAllOrders,
};