// export default function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

export default function getRandomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  // console.log(Math.floor(rand));
  return Math.floor(rand);
}

// function randomInteger(min, max) {
//   // случайное число от min до (max+1)
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }
