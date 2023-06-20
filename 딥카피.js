const copyDeepObject = (target) => {
let resultObj = {};
  if (typeof target === 'object' && target !== null) {


    if(Array.isArray(target)){
        return resultObj = target.map((item) => copyDeepObject(item));
    }

    if(target instanceof Date){ //데이트 객체 예외처리
       resultObj = new Date(target);
      return resultObj;
      }

    for (let x in target) {
      resultObj[x] = copyDeepObject(target[x]);
    }
  } else {
  resultObj = target;
}
return resultObj;
}


console.log(new Set())
console.log(new Map())

let object = {
//   a: 'a',
//   b: new Date(),
//   c: function testFunction(){
// console.log('1')
//   },
  d:[1,2,3,{b:'1'},5],
  e:new Set()
};

  console.log(new Date())
  console.log(typeof new Date())

let copiedObject = copyDeepObject(object);
console.log(copiedObject === object)
console.log(copiedObject)
console.log(object)

console.log(object.c === copiedObject.c)
object.c = 'a'

console.log(object.c === copiedObject.c)