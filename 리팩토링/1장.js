//읽기 힘든 코드의 예

function checkValue(str) {
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

function isTrue(bool) {
  if (bool) {
    return true;
  } else {
    return false;
  }
}
