const getFunction = () => {
  const dataCount = 1000000;
  const map = new Map();
  const object = {};

  for (let index = 0; index < dataCount; index++) {
    const key = `key${index}`;
    map.set(key, index);
    object[key] = index;
  }

  console.time("object test"); // 측정 시작
  for (let index = 0; index < dataCount; index++) {
    const key = `key${index}`;
    map.get(key);
  }
  console.timeEnd("object test"); // 측정 종료

  console.time("Map test"); // 측정 시작
  for (let index = 0; index < dataCount; index++) {
    const key = `key${index}`;
    object[key];
  }
  console.timeEnd("Map test"); // 측정 종료
};

getFunction();
