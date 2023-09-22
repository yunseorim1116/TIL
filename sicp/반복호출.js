function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}

function is_good_enough(guess, x) {
  return Math.abs(guess * guess - x) < 0.001; // square 함수를 수정
}

function average(x, y) {
  return (x + y) / 2;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function sqrt_iter(guess, x) {
  return conditional(
    is_good_enough(guess, x),
    guess,
    sqrt_iter(improve(guess, x), x)
  );
}

console.log(sqrt_iter(3, 9)); // 예제로 1.0을 초기 추측값으로 사용
