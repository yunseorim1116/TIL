const _ = require("lodash");
const { performance } = require("perf_hooks");

const original = { profile: { name: "철수", age: 12 }, grade: "A" };
const original2 = { profile: { name: "철수", age: 12 }, grade: "A" };
const original3 = { profile: { name: "철수", age: 12 }, grade: "A" };

const measureTime = (action) => {
  const startTime = performance.now();
  action();
  const endTime = performance.now();
  return (endTime - startTime).toFixed(3);
};

const parseStringifyTime = measureTime(() =>
  JSON.parse(JSON.stringify(original))
);
const cloneDeepTime = measureTime(() => _.cloneDeep(original2));
const structuredCloneTime = measureTime(() => structuredClone(original3));

console.log("JSON.parse(JSON.stringify):", parseStringifyTime, "ms");
console.log("_.cloneDeep:", cloneDeepTime, "ms");
console.log("structuredClone:", structuredCloneTime, "ms");
