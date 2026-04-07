let s1="pavan";
console.log(s1.concat(" Ingale"));//pavan Ingale

console.log(s1.charAt(4));//n

console.log(s1.replace("pavan", "Pavan"));//Pavan
console.log(s1);

console.log(s1.substring(2,5));//van
console.log(s1.substring(2));//vsan
console.log(s1.substring());//pavan --> return full string even though s1.substring(0)

console.log(s1.toUpperCase())//PAVAN

s2="Welcome to the Javascripts"

let result=s2.split(' ');
console.log(result);
console.log(result[2]);
// console.log(s2)
// console.log(s2.trim())