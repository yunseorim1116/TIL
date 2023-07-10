const copyArray = (arr, seen) => {
  return arr.map((item) => copyDeepObject(item, seen));
};

const copyRegExp = (regExp) => {
  return new RegExp(regExp);
};

const copyDate = (date) => {
  return new Date(date);
};

const copySet = (set, seen) => {
  const copiedSet = new Set();
  for (let item of set) {
    copiedSet.add(copyDeepObject(item, seen));
  }
  return copiedSet;
};

const copyMap = (map, seen) => {
  const copiedMap = new Map();
  for (let [key, value] of map) {
    copiedMap.set(copyDeepObject(key, seen), copyDeepObject(value, seen));
  }
  return copiedMap;
};



const copyDeepObject = (target, seen = new Set()) => {
  if (Array.isArray(target)) {
    return copyArray(target, seen);
  }

  if (target instanceof RegExp) {
    return copyRegExp(target);
  }

  if (target instanceof Date) {
    return copyDate(target);
  }

  if (target instanceof Set) {
    return copySet(target, seen);
  }

  if (target instanceof Map) {
    return copyMap(target, seen);
  }

  if (typeof target === 'object' && target !== null) {

    if (seen.has(target)) {
      return target;
    }

    seen.add(target);

    const resultObj = {};

    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        resultObj[key] = copyDeepObject(target[key], seen);
      }
    }
    return resultObj;
  }

  if (typeof target === 'symbol') {
    const { description } = target;
    return Symbol.for(description);
  }

  //객체도, 예외 객체도, Symbol타입도 아닐 때
  return target;
};

const sym =  Symbol("g")
const objA = { strA:'A', a :'a', g: sym};
const objB = { strB:'B' , b:'b'};

console.log(objA)

objA.ref = objB;
objB.ref = objA;

console.log(objA)
const copiedObj = copyDeepObject(objA);

console.log('---')
console.log(copiedObj.g === objA.g)

// const x = { a: '1', g: Symbol("g") , b:[1,2,3] }
// const a = copyDeepObject(x)
// console.log(a)