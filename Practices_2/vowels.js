const str="Hello world"
let vowels='aeiou';
let result="";

for (let char of str.toLowerCase())
{
    if (vowels.includes(char))
    {
        result=result+char;
    }
}

console.log(result)