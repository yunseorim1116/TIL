const person = {
  name: 'Lee',
};

// Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);

Object.prototype.sayHi = function(){
    console.log(this.name)
}

person.prototype; // Hi undefined