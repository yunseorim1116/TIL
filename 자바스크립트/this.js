let user = {
  name: "John",
  age: 30
};


user.sayHi = function() {
console.log('안뇽하세요')
};

user.a = () => console.log('?')

user.sayHi(); // 안녕하세요!
user.a();

user = {
  sayHi: function(){
    console.log('^ㅇ^')
  }
}

let test =''
const user3 = {
   userName :'서리미',
  sayHi(){
    console.log('^ㅇ^')
    console.log(this.userName)
    console.log(this)
  },
  test:()=>{ //화살표 함수로 넣으면 전역으로 드루가
    console.log('a!')
  }
}

user3.sayHi();
user3.test();

let user2 = {
  name: "John",
  age: 30,
  sayHi() {
    // 'this'는 '현재 객체'를 나타냅니다.
  console.log(this.name)
  }

};

function b (){
  console.log(this)
}

const ab = () =>{
  console.log(this)
}
console.log(b)
console.log(ab)
// user2.sayHi(); // John
