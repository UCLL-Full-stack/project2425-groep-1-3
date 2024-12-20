import carDb from "../repository/car.db";
import { Car } from "../model/Car";
import { CarInput } from "../types";
import { CarPart } from "@prisma/client";

const getAllCars = async (): Promise<Car[]> => carDb.getAllCars();

const getCarById = async (id: number): Promise<Car> => {
    const car = await carDb.getCarById(id);
    if (!car) throw new Error(`Car with id ${id} does not exists.`);
    return car;
}

const deleteCarById = async (id: number): Promise<Car> => carDb.deleteCarById(id);

const addCar = async ({
    model,
    brand,
    year,
    licensePlate,
    price,
}: CarInput & {carPart: CarPart}): Promise<Car> => {
    const car = new Car({
        model,
        brand,
        year,
        licensePlate,
        price,
        carParts: []
    });
    return carDb.addCar(car);
}

export default {getAllCars, getCarById, deleteCarById, addCar};