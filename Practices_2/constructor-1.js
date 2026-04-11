class student
{
    constructor(sid,sname,sgrade,sremark)
    {
        this.sid=sid;
        this.sname=sname;
        this.sgrade=sgrade;
        this.sremark=sremark;
    }
    display()
    {
        console.log(this.sid,this.sname,this.sgrade,this.sremark)
    }
}
let demo =new student(101,'pavan',"A","First Class");
demo.display();