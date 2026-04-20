class parent
{
    greet()
    {
        console.log("parent menthod")
    }

}
class child extends parent
{
    greet()
    {
        super.greet();
        console.log("child method")
    }
}

let obj = new child();
obj.greet();