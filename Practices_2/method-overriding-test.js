class Animal
{
    constructor(color)
    {
        this.color=color;
    }
    printcolor()
    {
        console.log(this.color);
    }
}

class dog extends Animal
{
    constructor(color, food)
    {
        super(color);
        this.food=food;
    }
    eating()
    {
        console.log(this.food);
    }
    display()
    {
        this.printcolor();
        this.eating();
    }
}
let demo = new dog('balck','bread');
demo.display()