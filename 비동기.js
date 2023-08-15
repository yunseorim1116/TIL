// function second() {
//     setTimeout(function(){
//         console.log('2+2')
//     }, 2000)
// }

// function first() {
//     console.log('1+1');
//     second();
//     console.log('3+3');
// }

// console.log('teest')

// first();

// console.log('teest22')

// const a = function (){
//     console.log('1'
//     )
// }

// setTimeout(function(){
//     console.log('2')
// },1000)

// a()

 new Promise((resolve)=> {
    let data = 1
    setTimeout(()=>{
    data = 100;
      resolve(data);
    },100)



}).then((x)=>{
console.log(x)
})


// b.then((x)=>{
//     console.log(x)
// })