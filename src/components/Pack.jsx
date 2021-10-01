import React, { useRef, useState, useEffect } from "react"
import { unrentCar, rentCar } from "../services/renting-service"
import useWatchCars from "../hooks/useWatchCars"
import '../styles/Pack.css'

function Pack(props) {
  const [renting, setRenting] = useState();
  const carsLeft = useWatchCars(props.hour);

  const packRef = useRef();

  useEffect(() => {
    const packElement = packRef.current;

    if (renting) {
      packElement.style.backgroundColor = "springgreen";
    } else if (carsLeft === 0) {
      packElement.style.backgroundColor = "salmon";
    } else {
      packElement.style.backgroundColor = "white";
    }
  }, [carsLeft, renting]);

  const toggleRenting = () => {
    if (renting) {
      unrentCar(props.hour, carsLeft);
      setRenting(!renting);
    } else if (carsLeft > 0) {
      rentCar(props.hour, carsLeft);
      setRenting(!renting);
    }
  };

  window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    if(renting) {
      unrentCar(props.hour, carsLeft)
    }
  });

  return (
    <div
      className="pack"
      ref={packRef}
      onClick={() => toggleRenting()}
      style={{
        width: "80%",
        margin: "auto",
        backgroundColor: "white",
        height: "3rem",
        textAlign: "center",
      }}
    >
      <p style={{ padding: "1rem" }} className="title">
        Rent for {props.hour}
        <span className="list" style={{ marginLeft: "10px", color: "grey" }}>
          {carsLeft}/8
        </span>
      </p>
    </div>
  );
}

export default Pack;
