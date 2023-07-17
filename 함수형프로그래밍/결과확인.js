function range (start, end){
const ret = []
for (let index = 0; index < array.length; index++) {
ret.push(index)
}
return ret
}

const array = [1,2,3,4,5,6,7]
const window = 5
const indices = range(0, array.length)
const x = indices.map((i)=>  {
  console.log(array.slice(i, i + window))
  return array.slice(i, i + window)
})
console.log(x)