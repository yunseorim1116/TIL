function f() {
  var x = {};
  var y = {};
  x.a = y;         // x는 y를 참조합니다.
  y.a = x;         // y는 x를 참조합니다.

  console.log(x,y)
  return "azerty";
}

f();
