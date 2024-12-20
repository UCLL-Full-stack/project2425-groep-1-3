import { CarPart } from "../../model/CarPart";
import { CarPart as CarPartPrisma } from "@prisma/client";

const carPartData = {
  id: 1,
  name: "Engine",
  price: 500,
  quantity: 1,
};

test('given: valid values for car part, when: car part is created, then: car part is created with those values', () => {
  // given

  // when
  const carPart = new CarPart(carPartData);

  // then
  expect(carPart.getId()).toEqual(carPartData.id);
  expect(carPart.getName()).toEqual(carPartData.name);
  expect(carPart.getPrice()).toEqual(carPartData.price);
  expect(carPart.getQuantity()).toEqual(carPartData.quantity);
});

test('given: car part data from database, when: CarPart.from is called, then: car part is created with those values', () => {
  // given
  const carPartPrisma: CarPartPrisma = {
    id: 1,
    name: "Engine",
    price: 500,
    quantity: 1,
    carId: null,
  };

  // when
  const carPart = CarPart.from(carPartPrisma);

  // then
  expect(carPart.getId()).toEqual(carPartPrisma.id);
  expect(carPart.getName()).toEqual(carPartPrisma.name);
  expect(carPart.getPrice()).toEqual(carPartPrisma.price);
  expect(carPart.getQuantity()).toEqual(carPartPrisma.quantity);
});

test('given: an existing car part, when: getting car part details, then: car part details are returned', () => {
  // given
  const carPart = new CarPart(carPartData);

  // when
  const id = carPart.getId();
  const name = carPart.getName();
  const price = carPart.getPrice();
  const quantity = carPart.getQuantity();

  // then
  expect(id).toEqual(carPartData.id);
  expect(name).toEqual(carPartData.name);
  expect(price).toEqual(carPartData.price);
  expect(quantity).toEqual(carPartData.quantity);
});