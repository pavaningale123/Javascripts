function findduplicate(arr){

    let duplicate=[];

    for (let i=0; i<arr.length;i++)
    {
        if (arr.indexOf(arr[i]) !==i)
        {
            duplicate.push(arr[i])
        }
    }
    return duplicate
}

let arr=[1,2,3,1,3,3,3,3]
console.log(findduplicate(arr))