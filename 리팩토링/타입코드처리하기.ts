enum Input {
  RIGHT,
  LEFT,
  UP,
  DOWn,
}

interface Input2 {
  isRight(): boolean;
  isLeft(): boolean;
  isUp(): boolean;
  isDown(): boolean;
}

class Right implements Input2 {
  isRight() {
    return true;
  }
  isLeft() {
    return true;
  }
  isUp() {
    return true;
  }
  isDown() {
    return true;
  }
}

function handleInput(input: Input2) {
  if (input.isLeft()) {
  }
}
