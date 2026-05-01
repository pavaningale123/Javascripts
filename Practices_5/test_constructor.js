class student 
{
    constructor(sname,sgrade)
    {
        this.sname=sname;
        this.sgrade=sgrade;
    }
    display()
    {
        console.log(this.sname,this.sgrade);
        }
}

let demo = new student('paven',34)
demo.display();