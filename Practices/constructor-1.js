class employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
    getvalue()
    {
        console.log(this.eid,this.ename);
    }
}

let emp = new employee(1,"pavan");
emp.getvalue();