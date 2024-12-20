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

const createOrder = async (order : Order): Promise<Order> => {
    try {
        if (!(order instanceof Order)) {
            throw new Error('expected order to be an instance of Order');
        }

        const orderPrisma = await database.order.create({
            data: {
                orderDate: order.getOrderDate(),
                deliveryDate: order.getDeliveryDate(),
                totalAmount: order.getTotalAmount(),
                status: order.getStatus(),
            },
    });
        return Order.from(orderPrisma);
    }
    catch (error) {
        console.error(error);
        throw new Error('Database error.');
    }
};



export default {
    getAllOrders,
    createOrder,
};