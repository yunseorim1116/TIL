function c (){ console.log('c');
 return 1 }

function a (){
    console.log('?');
    function b(){
        console.log('a')
        c();
    }
    // c()
    // return b()

}

a()