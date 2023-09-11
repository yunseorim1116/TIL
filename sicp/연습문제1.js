// const a = 5 + 4 + (2 - (3 - (6 + 4 / 5)));
// const b = 3 * ((6 - 2) * (2 - 7));
// const result = a / b;

// console.log(result);

// const result2 = (5 + 4 + (2 - (3 - (6 + 4 / 5)))) / (3 * (6 - 2) * (2 - 7));
// console.log(result2);

function getNumber(a, b, c) {
  const x = Math.min(...arguments);
  const newList = [...arguments].filter((_) => x !== _);
  return newList[0] * newList[0] + newList[1] * newList[1];
}

console.log(getNumber(1, 2, 3));
