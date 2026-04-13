const person = {
name: 'Happy',
age: 30,
address: {
city: 'Delhi',
country: 'India'
} };

//Shallow Copy using Object.assign()
const shallowCopy = Object.assign({}, person);
shallowCopy.address.city = 'Mumbai';

console.log (person.address.city);      // Output: "Mumbai"
console.log (shallowCopy.address.city); // Output: "Mumbai"


//Deep Copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.address.city = 'Bangalore';

console.log(person.address.city);   // Output: "Delhi"
console.log(deepCopy.address.city); // Output: "Bangalore"
