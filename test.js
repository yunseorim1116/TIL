// // option을 받는게 아니라 fn을 받아보자.
// // 이제 새로운 array를 만든다는 매커니즘은 닫혀있으나 방식에 대해서는 열려있다.
// const array = [1,2,3]

// function map(array, fn) {
//   const result = []
//   for (let i = 0; i < array.length; i++) {
//     result[i] = fn(array[i]) // 내부 값을 외부로 전달하고 결과를 받아서 사용한다.
//   }
//   return result
// }

// // 얼마든지 새로운 기능을 만들어도 map코드에는 영향이 없다.
// const getDoubledArray = (array) => map(array, (x) => x * 10)
// console.dir(getDoubledArray(array))

// const getTripledArray = (array) => map(array, (x) => x * 3)
// const getHalfArray = (array) => map(array, (x) => x / 2)

// function range (start, end){
// const ret = []
// for (let index = 0; index < array.length; index++) {
// ret.push(index)
// }
// return ret
// }

// const array = [1,2,3,4,5,6,7]
// const window = 5
// const indices = range(0, array.length)
// const x = indices.map((i)=>  {
//   console.log(array.slice(i, i + window))
//   return array.slice(i, i + window)
// })
// console.log(x)

const breadObj = { parent : 'parent' }
const croissantObj = { child : 'child' }

croissantObj