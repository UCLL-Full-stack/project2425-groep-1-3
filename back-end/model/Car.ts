import { CarPart as CarPartPrisma, Car as CarPrisma } from '@prisma/client';
import { CarPart } from './CarPart';
export class Car {
    private id?: number;
    private model: string;
    private brand: string;
    private year: number;
    private licensePlate: string;
    private price: number;
    private carParts: CarPart[] = [];

    constructor(car: {
        id?: number;
        model: string;
        brand: string;
        year: number;
        licensePlate: string;
        price: number;
        carParts: CarPart[];
    }) {
        this.id = car.id;
        this.model = car.model;
        this.brand = car.brand;
        this.year = car.year;
        this.licensePlate = car.licensePlate;
        this.price = car.price;
        this.carParts = car.carParts;
    }

    equals({ id, model, brand, year, licensePlate, price}: Car): boolean {
        return (
            this.id === id &&
            this.model === model &&
            this.brand === brand &&
            this.year === year &&
            this.licensePlate === licensePlate &&
            this.price === price
        );
    }

    getId(): number | undefined {
        return this.id;
    }

    getModel(): string {
        return this.model;
    }

    getBrand(): string {
        return this.brand;
    }

    getYear(): number {
        return this.year;
    }

    getLicensePlate(): string {
        return this.licensePlate;
    }

    getPrice(): number {
        return this.price;
    }

    getCarParts(): CarPart[] {
        return this.carParts;
    }

    static from({ id, model, brand, year, licensePlate, price, carParts }: CarPrisma & {carParts: CarPartPrisma[]}): Car {
        return new Car({
            id,
            model,
            brand,
            year,
            licensePlate,
            price,
            carParts: carParts.map((carPart) => CarPart.from(carPart))

        });
    }
}
