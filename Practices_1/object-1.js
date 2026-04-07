let person={
    name:"Pavan",
    lastname:"Ingale"
}

console.log(person.name);

//adding 
person.add='pune';
console.log(person.add);

//updating existing element
person.add='Katraj Pune 411041';
console.log(person.add);

//remove address
delete person.add;
console.log(person.add);

let employee={
    ename:"Pavan",
    bsal:900000,
    bonous:function calb(){
        return((this.bsal*10)/100);
    }
}
console.log(employee.bonous())