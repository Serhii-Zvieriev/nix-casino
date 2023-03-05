import getRandomInt from "./getRandomInt";

export default function randomCoinFlip(balance, deposit) {
  if (getRandomInt(0, 1)) {
    return +Number(balance + (deposit / 100) * 5).toFixed(2); // !!!!
  } else {
    return +Number(balance - (deposit / 100) * 5).toFixed(2);
  }
}
