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




// 1. window 메소드 (setTimeout, setInterval) 에 전달할 내부 함수가 지역 변수를 참조하고 있는것
// 2. 별도의 외부 객체인 dom 메소드 addEventLister에 등록할 함수 내부에서 지역 변수를 참조하고 있는것

// 두 상황 모두 '지역변수를 참조하는' 내부 함수(전달 될 함수) 를 외부(setTimeout, addEventLister) 에 전달했기 때문에 클로저이다.

//2번 예시
(function() {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';

  button.addEventListener('click', function() {
    console.log(count++);
    console.log('click');
  });

  document.body.appendChild(button);
})();