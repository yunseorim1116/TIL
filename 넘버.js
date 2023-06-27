// const maxNum = Number.MAX_SAFE_INTEGER
// console.log(maxNum)

// console.log(maxNum+2)

const maxNum = BigInt(Number.MAX_SAFE_INTEGER)
const bigIngTwo = BigInt(2)
console.log(maxNum + bigIngTwo)

const result = maxNum + bigIngTwo
console.log(result.toString())

// 숫자를 문자열로 변환
const number = 42;
const strNumber = number.toString(); // "42"

// 문자열로 된 숫자를 숫자로 변환
const strNumber = "3.14";
const parsedNumber = parseFloat(strNumber); // 3.14

// 문자열로 된 숫자 간의 연산
const num1 = "10";
const num2 = "20";
const sum = parseInt(num1) + parseInt(num2); // 30

// 문자열로 된 숫자의 비교
const strNumber1 = "100";
const strNumber2 = "200";
const comparison = strNumber1.localeCompare(strNumber2); // -1 (strNumber1 < strNumber2)
