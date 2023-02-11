

//정수 값을 갖는 리스트를 반복문으로 접근하여 해당 요소마다 3초를 지연시키고 값을 출력하라

const arr = [10, 12, 15, 21];

const test = () => {
      setTimeout(function() {//셋타임아웃 스코프
      console.log('The index of this number is: ' + i);
    }, 3000);
}

  for (var i = 0; i < arr.length; i++) { //반복문의 스코프
    test()
  }

  //3초가 지난 후에 클로저가 실행
  //이는 setTimeout 의 스코프와 for 반복문 안의 스코프가 다르기 때문에 발생하는 현상.
/////////////////////////////////////

const arr2 = [10, 12, 15, 21];

  const test2 = (i) => {
      setTimeout(function() {
      console.log('The index of this number is: ' + i);
    }, 3000);
}

  for (let i = 0; i < arr2.length; i++) {
   test2(i)
  }


  const arr3 = [10, 12, 15, 21];
  for (var i = 0; i < arr3.length; i++) {
    // i 값 을 setTime 함수 안에 전달하여 각 함수 호출마다 올바른 값에 접근하게
    setTimeout(function(i_local) {
      return function() {
        console.log('The index of this number is: ' + i_local);
      }
    }(i), 3000);
  }