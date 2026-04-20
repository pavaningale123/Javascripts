function palidromNo(num){
    let original=num;
    let reverno=0;

    while(num >0)
    {
        let digit=num %10 ;
        reverno=reverno*10+digit;
        num=Math.floor(num/10);
    }

    return reverno==original;
}

console.log(palidromNo(121))