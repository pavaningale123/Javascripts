//An object in JavaScript is a collection of key–value pairs where each key is a 
// property name and its 
// corresponding value can be any data type.
let person = {
    name:"Pavan",
    age:25,
    city:"Pune"
    };
console.log(person);
console.log(typeof person)

//An array in JavaScript is a data structure used to store a list of values in a single variable, 
// where each value is accessed using its index starting from zero.

let arr = [1,2,3,"Banana","Apple",12.12,23.32]
console.log(arr);
console.log(typeof arr);

//function

// normal function
function gerat(){
    console.log("Hello Pavan");
}
gerat();  // calling the function

//Function with Parameters

function great (name){
    console.log("Hello, How are you "+ name+"?")
}
great("Pavan Ingale")

//Function with Return Value

function add(a,b){
    return a+b;
}
let result=add(12,23)
console.log(result);