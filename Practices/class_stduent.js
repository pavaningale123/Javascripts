class student{

    setvalue()//method
    {
        this.sname="Pavan";// this dot we used for globally used variable 
        this.slastname="Ingale";
        this.sclass=10
    }
    getvalue()//metod
    {
        console.log(this.sname);//for printing the output
        console.log(this.slastname);
        console.log(this.sclass);
    }

}

let info= new student(); // object create for accesiing the value
info.setvalue();
info.getvalue();