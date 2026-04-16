class student
{
    #name;
    setsetudent(name)
    {
        this.#name=name;
    }
    getname()
    {
        return this.#name;

    }
}

let demo = new student();
demo.setsetudent("Pavan");
console.log(demo.getname());