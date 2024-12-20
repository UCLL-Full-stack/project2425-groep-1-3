import { Car } from "@/types";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  car: Car;
};

const CarDetails: React.FC<Props> = ({ car }: Props) => {
  const router = useRouter();
  return (
      <>
      <div className="flex flex-col">
      <table>
        <thead className="bg-[#2c2c2c] flex flex-row items-center p-1 mt-3 text-white font-bold text-xl">
          <tr>
            <th className="w-56 m-2 px-5 p-3">Brand</th>
            <th className="w-56 m-2 px-5 p-3">Model</th>
            <th className="w-56 m-2 px-5 p-3">Year</th>
            <th className="w-56 m-2 px-5 p-3">License plate</th>
            <th className="w-56 m-2 px-5 p-3">Price</th>
          </tr>
        </thead>
        <tbody className="flex flex-row items-center border-2 border-[#000000] font-semibold text-xl">
          <tr>
            <td className="w-56 m-2 px-5 p-2">{car.brand}</td>
            <td className="w-56 m-2 px-5 p-2">{car.model}</td>
            <td className="w-56 m-2 px-5 p-2">{car.year}</td>
            <td className="w-56 m-2 px-5 p-2">{car.licensePlate}</td>
            <td className="w-56 m-2 px-5 p-2">{car.price}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-5 justify-center flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {car.carParts &&
            car.carParts.map((part) => (
              <div key={part.id} className="border p-4 rounded shadow">
                <h3 className="font-bold">{part.name}</h3>
                <p>Price: ${part.price}</p>
                <p>Quantity: {part.quantity}</p>
              </div>
            ))}
        </div>
      </div>
      <button onClick={() => router.push(`/cars/${car.id}/addPart`)} className="bg-[#21b5ff] hover:bg-[#21b5ff97] p-3 rounded text-center font-bold mt-4">
        Add car part
      </button>
      </div>
    </>
  );
};
export default CarDetails;
