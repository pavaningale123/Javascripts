// write pgm of addition of two number by using paramaterize method in object
let add={
    a:10,
    b:100,
    addition:function(a,b)
    {
        console.log(this.a+this.b)// current obj la refer karato manun this waparale aahe
    }
};
add.addition();