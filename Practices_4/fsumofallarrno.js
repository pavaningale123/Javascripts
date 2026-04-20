function findsum(arr){
    let sum=0;

    for (let num of arr)
    {
        sum=num+sum;
    }
    return sum
}
console.log(findsum([1,2,3,4]));