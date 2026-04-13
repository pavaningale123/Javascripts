const person={
    name:"Pavan",
    address:{
        city:"Pune"
    }
}

//shallow copy

// When using shallow copy (Object.assign), modifying the nested property (address.city) in the cloned object also changes the original object.
// This happens because both objects share the same reference for the nested object.

// 👉 That’s why output shows:

// Original → "Mumbai"
// Cloned → "Mumbai"

console.log("----------shallow copy-------------");
const shallowobject = Object.assign({},person);

shallowobject.address.city="Mumbai";

console.log("Original obejct:- ", person);
console.log("Cloned obejct:- ", shallowobject);

//deep copy

// 👉 When using deep copy (JSON.parse(JSON.stringify())), modifying the cloned object does not affect the original object.

// 👉 This is because deep copy creates a separate memory reference for nested objects.

// 👉 That’s why output shows:

// Original → "Mumbai" (unchanged after deep copy)
// Cloned → "Banglore"

console.log("----------deep copy-------------");
const deepcopy= JSON.parse(JSON.stringify(person));
deepcopy.address.city="Banglore";
console.log("Original obejct:- ", person);
console.log("Cloned obejct:- ", deepcopy);