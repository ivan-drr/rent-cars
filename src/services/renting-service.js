import firebase from "../firebase.js";
import { ref, get, update, onValue } from "@firebase/database";

const packRef = ref(firebase, "/packs");

export async function getAllHours() {
  const res = [];

  await get(packRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((child) => {
          res.push(child.val().hour);
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return res;
}

export function watchCars(hour, callback) {
  return onValue(packRef, (snapshot) => {
    snapshot.forEach((child) => {
      if (child.val().hour === hour) callback(child.val().cars);
    })
  })
}

export async function getPack(hour) {
  let res;

  await get(packRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((child) => {
          if (child.val().hour === hour) res = child.key;
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return res;
}

export function rentCar(hour, actualValue) {
  getPack(hour).then((packKey) => {
    const actualPackRef = ref(firebase, `packs/${packKey}`);
    update(actualPackRef, {
      cars: actualValue - 1,
    });
  });
}

export function unrentCar(hour, actualValue) {
  getPack(hour).then((packKey) => {
    const actualPackRef = ref(firebase, `packs/${packKey}`);
    update(actualPackRef, {
      cars: actualValue + 1,
    });
  });
}
