const arr1=[1,2,3]
const arr2=[4,5,6]

let arr=arr1.concat(arr2)
console.log(arr)

let merg=[];

for (let num of arr1)
{
    merg.push(num)
}
for (num of arr2)
{
    merg.push(num)
}
console.log(merg)