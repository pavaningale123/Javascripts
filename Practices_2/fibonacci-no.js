function fabno(num){
    let a=0,b=1;

    for (let i=0; i<num; i++){
        console.log(a);
        let next=a+b;
        a=b;
        b=next;
    }
}
fabno(7);