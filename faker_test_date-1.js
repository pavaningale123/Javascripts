import { fakerEN_US as faker } from '@faker-js/faker';//Faker library is used to generate dynamic fake
import ExcelJS from 'exceljs';//ExcelJS library is used to create Excel files

// Create Excel workbook
const workbook = new ExcelJS.Workbook();

// Create sheet
const sheet = workbook.addWorksheet('Userstestdata');

// Add column names header
sheet.addRow(['First Name', 'Last Name', 'Email' , 'Phone Number']);

// Loop 100 times
for (let i = 1; i <= 100; i++) {

    // Generate fake data
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    //const phoneNumber = faker.string.numeric(10);
    //phone number start from 9
    let phoneNumber = faker.string.numeric(10);
    if (phoneNumber.startsWith('0')) {
        phoneNumber = phoneNumber.replace('0', '9');
    }
    
    // Add data into Excel row
    sheet.addRow([firstName, lastName, email, phoneNumber]);//Add Data into Excel row
}

// Save Excel file
await workbook.xlsx.writeFile('userstestdata14.xlsx');

console.log('Excel file created');