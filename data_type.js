// Primitive data type- nnssbbu -- Number Null Symbol String Biginit Boolean, Undefined
let x=100;
console.log("x: ",typeof(x));// number

let y=100.8998;
console.log("y: ",typeof(y)); // number

let z="Pavan";
console.log("z: ",typeof(z)); // string

let flag=true;
console.log("z: ",typeof(flag)); // boolean

let status=null;
console.log("flag: ",typeof(status)); // object

let value;
console.log("value: ",typeof(value)); // undefined

let a=undefined;
console.log("a: ",typeof(a)); // undefined

let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt);

let obj= {name: "Pavan", lastname:"Ingale"}
console.log(typeof obj);

let arr=[1,2,3,4]
console.log(typeof arr)
//In JavaScript, arrays are a special type of object, so the typeof operator returns "object".

let sym=Symbol("Pavan123@")
console.log(typeof sym)
console.log("sym datatype is " + typeof sym)
console.log("sym datatype is " , typeof sym)//Multiple arguments mean passing more than one value 
// to a function, separated by commas.
//console.log(arg1, arg2, arg3, ...);

 