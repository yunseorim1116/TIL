const _ = require("lodash");
var clone = require("clone");
const { performance } = require("perf_hooks");

const testArr = [];
const number = 10000;

for (let index = 0; index < number; index++) {
  const obj = { profile: { name: "철수", age: 12 }, grade: "A" };
  testArr.push(obj);
}

const measureTime = (action) => {
  const startTime = performance.now();
  action();

  const endTime = performance.now();
  return (endTime - startTime).toFixed(3);
};

const parseStringifyTime = measureTime(() =>
  JSON.parse(JSON.stringify(testArr))
);
const cloneDeepTime = measureTime(() => _.cloneDeep(testArr));
const structuredCloneTime = measureTime(() => structuredClone(testArr));
const cloneLib = measureTime(() => clone(testArr));

console.log("JSON.parse(JSON.stringify):", parseStringifyTime, "ms");
console.log("_.cloneDeep:", cloneDeepTime, "ms");
console.log("structuredClone:", structuredCloneTime, "ms");
console.log("cloneLib:", cloneLib, "ms");
