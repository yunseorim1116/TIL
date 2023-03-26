 const regex =  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
 console.log(regex)
 const email ='tjfla2@naver.com'

 const arr = email.match(regex);
 console.log(arr[0])
 console.log(arr.length)
