const _ = require("lodash");
var clone = require("clone");
const { performance } = require("perf_hooks");
const a = Symbol("a");
const largeObj = Symbol("a");

// const size = 100000;
// for (let i = 0; i < size; i++) {
//   largeObj[`prop${i}`] = i;
// }

// const largeObj = [];
// const number = 100000;

// for (let index = 0; index < number; index++) {
//   const obj = {
//     profile: { name: "철수", age: 12 },
//     grade: "A",
//     na: Symbol("a"),
//   };
//   largeObj.push(obj);
// }

const measureTime = (action) => {
  const startTime = performance.now();
  action();

  const endTime = performance.now();
  return (endTime - startTime).toFixed(3);
};

console.log(largeObj);
// const parseStringifyTime = measureTime(() =>
//   JSON.parse(JSON.stringify(largeObj))
// );
const cloneDeepTime = measureTime(() => _.cloneDeep(largeObj));
// const structuredCloneTime = measureTime(() => structuredClone(largeObj));
const cloneLib = measureTime(() => clone(largeObj));

// console.log("JSON.parse(JSON.stringify):", parseStringifyTime, "ms");
console.log("_.cloneDeep:", cloneDeepTime, "ms");
// console.log("structuredClone:", structuredCloneTime, "ms");
console.log("cloneLib:", cloneLib, "ms");
