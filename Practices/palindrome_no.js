no=121
let str=no.toString();
let rev="";

for ( let i=str.length -1; i>=0; i--)
{
    rev=rev + str[i]
}

if (str==rev)
{
    console.log("Palindrome number: "+ no)
}
else
{
    console.log("not a Palindrome number: " +no)
}