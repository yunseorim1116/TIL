// const _ = require("lodash");
// var clone = require("clone");

// const testArr = [];

// for (let index = 0; index < 10000; index++) {
//   const obj = { profile: { name: "철수", age: 12 }, grade: "A" };
//   testArr.push(obj);
// }

// console.time("로다쉬 :");
// _.cloneDeep(testArr);
// console.timeEnd("로다쉬 :");

// console.time("json Parse: ");
// JSON.parse(JSON.stringify(testArr));
// console.timeEnd("json Parse: ");

// console.time("structure: ");
// structuredClone(testArr);
// console.timeEnd("structure: ");

// // console.log(clonedObj.symbolTest === symbolType);

const { performance } = require("perf_hooks");

const testArr = Array.from({ length: 10000 }, (_, index) => ({ index }));

const measureTime = (action) => {
  const startTime = performance.now();
  action();
  const endTime = performance.now();
  return endTime - startTime;
};

const jsonParseStringifyTime = measureTime(() => {
  JSON.parse(JSON.stringify(testArr));
});

const structuredCloneTime = measureTime(() => {
  structuredClone(testArr);
});

console.log(
  "JSON.parse(JSON.stringify):",
  jsonParseStringifyTime.toFixed(3),
  "ms"
);
console.log("structuredClone:", structuredCloneTime.toFixed(3), "ms");
