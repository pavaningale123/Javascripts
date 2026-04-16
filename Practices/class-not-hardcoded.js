class student
{
    setvalue(sid,sname)
    {
        this.sid=sid;
        this.sname=sname;
    }
    getvalue()
    {
        console.log(this.sid,this.sname)
    }
}

let info = new student();
info.setvalue(101,"pavan");
info.getvalue();