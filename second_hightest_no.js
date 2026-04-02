let num=1238;
let arr=num.toString().split('').map(Number);
arr.sort((a,b)=>b-a);
console.log(arr[1]);