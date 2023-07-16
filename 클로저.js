// var outer = function(){
//     var a = 1
//     var inner = function(){
//         return ++a
//     }

//     return inner
// }

// const outer2 = outer()
// console.log(outer2())
// console.log(outer2())

  // var counter = (function() {
  //     var privateCounter = 0;
  //     function changeBy(val) {
  //       privateCounter += val;
  //     }
  //     return {
  //       increment: function() {
  //         changeBy(1);
  //       },
  //       decrement: function() {
  //         changeBy(-1);
  //       },
  //       value: function() {
  //         return privateCounter;
  //       }
  //     };
  //   })();

  //   console.log(counter)
  //   counter.increment();//1
  //   counter.increment();//2

  //   console.log(counter.privateCounter)
  //   console.log(counter.value())

  function outer() {
  let outerVariable = 'couter';

  function inner() {
    console.log(outerVariable);
  }

  function changeOuter() {
    outerVariable = 'modified outer'
    console.log('체이지 아우터 ㅅ실행')
  }

  return [inner, changeOuter];
}


const result = outer();
const closure = result[0];
const changeouter = result[1];

closure(); // ‘outer’
changeouter();
closure(); // ‘modified outer’;
