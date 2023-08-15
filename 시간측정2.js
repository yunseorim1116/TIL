const { performance } = require("perf_hooks");

function testMap() {
  const map = new Map();
  for (let index = 0; index < 100000; index++) {
    map.set(`key${index}`, index);
  }
  for (let index = 0; index < 100000; index++) {
    map.get(`key${index}`);
  }
}

function testObject() {
  const object = {};
  for (let index = 0; index < 100000; index++) {
    object[`key${index}`] = index;
  }
  for (let index = 0; index < 100000; index++) {
    object[`key${index}`];
  }
}

const mapStartTime = performance.now();
testMap();
const mapEndTime = performance.now();

console.log(`Map: ${mapEndTime - mapStartTime}ms`);

const objectStartTime = performance.now();
testObject();
const objectEndTime = performance.now();

console.log(`Object: ${objectEndTime - objectStartTime}ms`);
