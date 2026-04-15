function ispalindrome(str){
    let reverse=[];

    for(let i=str.length-1;i>=0;i--){
        reverse=reverse+str[i];
    }
    return str==reverse;
}
console.log(ispalindrome("111"))