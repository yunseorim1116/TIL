const splitInput = [
  '..##.......', '#...#...#..',
  '.#....#..#.', '..#.#...#.#',
  '.#...##..#.', '..#.##.....',
  '.#.#.#....#', '.#........#',
  '#.##...#...', '#...##....#',
  '.#..#...#.#'
]

const delta1 = [3, 1]
const isTree = (input) => {
  return input === '#'
}

const getStringAtPositionByDelta = (arr, [deltaX, deltaY]) => {
  return arr.map((string, index) =>  string[(deltaX * index) % string.length]);
};
const x = getStringAtPositionByDelta(splitInput, delta1)
console.log(getStringAtPositionByDelta(splitInput, delta1).filter(isTree).length)

//한결님 코드를 분석하고 해석, 체이닝 메소드 활용해보기.