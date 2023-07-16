
function cleanDishes(){
    for (let i = 0; i < dishes.length; i++) {
        const item = dishes[i];
        wash(item)
        dry(item)
        putAway(item)
    }
}
//1. 함수 이름에 있는 암묵적 인자
//2. 지역 변수 이름이 구체적이다.




// STEP1 : 분리작업
function clean(item) { //반복문 안에 있는 함수 분리
        wash(item)
        dry(item)
        putAway(item)
}


cleanArray(dishes) //함수에 인자로 넘긴다.

function operateOnArray(array){// 함수 이름을 일반적인 이름으로 변경한다.
for (let i = 0; i < array.length; i++) {
    const item = array[i];
    clean(item)
}
}




// STEP2 : 함수도 인자로 받는다.
function operateOnArray(array, f){
for (let i = 0; i < array.length; i++) {
    const item = array[i];
    f(item)
}
}

// STEP3 : forEach함수 만들기
function forEach(array, f) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        f(item)
    }
}

forEach(dishes, function(dish){
wash(dish)
cook(dish)
eat(dish)
})

// STEP4 : 원래 코드와 비교

//원본 코드
function cleanDishes(){
    for (let i = 0; i < dishes.length; i++) {
        const item = dishes[i];
        wash(item)
        dry(item)
        putAway(item)
    }
}


// 함수형 개선 코드
forEach(dishes, function(dish){
wash(dish)
cook(dish)
eat(dish)
})