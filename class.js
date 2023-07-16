class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

class Dog extends Animal {
  constructor(name) {
    super('개', name);
  }
}

const x = new Dog('afsd','a뀽')
console.dir(x)
dog.say();
cat.say();