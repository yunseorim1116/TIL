const setFunction = () => {
  console.time("map test"); // 측정 시작
  const map = new Map();
  for (let index = 0; index < 100000; index++) {
    map.set(index, index);
  }

  console.timeEnd("map test"); // 측정 종료

  console.time("object test"); // 측정 시작
  const object = {};

  for (let index = 0; index < 100000; index++) {
    object[index] = index;
  }

  console.timeEnd("object test"); // 측정 종료
};

setFunction();

const getFunction = () => {
  const dataCount = 1000000;
  const map = new Map();
  const object = {};

  // 데이터 채우기
  for (let index = 0; index < dataCount; index++) {
    const key = `key${index}`;
    map.set(key, index);
    object[key] = index;
  }

  // Object get 성능 측정
  console.time("object test"); // 측정 시작
  for (let index = 0; index < dataCount; index++) {
    const key = `key${index}`;
    object[key];
  }
  console.timeEnd("object test"); // 측정 종료

  // Map get 성능 측정
  console.time("Map test"); // 측정 시작
  for (let index = 0; index < dataCount; index++) {
    const key = `key${index}`;
    map.get(key);
  }
  console.timeEnd("Map test"); // 측정 종료
};

// getFunction();
const deleteFunction = () => {
  const dataCount = 1000000;
  const map = new Map();
  const object = {};

  // 데이터 채우기
  for (let index = 0; index < dataCount; index++) {
    const key = `key${index}`;
    map.set(key, index);
    object[key] = index;
  }

  // Object delete 성능 측정
  console.time("object delete"); // 측정 시작
  for (let index = 0; index < dataCount; index++) {
    const key = `key${index}`;
    delete object[key];
  }
  console.timeEnd("object delete"); // 측정 종료

  // Map delete 성능 측정
  console.time("map delete"); // 측정 시작
  for (let index = 0; index < dataCount; index++) {
    const key = `key${index}`;
    map.delete(key);
  }
  console.timeEnd("map delete"); // 측정 종료
};

// deleteFunction();

const addFunction = () => {
  const dataCount = 1000000;
  const map = new Map();
  const object = {};

  console.time("Map add");
  for (let index = dataCount; index < dataCount * 2; index++) {
    const key = `key${index}`;
    map.set(key, index);
  }
  console.timeEnd("Map add");

  console.time("Object add");
  for (let index = dataCount; index < dataCount * 2; index++) {
    const key = `key${index}`;
    object[key] = index;
  }
  console.timeEnd("Object add");
};

// addFunction();
