class test
{
    static a=10;
    b=20;
    static m1()
    {
        console.log("m1 is the static method");
    }
    m2()
    {
        console.log("m2 is the static method");
    }
}

// for static

console.log(test.a);
test.m1();

let demo =new test();
console.log(demo.b);
demo.m2();