//초기코드

// let counter = 0;
// function incrementCounter() {
//   counter++;
// }

// console.log(counter);

// function main() {
//   for (let index = 0; index < 20; index++) {
//     incrementCounter();
//     // console.log(counter);
//   }
// }

//변경 후 코드

class Counter {
  private counter = 0;
  getCounter() {
    return this.counter;
  }
  setCounter(c: number) {
    this.counter = c;
  }
}

let counter = new Counter();

function incrementCounter(counter: Counter) {
  counter.setCounter(counter.getCounter() + 1);
}

function main() {
  for (let index = 0; index < 20; index++) {
    incrementCounter(counter);
  }
}
