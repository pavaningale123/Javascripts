// function ispalindrome(str){
//     let reverse=str.split('').reverse().join('');
//     return str == reverse
// }
// console.log(ispalindrome("madam"));

function ispalindrome(str){
    let len =str.lenght;
    for (let i=0; i<len/2 ; i++)
    {
        if (str[i] !== str[len -1-i])
        {
            return false;
        }
    }
    return true;
}
console.log(ispalindrome("hello"));