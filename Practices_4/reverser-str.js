function reverse(str){
    let reversestr='';
    for (let i=str.length-1; i>=0;i--)
    {
        reversestr=reversestr + str[i]
    }
    return reversestr
}
console.log(reverse("Pavan"))