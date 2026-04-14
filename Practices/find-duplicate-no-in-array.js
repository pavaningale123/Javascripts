function findDuplicates(arr) {
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        // Check if current element appeared before
        if (arr.indexOf(arr[i]) !== i) {
            duplicates.push(arr[i]);
        }
    }

    return duplicates;
}

let arr = [1, 2, 3, 2, 4, 5, 1];
console.log(findDuplicates(arr)); // [2, 1]

s1="hello"

//how to 1st letter to uppercase and rest to lowercase

console.log(s1[0].toUpperCase()+s1.slice(1));s