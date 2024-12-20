import express, { Request, Response, NextFunction } from 'express';
import orderService from '../service/order.service';

const orderRouter = express.Router();
orderRouter.get('/',async (req: Request, res: Response, next: NextFunction) => {
    try{
        const orders = await orderService.getAllOrders();
        res.status(200).json(orders);
    }
    catch(error){     
        next(error);
    }
});

orderRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderData = req.body;
        const newOrder = await orderService.createOrder(orderData);
        res.status(200).json(newOrder);
    } catch (error) {
        next(error);
    }
});

export {orderRouter};