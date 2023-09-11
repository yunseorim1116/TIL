// const _ = require("lodash");
// var clone = require("clone");
// const { performance } = require("perf_hooks");

// const largeObj = {};

// const size = 100000;
// for (let i = 0; i < size; i++) {
//   largeObj[`prop${i}`] =
//     i +
//     "d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요";
// }

// // const largeObj = [];
// // const number = 100000;

// // for (let index = 0; index < number; index++) {
// //   const obj = {
// //     profile: {
// //       name: "d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요d안녕하세요",
// //       age: 12,
// //     },
// //     grade: "A",
// //   };
// //   largeObj.push(obj);
// // }

// const measureTime = (action) => {
//   const startTime = performance.now();
//   action();

//   const endTime = performance.now();
//   return (endTime - startTime).toFixed(3);
// };

// const parseStringifyTime = measureTime(() =>
//   JSON.parse(JSON.stringify(largeObj))
// );
// const cloneDeepTime = measureTime(() => _.cloneDeep(largeObj));
// const structuredCloneTime = measureTime(() => structuredClone(largeObj));

// console.log("JSON.parse(JSON.stringify):", parseStringifyTime, "ms");
// console.log("_.cloneDeep:", cloneDeepTime, "ms");
// console.log("structuredClone:", structuredCloneTime, "ms");
