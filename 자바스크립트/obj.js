let a = 10;
let b = a;
 let obj1 = { c: 10, d: 'ddd' };
let obj2 = obj1;

 b = 15;
 obj2 = { c: 20, d: 'ddd' };

console.log(obj2 === obj1)