let person =
{
    name:"Pavan",
    last_name: "Ingale",
    age:40,
    weight:70
}

//accessing the key value
console.log(person.last_name);
//add new key value
person.address='Pune';
console.log(person.address);

//update address
person.address="Pune 411041";
console.log(person.address);

//remove the key value
delete person.address;
console.log(person.address);

// how to define the method in object and accessing the method

let person1 =
{
    name:"Pavan",
    last_name: "Ingale",
    age:40,
    weight:70,
    sal:120000,

    bonous: function ()
    {
        return ((this.sal*10)/100);
    }
}
console.log(person1.bonous());