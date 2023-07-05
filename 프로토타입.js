// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true
// };

// Object.setPrototypeOf(rabbit, animal);

// console.log(rabbit.eats); // true
// console.log(rabbit); // { jumps: true }

// const Person = function(name){
//     this._name = name
// }
// const instance = new Person('seorim')

// // console.log(instance)

// Person.prototype.getName = function(){
//     return this._name
// }

// instance.__proto__.getName() //undefined
// //이렇게 호출하게 되면 this의 binding 대상이 잘못되었다는 것을 알 수 있다.

// instance.getName()

//

function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo);    // prototype 프로퍼티가 없다.

