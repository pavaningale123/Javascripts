class student
{
    #name;// private variable
    setStudent(name)//setter 
    {
        this.#name=name;
    }
    getName()//getter
    {
        return this.#name;
    }
}

let demo = new student();
demo.setStudent("pavan")
console.log(demo.getName());
console.log(demo.name); // ❌ Not allowed undefined