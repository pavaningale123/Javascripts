class Animal
{
    constructor(colour)
    {
        this.colour=colour;
    }
    printcolour()
    {
        console.log(this.colour)
    }
}
class Dog extends Animal
{
     constructor(colour,food)
    {
        super(colour);
        this.food=food;
    }
    eating()
    {
        console.log("Eating : ",this.food)
    }
    disply()
    {
        this.printcolour();
        this.eating();
    }
}
let obj=new Dog("Black","Bread")
obj.disply();

