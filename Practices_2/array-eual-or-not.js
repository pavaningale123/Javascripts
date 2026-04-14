function isequalarray(arr1,arr2)
{
    //check length
    if (arr1.length !== arr2.length)
    {
        return false;
    }
    // check each element 
    for (let i=0; i<arr1.length;i++)
    {
        if (arr1[i]!==arr2[i])
        {
            return false;
        }
    }
    //if all same
    return true;
}

console.log(isequalarray([1,2,3],[1,5,3]))