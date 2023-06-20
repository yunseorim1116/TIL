const copyDeepObject = (target) => {
let resultObj = {};
  if (typeof target === 'object' && target !== null) {
    for (let x in target) {
      resultObj[x] = copyDeepObject(target[x]);
    }
  } else {
  resultObj = target;
}
return resultObj;
}

// let object = {
//   a: new Date(),
//   b: ‘a’,
//   c: //regex
// }

let copiedObject = copyDeepObject(object);
