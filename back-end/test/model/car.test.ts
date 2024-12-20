
import { CarPart } from "../../model/CarPart";
import { Car } from "../../model/Car";

const carParts = [
  new CarPart({ id: 1, name: "Engine", price: 500, quantity: 1,  }),
  new CarPart({ id: 2, name: "Wheel", price: 100, quantity: 4, }),
];

const carData = {
  id: 1,
  model: "Model S",
  brand: "Tesla",
  year: 2021,
  licensePlate: "ABC123",
  price: 79999,
  carParts: carParts,
};

test('given: valid values for car, when: car is created, then: car is created with those values', () => {
  // given

  // when
  const car = new Car(carData);

  // then
  expect(car.getId()).toEqual(carData.id);
  expect(car.getModel()).toEqual(carData.model);
  expect(car.getBrand()).toEqual(carData.brand);
  expect(car.getYear()).toEqual(carData.year);
  expect(car.getLicensePlate()).toEqual(carData.licensePlate);
  expect(car.getPrice()).toEqual(carData.price);
  expect(car.getCarParts()).toEqual(carData.carParts);
});

test('given: car data from database, when: Car.from is called, then: car is created with those values', () => {
  // given
  const carPrisma = {
    id: 1,
    model: "Model S",
    brand: "Tesla",
    year: 2021,
    licensePlate: "ABC123",
    price: 79999,
    carParts: [
      { id: 1, name: "Engine", price: 500, quantity: 1, carId: 1 },
      { id: 2, name: "Wheel", price: 100, quantity: 4, carId: 1 },
    ],
  };

  // when
  const car = Car.from(carPrisma);

  // then
  expect(car.getId()).toEqual(carPrisma.id);
  expect(car.getModel()).toEqual(carPrisma.model);
  expect(car.getBrand()).toEqual(carPrisma.brand);
  expect(car.getYear()).toEqual(carPrisma.year);
  expect(car.getLicensePlate()).toEqual(carPrisma.licensePlate);
  expect(car.getPrice()).toEqual(carPrisma.price);
  expect(car.getCarParts()).toHaveLength(2);
  expect(car.getCarParts()[0].getId()).toEqual(carPrisma.carParts[0].id);
  expect(car.getCarParts()[1].getId()).toEqual(carPrisma.carParts[1].id);
});

test('given: an existing car, when: getting car parts, then: car parts are returned', () => {
  // given
  const car = new Car(carData);

  // when
  const parts = car.getCarParts();

  // then
  expect(parts).toHaveLength(2);
  expect(parts[0].getName()).toEqual("Engine");
  expect(parts[1].getName()).toEqual("Wheel");
});