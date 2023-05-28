let a = 10;
let b = a;
 let obj1 = { c: 10, d: 'ddd' };
let obj2 = obj1;

 b = 15;
 obj2 = { c: 20, d: 'ddd' };

console.log(obj2 === obj1) //false

console.log(a); // (1) undefined. 값을 대입하지 않은 변수에 접근

 let obj = { a: 1 };
 console.log(obj.a); // 1
 console.log(obj.b); // (2) 존재하지 않는 프로퍼티에 접근
 console.log(b); // c.f) ReferenceError: b is not define
 console.log('t')
//  let func = function() { };
//  let c = func(); // (3) 반환(return) 값이 없으면 undefined를 반환한 것으로 간주.
//  console.log(c);