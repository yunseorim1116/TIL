function solution(number, limit, power) {
    var answer = 0;
    const arr = []

    for(let i = 1; i < number + 1; i++){
        let x = getDivisorCount(i);
        if(x > limit)   x= power;
        answer+= x;
    }

    return answer;
}


function getDivisorCount (n){
 let cnt = 0;
    for (let i = 1; i <= Math.sqrt(n); i++)  {
        if (n % i == 0) {
            if (n / i == i)   cnt++;
            else cnt = cnt + 2;
        }
    }
    return cnt;
}

