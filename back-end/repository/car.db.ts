import { Car } from "../model/Car";
import database from "../util/database";

const addCar = async (car: Car): Promise<Car> => {
    try {
        const carPrisma = await database.car.create({
            data: {
                model: car.getModel(),
                brand: car.getBrand(),
                year: car.getYear(),
                licensePlate: car.getLicensePlate(),
                price: car.getPrice(),
                carParts: {
                    connect: car.getCarParts().map((part) => ({ id: part.getId() }))
                }
            },
            include: {
                carParts: true
            }
        });
        if (!carPrisma) {
            throw new Error('Failed to create car.');
        }
        return Car.from(carPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getAllCars = async (): Promise<Car[]> => {
    try {
        const carsPrisma = await database.car.findMany({
            include: {
                carParts: true
            }
        });
        return carsPrisma.map(Car.from);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getCarById = async (id: number): Promise<Car | null> => {
    try {
        const carPrisma = await database.car.findUnique({
            where: {
                id
            },
            include: {
                carParts: true
            }
        });
        return carPrisma ? Car.from(carPrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const deleteCarById = async (id: number): Promise<Car> => {
    try {
        const carPrisma = await database.car.delete({
            where: {
                id
            },
            include: {
                carParts: true
            }
        });
        if (!carPrisma) {
            throw new Error(`Car with id ${id} does not exists.`);
        }
        return Car.from(carPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default { addCar, getAllCars, getCarById, deleteCarById };