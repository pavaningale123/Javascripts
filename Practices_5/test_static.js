// // class math
// // {
// //     static add(a,b)
// //     {
// //         console.log(a+b);
// //     }
// // }
// // math.add(3,4)
// //NNSSBBU

// // let number=10;
// // let a=null;
// // let string = 'pavan';
// // let sym = Symbol('id')
// // let b=true;
// // let j=12322312312312n;
// // let c;

// // //object

// // let person={
// //     name:"pavan",
// //     lastname:"ingale"
// // }
// // console.log(person.name);
// // person.address='Pune';
// // console.log(person.address)
// // //array

// // let arr=[12,23,34,45]
// // console.log(arr)

// // //function

// // function greet() {

// //     console.log('hello');
    
// // }
// // greet();

// // function add(a,b){
// //     console.log(a+b);
// // }
// // add(10,10)

// // function substract(a,b){
// //     return a-b;
// // }
// // let result = substract(20,30)
// // console.log(result);


// //

// import { faker } from '@faker-js/faker';

// const email = faker.internet.email();
// const firstName = faker.person.firstName();
// const lastName = faker.person.lastName();
// const phoneNumber = faker.phone.number();

// console.log(email);
// console.log(firstName);
// console.log(lastName);
// console.log(phoneNumber);


import { faker } from '@faker-js/faker';
import ExcelJS from 'exceljs';

// Create Excel workbook
const workbook = new ExcelJS.Workbook();

// Create sheet
const sheet = workbook.addWorksheet('Userstestdata');

// Add column names
sheet.addRow(['First Name', 'Last Name', 'Email' , 'Phone Number']);

// Loop 100 times
for (let i = 1; i <= 100; i++) {

    // Generate fake data
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
      const phoneNumber = faker.string.numeric(10);
    // Add data into Excel row
    sheet.addRow([firstName, lastName, email, phoneNumber]);
}

// Save Excel file
await workbook.xlsx.writeFile('userstestdata11.xlsx');

console.log('Excel file created');