// var outer = function(){
//     var a = 1
//     var inner = function(){
//         return ++a
//     }

//     return inner
// }

// const outer2 = outer()
// console.log(outer2())
// console.log(outer2())

  var counter = (function() {
      var privateCounter = 0;
      function changeBy(val) {
        privateCounter += val;
      }
      return {
        increment: function() {
          changeBy(1);
        },
        decrement: function() {
          changeBy(-1);
        },
        value: function() {
          return privateCounter;
        }
      };
    })();

    console.log(counter)
    counter.increment();//1
    counter.increment();//2

    console.log(counter.privateCounter)
    console.log(counter.value())