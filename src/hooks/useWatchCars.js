import { useState, useEffect } from "react";
import { watchCars } from "../services/renting-service.js";

export default function useWatchCars(hour) {
  const [carsLeft, setCarsLeft] = useState();

  useEffect(() => {
    const unsubscribe = watchCars(hour, (cars) => {
      setCarsLeft(cars);
    });

    return () => {
      unsubscribe();
    };
  }, [carsLeft, hour]);

  return carsLeft;
}
