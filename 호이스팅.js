// function a() {
//  var b;
// console.log(b); // (1)
// var b = 'bbb'; // 수집 대상 1(변수 선언)
// // function b() { }
// }
// a();

// var a = 1
// var outer = function(){
// var a=2
// console.log(a)
// }
// outer()
// console.log(a)



// var b ='1'
// console.log(window.b)
// console.log(this.b)

const c = function d (){
    // console.log('1')
    d()
}
// console.log(c())

var sum = function(a,b){
    return a+b
}

console.log(sum(2,3))

var sum = function(a,b){
  return a*b
}


console.log(sum(2,3))