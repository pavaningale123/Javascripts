//normal constructor


class student
{
    constructor()
    {
        console.log("Pavan")
    }
}
let info = new student();

// parameterized constructor

class person
{
    constructor(name)
    {
        console.log(name)
    }
}

let infor=new person("Pavan Ingale");

// another example

class students
{
constructor(sid,sname,sgrade)
{
    this.sid=sid;
    this.sname=sname;
    this.sgrade=sgrade;    
}
// constructor(sclass)
// {
//     this.sclass=sclass;
       
// }
display()
{
    console.log(this.sid,this.sname,this.sgrade)
}
}
let informa=new students(1011,"pavan","A",10)
informa.display();