function isprimeno(num)
{
    for ( let i=2; i<num ; i++)
    {
        if(num % 2 == 0) return false;
    }
    return true
}
console.log(isprimeno(7));