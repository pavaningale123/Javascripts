class parent{
    greet()
    {
        console.log("Parents")
    }
}
class child extends parent
{
    greet()
    {
        super.greet();
        console.log("Child")
    }
}
let obj= new child();
obj.greet();