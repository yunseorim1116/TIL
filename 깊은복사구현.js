const copyDeepObject = (target, seen = new Set()) => {
  let resultObj = {};
  if (typeof target === 'object' && target !== null) {

    // array, new Date , 정규식 , new Set (), new Map () 에 대한 예외처리
     if (seen.has(target)) {
        console.log(target)
      return
    }

    seen.add(target);

    if(Array.isArray(target)){ //배열 예외처리
        return resultObj = target.map((item) => copyDeepObject(item));
    }

    if (target instanceof RegExp) { //정규표현식 예외처리
      resultObj = new RegExp(target);
      return resultObj;
    }

    if(target instanceof Date){ //데이트 객체 예외처리
       resultObj = new Date(target);


      return resultObj;
      }

    if(target instanceof Set){ //new Set 객체 예외처리
       const copiedSet = new Set();
       for (let item of target) {
       copiedSet.add(copyDeepObject(item, memory));
         }
      return copiedSet;
      }

    if(target instanceof Map){ //new Map 객체 예외처리
       const copiedMap = new Map();
       for (let [key, value] of target) {
      copiedMap.set(copyDeepObject(key), copyDeepObject(value));
 }
return copiedMap;

    }

    //일반 object 형태
        for (let x in target) {
      resultObj[x] = copyDeepObject(target[x],seen);
    }
      } else { //원시값

   if (typeof target === 'symbol') {
      const newSymbolKey = target.description
      resultObj=  Symbol(newSymbolKey);
       return resultObj
    }

  resultObj = target;
}

return resultObj;

}

const checkObjectType = ()=>{

}

const a1 = Symbol()
const a2 = Symbol('a')
const objA = { a : [1,2,3], x : 1 };
const objB = { str : 'str'};

objA.ref = objB;
objB.ref = objA;


const copiedObj = copyDeepObject(objA);
console.log(copiedObj)

// const x = { a: '1', g: Symbol("g") , b:[1,2,3] }
// const a = copyDeepObject(x)
// console.log(a.g === x.g)