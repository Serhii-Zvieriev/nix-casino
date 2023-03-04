import getRandomInt from "./getRandomInt";

export default function randomCoinFlip(balance) {
  if (getRandomInt(0, 1)) {
    return +Number(balance + (balance / 100) * 5).toFixed(2);
  } else {
    return +Number(balance - (balance / 100) * 5).toFixed(2);
  }
}
