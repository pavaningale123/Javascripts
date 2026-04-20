class student{
    constructor(sname,grade)
    {
        this.sname=sname;
        this.grade=grade;
        
    }
    display()
    {
        console.log(this.sname, this.grade);
    }
}

let obj= new student("pavan",67);
obj.display();