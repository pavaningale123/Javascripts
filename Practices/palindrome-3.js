s='madamq';
let rev="";
for (let i=s.length-1; i>=0;i--)
{
    rev=rev+s[i]
}
if (rev==s)
{
    console.log('palindrome')
}
else
{
    console.log('not palindrome')
}