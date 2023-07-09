

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
	 'text': '모레 할일'
}]


//파이프 함수를 변수에 할당해서 실행시킬 때

const pipe = (...functions) => (value) => {
    return functions.reduce((currentValue, currentFunc) => currentFunc(currentValue), value);
  };

function pipe (...functions) {
   return function(value){
        return functions.reduce((currentValue, currentFunc) => currentFunc(currentValue), value);
    }
  }


function filterList(condition) {
    return function(list){
       return list.filter((item) => item.done === condition)
      }
}


// const filterList = (condition) => (list) => list.filter((item) => item.done === condition)


function printList(list) {

  return function(){
 list.forEach((item) => {
      console.log(item);
    });
  }

}

// const printList = (list) => () => list.forEach((item) => console.log(item));


const printDoneTrueList = pipe(
  filterList(true),
  printList
)(todoList);





//pipe 함수를 변수에 할당하지 않고 바로 실행할 때


const pipe2 = (...functions) =>(value) =>  functions.reduce((currentValue, currentFunc) =>  currentFunc(currentValue), value);


function filterList2(filterFunction) {
  return function (list) {
    return list.filter(filterFunction);
  };
}

function printList2(list) {
  list.forEach((item) => {
    console.log(item);
  });
}

pipe2(
  filterList2((item) => item.done === true),
  printList2
)(todoList);