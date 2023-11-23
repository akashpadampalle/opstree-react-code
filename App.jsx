import { useState } from "react";
import CreateCarForm from "./CreateCarForm";
import CarList from "./CarList";
import "./styles.css";

export default function App() {
  const [cars, setCars] = useState([]);

  const addCar = (newCar) => {
    const foundCar = cars.find(
      (car) => newCar.name === car.name && newCar.model === car.model,
    );
    if (!foundCar) {
      setCars([...cars, newCar]);
    } else {
      const newCars = cars.map((car) => {
        if (car.name === newCar.name && car.model === newCar.model) {
          return { ...car, quantity: car.quantity + newCar.quantity };
        } else {
          return car;
        }
      });

      setCars(newCars);
    }
  };

  return (
    <>
      <CreateCarForm addCar={addCar} />
      <CarList cars={cars} />
    </>
  );
}
