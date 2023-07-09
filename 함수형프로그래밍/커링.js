
// 여러 개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출 될 수 있게 체인 형태로 구성한 함수.

const currying = function(a){
    return function(b){
        return a + b
    }
}

// const result = currying(1)(2)
// console.log(result)
const curryingEx = currying(2)


// 화살표 함수로 변경해보면 이해가 좀 더 쉽다.
const arroutCurrying = a => b => a+b


// reduce를 사용하여 pipe 함수 구현하기. 그리고 코드를 더욱 좋게 리팩토링하기


const todoList = [{
   'done': true,
   'text': '오늘 할일'
},
{
   'done': false,
	 'text': '내일 할일'
},
{
   'done': true,
	 'text': '모레 할일'
}]



// const pipe = (...functions) => (value) => {
//     return functions.reduce((currentValue, currentFunc) => {
//       return currentFunc(currentValue);
//      }, value);
//   };

// function filterList(list) {
//     return list.filter((item) => item.done === true);
// }

// function printList(list) {
//   list.forEach((item) => {
//     // console.log(item);
//   });
// }

// pipe(filterList,printList)(todoList);


// //커링함수 만들어보기 연습

// function curry (func){
//   return function(a){
//  return function(b){
//     return func(a,b)
//   }
//   }
// }

// const curryTest  = curry(plusNumber)(2)(3)
// // console.log(curryTest)

// function plusNumber (a,b) {
//   return a + b
// }


// //curryR 함수 만들기
// function curryR (func) {
//   return function(a,b) {
//     return arguments.length === 2 ? func(a,b) :
//       function(b){  return func(b,a) }
//   }

// }
// // console.log(curryR)


const pipe = (...functions) => (value) => {
    return functions.reduce((currentValue, currentFunc) => currentFunc(currentValue), value);
  };



//   function filterList(condition) {
//     return function(list){
//        return list.filter((item) => item.done === condition)
//       }
// }


const filterList = (condition) => (list) => list.filter((item) => item.done === condition)


// function printList(list) {
//   return function () {
//     list.forEach((item) => {
//       console.log(item);
//     });
//   };
// }

const printList = (list) => () => list.forEach((item) => console.log(item));




const printDoneTrueList = pipe(
  filterList(true),
  printList
)(todoList);


printDoneTrueList()