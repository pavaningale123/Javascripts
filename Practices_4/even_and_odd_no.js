function countno(num){
    let even_count=0;
    let odd_count=0;

    while (num>0)
    {
        let digit=num%10; // for taking last number

        if (digit%2===0){
            even_count++;
        }
        else{
            odd_count++
        }
        num=Math.floor(num/10);// remove last digit 
    }
    console.log("Even digits:", even_count);
    console.log("Odd digits:", odd_count);
}
countno(123)