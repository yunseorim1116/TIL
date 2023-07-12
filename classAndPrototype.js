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

const seorim2 = new Person2('seorim')

console.log(seorim2)
seorim2.say()

