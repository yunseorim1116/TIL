
// // console.log(this)

// // var a= 1
// // console.log(this.a)

// var a = function(a){
//     console.log(this)
// }
// a(1)

var numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//   console.log(number)
//   console.log(this)
// });

// function test() {
//     console.log(this)
//  console.log('ds')
// numbers.forEach((x)=>{console.log(this)});
// }

// test()
// function a(){
//   console.log(this)
// const b = () =>  {
//     console.log(this)
//     console.log('a')

// }
// b()

// }

// const obj = {
//   name: 'John',
//   regularFunction: a
// };

// obj.regularFunction()

// function regularFunction() {
//   console.log(this); // this는 regularFunction의 this
//   const arrowFunction = () => {
//     console.log(this); // this는 regularFunction의 this와 동일
//   };
//   arrowFunction();
// }

// const obj = {
//   name: 'John',
//   regularFunction: regularFunction
// };

// obj.regularFunction();

// var foo = (() => this);
// // var obj = {func: foo};

// console.log(foo())
// // console.log(obj.func())

// var obj = {
//   bar: function() {
//     console.log('1')
//     console.log(this)
//     var x = (() => this);
//     return x;
//   },

//   a : function(){
//     console.log(this)
//   return ()=>{
//     console.log(this)
//     }

//   }
// };

// console.log(obj.a())

var obj = {
  bar: function() {
    var x = (() => this);
    return x;
  }
};

// obj의 메소드로써 bar를 호출하고, this를 obj로 설정
// 반환된 함수로의 참조를 fn에 할당
// var fn = obj.bar();
// // console.log(fn)

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   // this는 상위 스코프인 prefixArray 메소드 내의 this를 가리킨다.
//   console.log(this)
//   return arr.map(x => `${this.prefix}  ${x}`);
// };

// const pre = new Prefixer('Hi');
// // console.log(pre.prefixArray())
// console.log(pre.prefixArray(['Lee', 'Kim']));

// 1. 이것은 객체의 메소드
var man = {
    name: 'john',
    // 2. 객체의 메소드 안에서 함수를 선언하는 것이니까 내부 함수
    hello: function() {
        function getName() {
            // 3. 여기서 this가 무엇을 가리키고 있을까?
            console.log(this.name)
            return this.name;
        }
        // 4. 이번에는 call()을 통해 현재 문맥에서의 this(man 객체)를 바인딩해주었다
        console.log(this)
        console.log('hello ' + getName.call(this));
    }
}

// 이번에는 메소드를 실행시키면 john가 뜬다!
// this가 man 객체로 바인딩 된 것을 확인할 수 있다
man.hello();




//bind Test

let person1 = {
    name: 'Jo'
};

let person2 = {
    name: 'Kim',
    study: function() {
        console.log(this.name + '이/가 공부를 하고 있습니다.');
    }
};

person2.study(); // Kim이/가 공부를 하고 있습니다.

// bind()
let student = person2.study.bind(person1);

student(); // Jo이/가 공부를 하고 있습니다.