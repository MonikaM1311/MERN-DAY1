/* 1. for ... in // object iteration not in array iteration
2. for ... of // array iteration not in object iteration
3. forEach // array iteration not in object iteration  */


let student = {
    name: 'Alice',
    age: 20,
    major: 'Computer Science'
};  

// Using for...in loop to iterate through object properties
console.log("Using for...in loop:");    
for (let key in student) {
    console.log(key + ": " + student[key]);
}
// Using for...of loop to iterate through array values
const subjects = ['Math', 'Physics', 'Chemistry'];      
console.log("Using for...of loop:");
for (let subject of subjects) {
    console.log(subject);
}
// Using forEach method to iterate through array values
console.log("Using forEach method:");
subjects.forEach(subject => {
    console.log(subject);
});
// Note: for...of loop and forEach method cannot be used to iterate through object properties directly.


//concatenation of two arrays using for...of loop
let array1=['a','b','c'];
let array2=['d','e','f'];

//spread operator
let array3=[...array1,...array2];
console.log(array3); // ['a','b','c','d','e','f']

//concat method
let array4=array1.concat(array2);
console.log(array4); // ['a','b','c','d','e','f']

