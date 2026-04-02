//Can Re-assign
// const a='pavan'
// a='ingale'
// console.log(a); //TypeError: Assignment to constant variable.

// Hoisting  -Yes (but error)
// console.log(x);
// const x=5; //ReferenceError: Cannot access 'x' before initialization

//Cannot Re-declare -❌ No
// const a='pavan'
// const a='ingale'
// console.log(a);  //SyntaxError: Identifier 'a' has already been declared

//Must Initialize Immediately
// const a; //SyntaxError: Missing initializer in const declaration

//Block Scope
// function test(){
//     const q='pavan';
//     //console.log(q);
// }
// console.log(q);//ReferenceError: q is not defined



