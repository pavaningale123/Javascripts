let person ={
    name:"Pavan",
    lastname:"Ingale",
    age:40,
    weight:70
};

//accessing the object properties
console.log(person.name);
console.log(person["name"]);

//Add new properties in object
person["height"]=5.5;
console.log(person.height);

//upadte the existing properties

person.age=65;
console.log(person.age);

//Remove the properties 

delete person.age;
console.log(person.age);

// for in loop for object

for (let x in person)
{
    //console.log(x);// show all key 
    //console.log(person[x]);// show all values
    console.log(x+" : "+person[x])
};


// how to define the method in object and accessing the method.

let emp={
    empname:"Pavan",
    emp_id:1023,
    job:"Engineer",
    basesal:50000,
    bonous: function calbonous()
    {
        return ((this.basesal*10)/100);
    }
};
console.log(emp.bonous());
//return is used to send the result of a function back to the caller so 
// it can be reused, while console.log() only prints the value and cannot be used in further logic.