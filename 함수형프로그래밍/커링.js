
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




// 커링함수 만들어보기 연습

function curry (func){
  return function(a){
 return function(b){
    return func(a,b)
  }
  }
}

const curryTest  = curry(plusNumber)(2)(3)
// console.log(curryTest)

function plusNumber (a,b) {
  return a + b
}


//curryR 함수 만들기
function curryR (func) {
  return function(a,b) {
    return arguments.length === 2 ? func(a,b) :
      function(b){  return func(b,a) }
  }

}
// console.log(curryR)


//커링과 실행컨텍스트, 클로저

function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}

const x = add(1)

// 결과적으로 **const x = add(1)** 함수 실행 이후에는 클로저 함수가 **x** 변수에 할당되어 있습니다.

// 이 클로저는 외부 환경(외부 스코프)에서의 **add** 함수의 실행 컨텍스트와 관련된 변수들을 참조합니다.

// - 이 경우에는 **x 매개변수의 값인 1이 외부 환경에서 유지**됩니다.
// - **y**와 **z** 매개변수는 아직 전달되지 않았으므로 나중에 전달될 때까지 유지됩니다.