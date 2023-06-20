const copyDeepObject = (target) => {
  let resultObj = {};

  if (typeof target === 'object' && target !== null) {

// array, new Date , 정규식 , new Set (), new Map () 에 대한 예외처리

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
      target.forEach((item) => {
        copiedSet.add(copyDeepObject(item));
      });
      return copiedSet;
      }

    if(target instanceof Map){ //new Map 객체 예외처리
       const copiedMap = new Map();
        recipeMap.forEach( (value, key, map) => {
        copiedMap.set(copyDeepObject(key), copyDeepObject(value))
    });

    return copiedMap;
      }


//일반 object 형태

    for (let x in target) {
      resultObj[x] = copyDeepObject(target[x]);
    }

  } else { //원시값
  resultObj = target;
}

return resultObj;
}

const regex = /abc/g;
console.log(typeof regex)
console.log(new Set())
console.log(new Map())

let object = {
//   a: 'a',
//   b: new Date(),
//   c: function testFunction(){
// console.log('1')
//   },
m:new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]),
//   f:new Set(),
//   e:new Set([1,2,3,3,5]),
//   d:[1,2,3,{b:'1'},5],
};

const a = new Set([1,2,3,3,5])
console.log(a)

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

console.log(recipeMap)

recipeMap.forEach((x)=>{
    console.log(x)
})

for (const key of recipeMap) {
    console.log(key)
}


recipeMap.forEach( (value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 ...
});

  console.log(new Date())
  console.log(typeof new Date())

let copiedObject = copyDeepObject(object);
console.log(copiedObject === object)
console.log(copiedObject)
console.log(object)

console.log(object.c === copiedObject.c)
object.c = 'a'

console.log(object.c === copiedObject.c)