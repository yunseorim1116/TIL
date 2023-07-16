
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

const copySymbol = (symbol) => {
 const { description } = symbol;
return Symbol.for(description)
}

const copyObject = (object, seen)=>{
   const resultObj = {};
    for (let key in object) {
      if (!object.hasOwnProperty(key))  return
      resultObj[key] = copyDeepObject(object[key], seen);
    }
   return resultObj;
}

const copyDeepObject = (target, seen = new Set()) => {

  if (typeof target === 'object' && target !== null) { //참조타입

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

    if (seen.has(target)) {
      // console.log('seen')
      // console.log(seen)
      // console.log('target')
      // console.log(target)
      return target;
    }
  //  console.log('target!')
  //  console.log(target)
    seen.add(target);

    //예외처리 완료하고 object 타입일 때
   return copyObject(target, seen)

  } else { //원시타입

   if (typeof target === 'symbol') {
     return copySymbol(target)
  }

  //객체도, 예외 객체도, Symbol타입도 아닐 때
  return target;
  }


};


const objA = {  x: [1,2,3],strA:'A', a :'a', x : Symbol('x'), g: Symbol.for('a') };
const objB = { strB:'B' , b:'b'};

objA.ref = objB;
objB.ref = objA;

// console.log(objA)
const copiedObj = copyDeepObject(objA);
console.log('---')
const obj = {x : Symbol('x')}

console.log(copiedObj.g === objA.g)
// console.log(copiedObj.x === objA.x)
