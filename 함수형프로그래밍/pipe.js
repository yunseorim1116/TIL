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


function pipe(...functions) {
  return function(...args) {
    return functions.slice(1).reduce((acc, func) =>(func(acc)) , functions[0](...args));
  }
}

function printTodoList(todoList) {
  todoList.forEach((todo) => {
    console.log(todo);
  });
};

function filterTodoList(todoList, condition) {
  return todoList.filter(condition);
}


 const filter = pipe(filterTodoList, printTodoList)
 filter(todoList,(item) => item.done === true)
