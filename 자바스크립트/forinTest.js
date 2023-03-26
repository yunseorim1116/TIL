const arr = ['a','b','v'];

for (const i in arr) {
    console.log('i' + i)
console.log(arr[i])
}

//물론 배열에서 for in 을 사용해도 정상적으로 출력이 가능하지만.. 
//공식문서에는,
//'Note: for...in은 인덱스의 순서가 중요한 Array에서 반복을 위해 사용할 수 없습니다.'
//라고 나와있다.

// javascript의 for/in 문은 임의의 순서로 배열을 반복하는 특성을 가지고 있기 때문이다.

console.log(arr)