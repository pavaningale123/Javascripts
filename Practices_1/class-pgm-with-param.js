class student
{
    setvalue(id,name)
    {
        this.id=id;
        this.name=name;
    }
    getvalue()
    {
        console.log(this.id,this.name)
    }
}
let obj=new student();
obj.setvalue(101,"pavan");
obj.getvalue();