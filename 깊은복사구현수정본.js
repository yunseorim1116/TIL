const isObject = (value) => {
  return typeof value === 'object' && value !== null;
};

const isSymbol = (value) => {
  return typeof value === 'symbol';
};

const copyArray = (arr, seen) => {
  return arr.map((item) => copyDeepObject(item, seen));
};

const copyDeepObject = (target, seen = new Set()) => {
  if (isObject(target)) {
    if (seen.has(target)) {
      return target;
    }

    seen.add(target);

    if (Array.isArray(target)) {
      return copyArray(target, seen);
    }

    if (target instanceof RegExp) {
      return new RegExp(target);
    }

    if (target instanceof Date) {
      return new Date(target);
    }

    if (target instanceof Set) {
      const copiedSet = new Set();
      for (let item of target) {
        copiedSet.add(copyDeepObject(item, seen));
      }
      return copiedSet;
    }

    if (target instanceof Map) {
      const copiedMap = new Map();
      for (let [key, value] of target) {
        copiedMap.set(copyDeepObject(key, seen), copyDeepObject(value, seen));
      }
      return copiedMap;
    }

    const resultObj = {};
    for (let x in target) {
      resultObj[x] = copyDeepObject(target[x], seen);
    }
    return resultObj;
  }

  if (isSymbol(target)) {
    const { description } = target;
    return Symbol.for(description);
  }

  return target;
};


const objA = { strA:'A', a :'a'};
const objB = { strB:'B' , b:'b'};

console.log(objA)

objA.ref = objB;
objB.ref = objA;

console.log(objA)
const copiedObj = copyDeepObject(objA);

console.log('---')
console.log(copiedObj)

// const x = { a: '1', g: Symbol("g") , b:[1,2,3] }
// const a = copyDeepObject(x)
// console.log(a)