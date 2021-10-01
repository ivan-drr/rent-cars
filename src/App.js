import "./App.css";
import { getAllHours } from "./services/renting-service";
import { useEffect, useState } from "react";
import Pack from "./components/Pack";
import Guest from "./components/Guest";

function App() {
  const [list, setList] = useState();

  useEffect(() => {
    getAllHours().then((res) => setList(res));
  }, []);

  return (
    <div className="App">
      <Guest />
      <h2 style={{ fontVariant: "small-caps" }}>Click to rent a car</h2>
      <div
        id="box"
        style={{ margin: "auto", backgroundColor: "rgb(255, 255, 255, .6)" }}
      >
        {list?.map((packHour) => (
          <Pack key={packHour} hour={packHour} />
        ))}
      </div>
    </div>
  );
}

export default App;
