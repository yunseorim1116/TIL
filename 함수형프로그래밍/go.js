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

function filterList(condition) {
   return function(list) {
     return list.filter(condition)
   }
}

const filterList = (condition) => (list) => list.filter(condition)
const printList = (list) => list.forEach((item) => console.log(item));

go (todoList,filterList((item) => item.done === true), printList)
// go(todoList,1)
