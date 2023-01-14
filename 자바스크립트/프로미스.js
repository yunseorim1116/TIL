console.log('test')

setTimeout(()=>{
console.log('a')
},0)


setTimeout(()=>{
    console.log('b')
},0)

setTimeout(()=>{
    console.log('c')
},0)

//한번 비동기는 영원한 비동기
//비동기는 동시의 문제가 아니다, 순서의 문제다.
//promise, process.nexttick만이 micro이고 micro는 우선순위가 높다.

//실행은 바로,결과값은 나중에
//결과 값 사용은 then이나 await 붙였을때 나중에..
//결과 값 사용은 더 나중에...
