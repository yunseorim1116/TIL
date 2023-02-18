function test() {
    const promiseFunction = () =>
        new Promise((resolve) => setTimeout(() => resolve("result"), 1000));

    let array = Array(10).fill(0);
  	// (1) test를 async로 감싸는 대신, for문을 async 즉시실행함수로 감싸도 된다
    (async () => {
      	// (2) forEach 대신 for ... of를 사용한다
        for (let element of array) {
            const result = await promiseFunction();
            console.log(result);
        }
    })();
}

test();

//////////////////

// (1) test 앞에 async 키워드를 붙인다
async function test() {
    const promiseFunction = () =>
        new Promise((resolve) => setTimeout(() => resolve("result"), 1000));

    let arr = Array(10).fill(0);
  	// (2) forEach 대신 for 을 사용한다
    for (let i = 0; i < arr.length; i++) {
        const result = await promiseFunction();
        console.log(result);
    }
}

test();