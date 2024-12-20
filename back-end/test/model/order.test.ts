import { Order } from "../../model/order";

const orderData = {
  id: 1,
  orderDate: new Date("2023-01-01"),
  deliveryDate: new Date("2023-01-10"),
  totalAmount: 1000,
  status: "Pending",
};

test('given: valid values for order, when: order is created, then: order is created with those values', () => {
  // given

  // when
  const order = new Order(orderData);

  // then
  expect(order.getId()).toEqual(orderData.id);
  expect(order.getOrderDate()).toEqual(orderData.orderDate);
  expect(order.getDeliveryDate()).toEqual(orderData.deliveryDate);
  expect(order.getTotalAmount()).toEqual(orderData.totalAmount);
  expect(order.getStatus()).toEqual(orderData.status);
});

test('given: an existing order, when: getting order details, then: order details are returned', () => {
  // given
  const order = new Order(orderData);

  // when
  const id = order.getId();
  const orderDate = order.getOrderDate();
  const deliveryDate = order.getDeliveryDate();
  const totalAmount = order.getTotalAmount();
  const status = order.getStatus();

  // then
  expect(id).toEqual(orderData.id);
  expect(orderDate).toEqual(orderData.orderDate);
  expect(deliveryDate).toEqual(orderData.deliveryDate);
  expect(totalAmount).toEqual(orderData.totalAmount);
  expect(status).toEqual(orderData.status);
});

test('given: an order without id, when: order is created, then: order is created without id', () => {
  // given
  const orderDataWithoutId = {
    orderDate: new Date("2023-01-01"),
    deliveryDate: new Date("2023-01-10"),
    totalAmount: 1000,
    status: "Pending",
  };

  // when
  const order = new Order(orderDataWithoutId);

  // then
  expect(order.getId()).toBeUndefined();
  expect(order.getOrderDate()).toEqual(orderDataWithoutId.orderDate);
  expect(order.getDeliveryDate()).toEqual(orderDataWithoutId.deliveryDate);
  expect(order.getTotalAmount()).toEqual(orderDataWithoutId.totalAmount);
  expect(order.getStatus()).toEqual(orderDataWithoutId.status);
});