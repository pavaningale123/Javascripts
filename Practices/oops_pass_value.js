class student
{
    setvalue(sname)
    {
        this.sname=sname;
    }
    getvalue()
    {
        console.log(this.sname)
    }
}

let obj = new student();
obj.setvalue("Pavan");
obj.getvalue();