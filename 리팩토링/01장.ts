//1. 읽기 힘든 코드의 예

function checkValue(str: boolean) {
  // 바람직하지 않은 메서드명 : 매개변수 타입이 불리언인데 매개변수명이 str이다.

  //값 체크
  if (str !== false) {
    //이중 부정은 읽기 어렵다.
    return true;
  } else {
    return str;
  }
}

//읽기 쉽게 작성된 동일한 코드

function isTrue(bool: boolean) {
  if (bool) {
    return true;
  } else {
    return false;
  }
}

//2. 상속 말고 컴포지션을 사용하라.

//상속을 사용
interface Bird {
  hasBeak(): boolean;
  canFly(): boolean;
  canSwim(): boolean;
}

class ComonBird implements Bird {
  hasBeak() {
    return true;
  }
  canFly() {
    return true;
  }
  canSwim() {
    return true;
  }
}

class Penguin extends ComonBird {
  canFly() {
    return false;
  }
}

//2. 컴포지션을 사용

interface Bird2 {
  hasBeak(): boolean;
  canFly(): boolean;
  canSwim(): boolean;
}

class ComonBird2 implements Bird2 {
  hasBeak() {
    return true;
  }
  canFly() {
    return true;
  }
  canSwim() {
    return true;
  }
}

class Penguin2 implements Bird2 {
  private bird = new ComonBird2();
  hasBeak() {
    return this.bird.hasBeak();
  }

  canFly() {
    return false;
  }
}

// 컴포지션을 중심으로 만들엊신 시스템을 사용하면 다른 방식보다 더 깔끔하게 코드를 결합하고 재사용 할 수 있습니다.
