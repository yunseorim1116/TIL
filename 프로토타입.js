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

// function Person(name) {
//   this.name = name;
// }

// var foo = new Person('Lee');

// console.dir(Person); // prototype 프로퍼티가 있다.
// console.dir(foo);    // prototype 프로퍼티가 없다.
// 1. 'Animal' 생성자 함수를 정의합니다.
//이 함수는 'name' 매개변수를 받아 'this.name' 속성을 설정합니다.
function Animal(name) {
  this.name = name;
}


console.log(Animal.prototype)
// 2. 'Animal.prototype'에 'eat' 메소드를 추가합니다.
//이 메소드는 호출된 객체의 'name' 속성을 사용하여 문자열을 반환합니다.
Animal.prototype.eat = function() {
  return `${this.name} is eating.`;
}

// 3. 'Dog' 생성자 함수를 정의합니다.
//이 함수는 'Animal' 함수를 'call' 메소드를 이용해 호출하여 'name' 속성을 상속받습니다.
function Dog(name) {

  console.log(this)
  Animal.call(this, name);
}
console.log( new Dog())

// 4. 'Dog'의 프로토타입을 'Animal'의 프로토타입의 인스턴스로 설정합니다.
//이렇게 하면 'Dog' 인스턴스는 'Animal.prototype'의 메소드를 상속받게 됩니다.
Dog.prototype = Object.create(Animal.prototype);
console.log(Object.create(Animal.prototype)) //Animal{}
// // 5. 'Dog.prototype.constructor'를 'Dog'로 설정합니다.
// //이렇게 해야 'Dog' 인스턴스를 생성하는 생성자 함수가 'Dog'임을 보장할 수 있습니다.
// Dog.prototype.constructor = Dog;

// // 6. 'Dog.prototype'에 'bark' 메소드를 추가합니다.
// //이 메소드는 호출된 객체의 'name' 속성을 사용하여 문자열을 반환합니다.
// Dog.prototype.bark = function() {
//   return `${this.name} says woof!`;
// }

// // 7. 'Dog' 생성자 함수를 사용해 'myDog' 인스턴스를 생성합니다.
// //이 인스턴스는 'Dog'와 'Animal'의 메소드 모두를 상속받습니다.
// let myDog = new Dog('Rex');

// // 8. 'myDog' 인스턴스의 'eat' 메소드를 호출합니다.
// // 'eat' 메소드는 'myDog' 인스턴스의 프로토타입 체인에 있는
// //'Animal.prototype'에서 찾을 수 있습니다.
// console.log(myDog.eat()); // Rex is eating.

// // 9. 'myDog' 인스턴스의 'bark' 메소드를 호출합니다.
// //'bark' 메소드는 'myDog' 인스턴스의 프로토타입 체인에 있는
// //'Dog.prototype'에서 찾을 수 있습니다.
// console.log(myDog.bark()); // Rex says woof!
