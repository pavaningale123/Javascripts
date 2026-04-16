let a=112;
 let str=a.toString()
 let rev=str.split('').reverse().join('');

 if (str==rev)
 {
    console.log("number is palindrome : " + a)
 }
 else
 {
     console.log("number is not palindrome: " + a)
 }
