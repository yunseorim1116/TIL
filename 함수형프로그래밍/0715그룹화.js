
const investors = [
    { name: "John", age: 35, investment: 5000, returnRate: 0.15 },
    { name: "Alice", age: 42, investment: 8000, returnRate: 0.12 },
    { name: "Bob", age: 28, investment: 3000, returnRate: 0.18 },
    { name: "Carol", age: 55, investment: 10000, returnRate: 0.13 },
    { name: "David", age: 47, investment: 6000, returnRate: 0.11 },
    { name: "Eve", age: 31, investment: 7000, returnRate: 0.16 },
    { name: "Frank", age: 39, investment: 9000, returnRate: 0.19 },
    { name: "Grace", age: 44, investment: 12000, returnRate: 0.14 },
    { name: "Henry", age: 52, investment: 1000, returnRate: 0.17 },
    { name: "Ivy", age: 36, investment: 4000, returnRate: 0.10 },
    { name: "Jane", age: 28, investment: 2000, returnRate: 0.15 },
    { name: "Kate", age: 29, investment: 3000, returnRate: 0.12 },
    { name: "Luke", age: 26, investment: 4000, returnRate: 0.18 },
    { name: "Mark", age: 27, investment: 2500, returnRate: 0.13 },
    { name: "Nancy", age: 25, investment: 1500, returnRate: 0.11 }
  ];

  // 나이대 별 그룹화 함수
function getAgeRange(age) {
  if (age >= 20 && age < 30) {
    return "20s";
  } else if (age >= 30 && age < 40) {
    return "30s";
  } else if (age >= 40 && age < 50) {
    return "40s";
  } else if (age >= 50 && age < 60) {
    return "50s";
  } else {
    return "Unknown";
  }
}


const x = investors.filter(({investment})=> investment > 5000).reduce((arr,curr)=>{
const key = getAgeRange(curr.age)
    if(!arr[key]){
        arr[key]= [{
          ...curr,
          profit: curr.investment * curr.returnRate,
        }]
        return arr
    }else{
    arr[key].push({
          ...curr,
          profit: curr.investment * curr.returnRate,
        })
             return arr
    }
    // return arr
  },{})


  console.log(x)
