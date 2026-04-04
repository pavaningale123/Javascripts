// function student()
// {
// this.name="Pavan"
// }
// let obj1 = new student();
// obj1.age=56;

// console.log(obj1.name,obj1.age);

// let obj2 = new student();
// console.log(obj2.name,obj2.age);
//Pavan 56
//Pavan undefined

// to overcome this we can use prototype

function student()
{
this.name="Pavan"
}
student.prototype.age=45;
let obj1 = new student();
console.log(obj1.name,obj1.age);
let obj2 = new student();
console.log(obj2.name,obj2.age);

