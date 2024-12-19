import express from 'express';

const orderRouter = express.Router();
orderRouter.get('/',async (req, res, next) => {
    res.send('GET /order');
});