const myArray = [1, 2, 3];
myArray.myProperty = 'hello';
myArray.myMethod = function() { console.log('world'); };




for (let prop in myArray) {
  console.log(prop + ': ' + myArray[prop]);
}

myArray.forEach((el)=>{
console.log(el)
})

const parent = {
  a: 1,
  b: 2,
  c: 3
};

const child = Object.create(parent);
child.d = 4;

console.log(child)

function printProperties(obj) {
  for (let prop in obj) {
    console.log(prop);
  }
}

printProperties(child);

