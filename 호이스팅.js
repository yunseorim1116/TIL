var funcs = [];

// var 스코프 문제

for (var index = 0; index < 3; index++) {
  funcs[index] = function () {
    return index;
  };
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}

//es6로 해결
const funcs = [];

for (let index = 0; index < 3; index++) {
  funcs[index] = function () {
    return index;
  };
}

for (let index = 0; index < funcs.length; index++) {
  console.log(funcs[index]());
}
