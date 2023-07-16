function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

function Dog(name,sound) {
  Animal.call(this, '개', name,sound);
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