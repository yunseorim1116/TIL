// const { performance } = require("perf_hooks");

// function testMap() {
//   const map = new Map();
//   for (let index = 0; index < 100000; index++) {
//     map.set(index, index);
//   }
// }

// function testObject() {
//   const object = {};
//   for (let index = 0; index < 100000; index++) {
//     object[index] = index;
//   }
// }

// const mapStartTime = performance.now();
// console.log(mapStartTime);
// testMap();
// const mapEndTime = performance.now();
// console.log(mapEndTime);

// console.log(`Map: ${mapEndTime - mapStartTime}ms`);

// const objectStartTime = performance.now();
// testObject();
// const objectEndTime = performance.now();

// console.log(`Object: ${objectEndTime - objectStartTime}ms`);
// const { performance } = require("perf_hooks");

// 테스트용 데이터 생성
const dataCount = 1000000;
const testData = {};
const testMap = new Map();

for (let i = 0; i < dataCount; i++) {
  const key = `key${i}`;
  testData[key] = i;
  testMap.set(key, i);
}

// Object의 get 성능 측정
const objectStartTime = performance.now();
for (let i = 0; i < dataCount; i++) {
  const key = `key${i}`;
  testData[key];
}
const objectEndTime = performance.now();
console.log(`Object get time: ${objectEndTime - objectStartTime}ms`);

// Map의 get 성능 측정
const mapStartTime = performance.now();
for (let i = 0; i < dataCount; i++) {
  const key = `key${i}`;
  testMap.get(key);
}
const mapEndTime = performance.now();
console.log(`Map get time: ${mapEndTime - mapStartTime}ms`);
