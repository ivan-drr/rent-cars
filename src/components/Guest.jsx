import { name1, name2 } from "../services/local-data.js";

function Guest() {
  const username = generateName();

  function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateName() {
    const name =
      capFirst(name1[getRandomInt(0, name1.length + 1)]) +
      " " +
      capFirst(name2[getRandomInt(0, name2.length + 1)]);
    return name;
  }

  return (
    <p className="username" style={{ textAlign: "right", margin: "15px" }}>
      <span style={{ fontWeight: "bold" }}>Actual user: </span>
      {username}
    </p>
  );
}

export default Guest;
