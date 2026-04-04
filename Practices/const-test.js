// re declare -SyntaxError: Identifier 'name' has already been declared
// const name="Pavan";
// const name= "Ingale";
// console.log(name);
//re assign  TypeError: Assignment to constant variable.
// const a=10;
//     a=20;
// console.log(a);
//hosting ReferenceError: Cannot access 'x' before initialization
// console.log(x);
// const x=34;

// const yy; //SyntaxError: Missing initializer in const declaration

// function test()
// {
//     const name="Dipali";
   
// }
// console.log(name) ;//ReferenceError: name is not defined

//We use const in Playwright to prevent reassignment of variables, 
// making the code more predictable, safe, and less prone to bugs,
//  especially since most values like page or locators do not need to change