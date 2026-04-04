class employee
{
    constructor(eid)
    {
        this.eid=eid;
    }
}

employee.prototype.ename="Pavan";

employee.prototype.display=function()
{
    console.log(this.eid,this.ename);
}

let emp1 = new employee(101);
emp1.display();