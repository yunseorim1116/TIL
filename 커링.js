
// 여러 개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출 될 수 있게 체인 형태로 구성한 함수.

const currying = function(a){
    return function(b){
        return a + b
    }
}

// const result = currying(1)(2)
// console.log(result)
const curryingEx = currying(2)
console.log(curryingEx)
console.log(curryingEx(10))



// 화살표 함수로 변경해보면 이해가 좀 더 쉽다.
const arroutCurrying = a => b => a+b
console.log(arroutCurrying(5)(8))
