function createLargeClosure() {
  const largeObj = {
    a: 1,
    b: 2,
    str: new Array(1000000).join("x"),
  };

  const lc = function largeClosure() {
    return largeObj;
  };

  return lc;
}

const memo = new WeakMap();

function memoize(obj) {
  if (memo.has(obj)) {
    console.log("Get cached result");
    return memo.get(obj);
  }

  const compute = obj.a + obj.b;
  console.log("Set computed result to caching map");
  memo.set(obj, compute);

  return compute;
}

function start() {
  const lcObj = createLargeClosure();

  const timer = setInterval(() => {
    memoize(lcObj());
  }, 1000);

  setTimeout(function () {
    clearInterval(timer);
  }, 5001);
}
