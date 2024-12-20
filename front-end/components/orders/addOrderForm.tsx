import OrderService from "@/services/OrderService";
import { Order } from "@/types";
import router from "next/router";
import { useState } from "react";

const addOrderForm: React.FC = () => {
    const [orderDate, setOrderDate] = useState<Date | undefined>();
    const [deliveryDate, setDeliveryDate] = useState<Date | undefined>();
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [status, setStatus] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (orderDate && deliveryDate) {
            const order: Order = {
                orderDate, 
                deliveryDate, 
                totalAmount, 
                status
            };
    
            createOrder(order);
            setTimeout(() => router.push('/orders'), 1000);
        } else {
            console.error("Order Date and Delivery Date are required");
        }
    };

    const createOrder = async (order: Order) => {
        try {
            await OrderService.addOrder(order);
            console.log("Order successfully added", order);
        } catch (error) {
            console.error("Failed to add order", error);
        }
    };

    const inputStyle = {
        backgroundColor: '#f0f0f0',
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        marginTop: '0.5rem',
        marginBottom: '1rem',
        color: '#000',
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Order Date:</label>
                    <input
                        type="date"
                        required
                        onChange={(e) => setOrderDate(new Date(e.target.value))}
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label>Delivery Date:</label>
                    <input
                        type="date"
                        required
                        onChange={(e) => setDeliveryDate(new Date(e.target.value))}
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label>Total Amount:</label>
                    <input
                        type="number"
                        step="0.01"
                        required
                        value={totalAmount}
                        onChange={(e) => setTotalAmount(parseFloat(e.target.value))}
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        required
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        style={inputStyle}
                    >
                        <option value="Not Paid">Not Paid</option>
                        <option value="Paid">Paid</option>
                    </select>
                </div>
                <button
                    className="bg-[#21b5ff] hover:bg-[#21b5ff97] px-0.75 py-1.5 rounded p-2.5 text-black"
                    type="submit"
                    style={{
                        padding: '0.75rem 1.5rem',
                        color: 'black',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        marginTop: '1rem',
                    }}
                >
                    Add Order
                </button>
            </form>
        </div>
    );
};

export default addOrderForm;