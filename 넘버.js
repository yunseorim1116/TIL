// const maxNum = Number.MAX_SAFE_INTEGER
// console.log(maxNum)

// console.log(maxNum+2)

const maxNum = BigInt(Number.MAX_SAFE_INTEGER)
const bigIngTwo = BigInt(2)
console.log(maxNum + bigIngTwo)

const result = maxNum + bigIngTwo
console.log(result.toString())