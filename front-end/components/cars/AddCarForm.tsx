import React, { useState } from "react";
import { useRouter } from "next/router";
import CarService from "@/services/CarService";
import { StatusMessage } from "@/types";

const AddCarForm: React.FC = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState<number>(0);
  const [licensePlate, setLicensePlate] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

  const router = useRouter();

  const clearErrors = () => {
    setStatusMessages([]);
  };

  const validate = (): boolean => {
    let result = true;
    if (brand.trim() === "") {
      setStatusMessages([
        {
          type: "error",
          message: "Brand is required",
        },
      ]);
      result = false;
    }
    if (model.trim() === "") {
      setStatusMessages([
        {
          type: "error",
          message: "Model is required",
        },
      ]);
      result = false;
    }
    if (year <= 0) {
      setStatusMessages([
        {
          type: "error",
          message: "Year is required",
        },
      ]);
      result = false;
    }
    if (licensePlate.trim() === "") {
      setStatusMessages([
        {
          type: "error",
          message: "License Plate is required",
        },
      ]);
      result = false;
    }
    if (price <= 0) {
      setStatusMessages([
        {
          type: "error",
          message: "Price is required",
        },
      ]);
      result = false;
    }
    return result;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();
    if (!validate()) {
      return;
    }
    const newCar = { brand, model, year, licensePlate, price };

    try {
      await CarService.addCar(newCar);
      router.push("/cars");
    } catch (error) {
      console.error("Failed to add car", error);
    }
  };

  const inputStyle = {
    backgroundColor: "#f0f0f0",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    marginTop: "0.5rem",
    marginBottom: "1rem",
    color: "#000",
  };

  return (
    <>
      <title>Add Car</title>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="font-semibold mt-4">Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label className="font-semibold">Model</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label className="font-semibold">Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            style={inputStyle}
          />
        </div>
        <div>
          <label className="font-semibold">License Plate</label>
          <input
            type="text"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label className="font-semibold">Price</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={inputStyle}
          />
        </div>

        <button
          className=" bg-[#21b5ff] hover:bg-[#21b5ff97] px-0.75 py-1.5 my-2 rounded p-2.5 text-black"
          type="submit"
        >
          Add Car
        </button>
        {statusMessages && (
          <ul>
            {statusMessages.map(({ message, type }, index) => (
              <li
                key={index}
                className={type === "error" ? "text-red-600" : "text-green-800"}
              >
                {message}
              </li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
};

export default AddCarForm;
