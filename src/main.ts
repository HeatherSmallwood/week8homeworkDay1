
/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */
// Built-in Types: variable: type = value
console.log('testing')


// Our first TS Code
let age: number = 30;
console.log(age)

age = 20;
console.log(age)

let myName: string = 'heather'
console.log(myName)

let isPrime: boolean = true 
// ---------- TS Fundamentals ----------

// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing

let lastName;
lastName = 'christian'
lastName = 30

const fullName = (fname: string, lname: string) => {
    console.log(fname +lname)
}



// ----- Arrays: Dynamic, you can pass any data type
let numbers: number[]  = [1,2,3,4]
let dynamicArr: (string | number| boolean)[] =[23,'christian',true, 'Lee', 99]

// Another huge benefit: Code completion
myName.charAt
age.toString
isPrime.valueOf

// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values
let dogTuple:[number, string] = [1, 'pitbull']
// Code Completion
dogTuple.push(3)
console.log(dogTuple)


// ----- Enums: Special "Class" that represents a group of constants.
const small: number  = 25
const medium: number  = 50
const large : number = 75

console.log(small)
console.log(medium)
console.log(large)

// PascalCase "numeric"
// optimizes space 
enum Size {
    Small = 25,
    Medium =50,
    Large =75
}
console.log(Size.Small)


// "string"
enum Instructors{
    Lead = 'christian',
    Associate = 'dylan'
}
console.log(Instructors.Lead)


// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config
const calculateTax = (income : number, taxYear: number): number => {
    if (taxYear < 2024){
        return income * 1.2
    }
    return income * 1.3
}
console.log(calculateTax(40000, 2024))

// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/

let employee: {
    readonly id : number,
    name: string,
    age: number,
    location?: string,
    isAdmin: boolean
} ={
    id: 0,
    name: 'dylan',
    age: 24,
    location: 'USA',
    isAdmin: false
}










// // Homework Exercises

// // 1. For each of these values, what type will the TypeScript compiler infer?
// let a = 118;
// // A: number

// let b = 'Thieves';
// // A: string

// let c = [true, false, false];
// // A: boolean[]

// let d = {age: number};
// // A: number

// let e = [3]
// // A: number[]

// let f;
// // A: any

// let g = []
// // A: any[]



// // 2. What are the compilation errors in each of the following code snippets?
// let song: {
//     title: string,
//     releaseYear: number,
// } = {
//     title: 'Lose Yourself'
// };
// // A: the type is not identified after the colon

// let prices = [100, 200, 300];
// prices[0] = '$100';
// // A: price[0] is a defined as a string and is originally set to be a number

// function myFunc(a: number, b: number): number {}
// // A: the function does not return anything


// Javascript codewars solutions

// Question 1
// Title: Opposites Attract
// DESCRIPTION:
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


function areTheyInLove(petals1:number, petals2:number) {
    return (petals1 % 2) ^ (petals2 % 2); 
  }
  

  console.log(!!areTheyInLove(3, 4)); 
  console.log(!!areTheyInLove(2, 2)); 
  

// Question 2
// Title: Abbreviate a Two Word Name

// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F


function abbrevName(name:string) {
    const [firstName, lastName] = name.toUpperCase().split(' ');
    return `${firstName[0]}.${lastName[0]}`;
  }

  console.log(abbrevName('Sam Harris')); 
  console.log(abbrevName('patrick feeney')); 
  
