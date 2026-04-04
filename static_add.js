class addition
{
    static a = 10;
    static b = 20;
    static add()
    {
       let result = this.a + this.b;
       console.log(result);
    }
}
addition.add();
console.log(addition.a);
console.log(addition.b);
