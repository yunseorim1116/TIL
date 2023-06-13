function second() {
    setTimeout(function(){
        console.log('2+2')
    }, 2000)
}

function first() {
    console.log('1+1');
    second();
    console.log('3+3');
}

console.log('teest')

first();

console.log('teest22')