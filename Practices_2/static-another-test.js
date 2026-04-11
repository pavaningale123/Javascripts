class Test
{
    static a=10;
            b=20;
    static m1()
    {
        console.log("m1 is the static method")
    }
    m2()
    {
        console.log("m2 is the non-static method")
    }
}
console.log(Test.a);
Test.m1();

let demo = new Test();
demo.m2();
console.log(demo.b)
