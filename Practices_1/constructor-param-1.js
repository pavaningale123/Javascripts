class employee{
    constructor(eid,ename,esal)
    {
        this.eid=eid;
        this.ename=ename;
        this.esal=esal;
    }
    getvalue()
    {
        console.log(this.eid,this.ename,this.esal)
    }
}

let obj = new employee(10101,"Pava",2700000);
obj.getvalue();