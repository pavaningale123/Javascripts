function findmissingno(arr){
    for (let i=1; i<=10 ; i++)
    {
        if (!arr.includes(i))
        {
            console.log(i)
        }
    }
}
findmissingno([1,3,5,7,8,10])