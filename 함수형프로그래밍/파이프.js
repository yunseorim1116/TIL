

//데이터
const todoList = [{
   'done': true,
   'text': '오늘 할일'
},
{
   'done': false,
	 'text': '내일 할일'
},
{
   'done': true,
	 'text': 'test Text'
},
{
   'done': true,
	 'text': '모레 할일'
}]

// const go = (first,...funcs) => funcs.reduce((acc,curr)=> curr(acc), first)

function go (first, ...funcs) {
   if (arguments.length < 2) {
    throw new Error("인자를 제대로 넣어주세요.");
  }

  try {
 return funcs.reduce((acc,curr)=> curr(acc), first)
  } catch (error) {
   console.log('error' + (error))
   console.log('인자로 함수를 넣어주세요.')
  }

}

//파이프 함수를 변수에 할당해서 실행시킬 때

function pipe (...functions) {
   return function(value){
        return go(value,...functions)
    }
  }


// const pipe = (...functions) => (value) => {
//     return functions.reduce((currentValue, currentFunc) => currentFunc(currentValue), value);
//   };



function filterList(list) {
  return list.filter((item) => item.done === true)
}


// const filterList = (condition) => (list) => list.filter((item) => item.done === condition)


function printList(list) {
 list.forEach((item) => {
      console.log(item);
    });
}


// const printList = (list) => () => list.forEach((item) => console.log(item));


const printDoneTrueList = pipe(filterList, printList)
printDoneTrueList(todoList)


//pipe 함수를 변수에 할당하지 않고 바로 실행할 때


const pipe2 = (...functions) => (value) =>  functions.reduce((currentValue, currentFunc) =>  currentFunc(currentValue), value);


function filterList2(list) {
   return list.filter((item) => item.done === true);
}

function printList2(list) {
  list.forEach((item) => {
    console.log(item);
  });
}

// pipe2(
//   filterList2,
//   printList2
// )(todoList);