import { Car } from "@/types";
import React from "react";

type Props = {
  car: Car;
};

const CarDetails: React.FC<Props> = ({ car }: Props) => {
  return (
    <>
      {car && (
        <table>
          <thead className=" bg-[#2c2c2c] flex flex-row items-center p-1 mt-3 text-white font-bold text-xl">
            <th className="w-56 m-2 px-5 p-3">Brand</th>
            <th className="w-56 m-2 px-5 p-3">Model</th>
            <th className="w-56 m-2 px-5 p-3">Year</th>
            <th className="w-56 m-2 px-5 p-3">License plate</th>
            <th className="w-56 m-2 px-5 p-3">Price</th>
          </thead>
          <tr className="flex flex-row items-center border-2 border-[#000000] font-semibold text-xl">
            <td className="w-56 m-2  px-5 p-2">{car.brand}</td>
            <td className="w-56 m-2  px-5 p-2">{car.model}</td>
            <td className="w-56 m-2  px-5 p-2">{car.year}</td>
            <td className="w-56 m-2  px-5 p-2">{car.licensePlate}</td>
            <td className="w-56 m-2  px-5 p-2">{car.price}</td>
          </tr>
        </table>
      )}
    </>
  );
};
export default CarDetails;
