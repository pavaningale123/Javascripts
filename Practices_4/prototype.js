// function student()
// {
//     this.name="pavan";
// }
// let obj = new student();
// obj.add="pune"

// console.log(obj.name,obj.add)

// let obj1 =  new student()
// console.log(obj1.name,obj1.add)

function student()
{
    this.name="pavan";
}


student.prototype.add='Pune';


let obj = new student();
console.log(obj.name,obj.add)

let obj1 =  new student()
console.log(obj1.name,obj1.add)





