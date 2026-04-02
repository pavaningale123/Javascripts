// //premitive data type
// //nnssbu - null  number string symbl boolen bignit undefined 

// let a=null;
// let b=100;
// let c="pavan";
// let d=Symbol("123Pavan")
// let e=true
// let f=21212121121212121212n;
// let g;

// console.log(typeof a,typeof b,typeof c, typeof d, typeof e, typeof f, typeof g);

// // non premitie data tyep
// // object , arr, function 

// let obj={
//     name:"pavan",
//     age:23
// }
// console.log(typeof obj)

// let arr=[2121,321321]
// console.log(typeof arr)

// function add(a,b){
//     return a+b;
// }
// let result=add(12,12)
// console.log(result)
// console.log(typeof add)

// function a(){
// console.log("hello")
// }
// a();

// let person_age=1;
// if ( person_age>=18){

//     console.log("person eligible for vote")
// }
// console.log("program end --------")

// let person_age=19
// if (person_age>=18){
//     console.log("person eligible for vote")

// }
// else{
//     console.log("Not eligible for vote")
// }
// console.log("program end -------")

// let num=11;
// if (num % 2==0){
//     console.log("Number is even number")
// }
// else{
//     console.log("Number is odd number")
// }
// console.log("program end -----")

// let a=4, b=4, c=4;
// if (a==b && b==c){
//     console.log("All numbers are equeal")
// }

// else if (a>=b && a>=c)
// {
//     console.log("a is the larget number")
// }
// else if(b>=a && b>=c)
// {
//     console.log("b is the largest number")
// }
// else
// {
//     console.log("c is the largest number")
// }

// let week_no=7;
// switch (week_no)
// {
//     case 1: console.log("Sunday")
//             break;
//     case 2: console.log("Monday")
//             break;    
//     case 3: console.log("Tuesday")
//             break;
//     case 4: console.log("Wednesday")
//             break;
//     case 5: console.log("Thursday")
//             break;
//     case 6: console.log("Friday")
//             break;
//     case 7: console.log("Saturday")
//             break;
//     default: console.log("Invalid number ")
// }

// let num=0;
// if (num>0)
// {
//     console.log("Number is positive");
// }
// else if (num<0)
// {
//     console.log("Number is negative");
// }
// else
// {
// console.log("number is zero")
// }

// let mark=34;
// if (mark>=90){
//     console.log("Grade A")
// }
// else if (mark>=50)
// {
//     console.log("Grade B")
// }
// else
// {
//     console.log("fail")
// }

// Leap year

// let year=2023;
// if (year%4==0)
// {
//     console.log("leap year")
// }
// else
// {
//     console.log("not leap year")
// }

// let ch='z';
// if (ch == 'a' || ch == 'e' || ch == 'i' || ch=='o' ||ch=='u')
// {
// console.log("character is oveal: "+ch)
// }
// else
// {
//     console.log("Not a oveal")
// }

// // switch case statement

// let a=23,b=32;
// let op="-";
// switch (op)
// {
//     case "+": console.log("Addition of a and b is : " + (a+b)); break;
//     case "-": console.log("substraction of a and b is : " + (a-b)); break;

// }

// // print up to 10
// for (let i=1; i<11;i++)
// {
// //console.log(i)
// process.stdout.write(i +" ");
// }

// for (let i=0; i<11 ; i++)
// {
//     console.log(i)
// }

// // even number upto 20

// function evenno(i){
//     for (i=1;i<21;i++)
//     {
//         //console.log(i);
//         let result=i
//         if (i%2==0)
//         {
//             console.log('even number'+i)
//         }
//     }
// }
// evenno();

//sum of number up to 10