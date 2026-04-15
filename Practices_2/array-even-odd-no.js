const arr=[1,4,6,9,8,12]
let even=[];
let odd=[];
for (let num of arr)
{
    if (num % 2 == 0)
    {
      even.push(num)
    }
    else{
       odd.push(num)
    }
}
console.log("Even numbers list are ",even)