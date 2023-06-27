
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
function a(){
  console.log(this)
const b = () =>  {
    console.log(this)
    console.log('a')

}
b()

}

const obj = {
  name: 'John',
  regularFunction: a
};

obj.regularFunction()

function regularFunction() {
  console.log(this); // this는 regularFunction의 this
  const arrowFunction = () => {
    console.log(this); // this는 regularFunction의 this와 동일
  };
  arrowFunction();
}

const obj = {
  name: 'John',
  regularFunction: regularFunction
};

obj.regularFunction();