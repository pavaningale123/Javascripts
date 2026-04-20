function getvowels(str){
    let vowles='aeiou';
    let result='';

    for (let char of str.toLowerCase())
    {
        if(vowles.includes(char))
        {
            result=result+char;
        }
    }
    return result;
}

console.log(getvowels("pavan Mahadeo Ingale "))