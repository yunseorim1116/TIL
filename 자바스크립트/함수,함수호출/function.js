const add = (a,b) => a+b;

function calculate(func,a,b){
    return func(a,b)
}

console.log(calculate(add,3,5))

//함수를 넣는 것과 함수의 리턴 값을 넣는것은 다르다.

const onClick =()=> {
    return ()=>{console.log('hello')}
}
const onClick2 =()=> ()=> {
    console.log('hello')
}

//온클릭,온클릭 2 함수는 같다.
//함수의 호출을 보면 바로 리턴값으로 대체를 해봐라.
