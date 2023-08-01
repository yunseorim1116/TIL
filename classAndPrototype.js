class Person {

constructor(name) {
    this.name =name
}

static getName() { //static 메소드로 설정하면
    console.log(this.name)
}
}

const seorim = new Person('seorim')
Person.getName() //생성자에서만 메소드를 부를 수 있다.


function Person2(name){
    this.name = name
    this.getName = function(){
    console.log(this.name)
} //생성자 함수에 메소드를 정의하게 되면
//인스턴트가 만들어 질 때 마다 메소드가 만들어 지게 되는데,
}

Person2.prototype.say = function() {
    //protype객체에 메소드를 주입하게 되면 인스턴스를 생성할 때 마다 메소드를 만들지 않아도 되고,
    //비슷하게 상속을 구현할 수 있다. (정확히 말하면 상속이 아닌, 객체의 위임일 뿐이다.)
  console.log('afds');
  console.log('my Name is' + this.name)
};

// 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있는데 바로 프로토타입이다.

const seorim2 = new Person2('seorim')

console.log(seorim2)
seorim2.say()

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

function Dog(name,sound) {
  Animal.call(this, '개', name, sound);
}//상속 구현

Dog.prototype = Animal.prototype;
// Animal prototype 을 주입하게 되면

Dog.prototype.say = function() {
  console.log(this.sound);
}; //Dog.prototype에 주입한 메소드를

const x = new Animal('개','별찌','야오옹ㅇ')
x.say() //Animal로 만든 인스턴스에서도 사용 가능하게 되는 문제가 발생 할 수도 있다.

const dog = new Dog('멍멍이', '멍멍');
dog.say()

