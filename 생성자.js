
const User = function(name , age ){
    this.name = name
    this.age = age
    this.showName = ()=> {
        console.log(this.name + '이름나올거야')
    }
    // this.showName2 = function(){
    //     console.log(this.name + '얘도이름')
    // }
}

const x = new User('a',1)
User.prototype.showName = function(){
    console.log('프로토타입 주입 show Name')
}

console.dir(x.prototype)

function Person(name, age) {
  // private 변수
  var privateVariable = "This is private";

  // public 프로퍼티
  this.name = name;
  this.age = age;

  // public 메소드
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  };

  // private 메소드
  function privateMethod() {
    console.log(privateVariable);
  }

  // public 메소드
  this.publicMethod = function() {
    privateMethod();
  };
}

// Person 객체의 인스턴스 생성
var person1 = new Person("Alice", 25);

console.log(person1.name); // 외부에서 접근 가능
console.log(person1.age); // 외부에서 접근 가능
person1.sayHello(); // 외부에서 접근 가능

console.log(person1.privateVariable); // undefined - 외부에서 접근 불가능
person1.privateMethod(); // TypeError: person1.privateMethod is not a function - 외부에서 접근 불가능

person1.publicMethod(); // 내부에서 접근 가능
