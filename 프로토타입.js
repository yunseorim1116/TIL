let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.eats); // true
console.log(rabbit); // { jumps: true }