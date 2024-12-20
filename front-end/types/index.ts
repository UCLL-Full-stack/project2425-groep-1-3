export type Car = {
  id?: number;
  model?: string;
  brand?: string;
  year?: number;
  licensePlate?: string;
  price?: number;
};

export type CarPart = {
  id?: number;
  name: string;
  price: number;
  quantity: number;
};

export type User = {
  id?: number;
  username?: string;
  password?: string;
  email: string;
  role?: string;
};

export type Order = {
  id?: number;
  orderDate: Date | string;
  deliveryDate: Date | string;
  totalAmount: number;
  status: string;
};

export type StatusMessage = {
  message: string;
  type: "error" | "success";
};