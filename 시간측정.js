console.time(); // 측정 시작

const map = new Map();

for (let index = 0; index < 100; index++) {
  map.set(`키${index}`, index);
}

console.timeEnd(); // 측정 종료

console.time(); // 측정 시작
const object = {};

for (let index = 0; index < 100; index++) {
  object[index] = index;
}

console.timeEnd(); // 측정 종료

//

// const map = new Map();
// const object = {};

// // 데이터 추가
// map.set("key1", "value1");
// object["key1"] = "value1";

// // 데이터 검색
// console.time("Map");
// console.log(map.get("key1"));
// console.timeEnd("Map");

// console.time("Object");
// console.log(object["key1"]);
// console.timeEnd("Object");
