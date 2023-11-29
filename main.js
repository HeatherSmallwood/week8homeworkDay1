/* Since TS is a superset of JS, we can still write regular JS code in
a TS file */
console.log('testing');
// Our first TS Code
var age = 30;
console.log(age);
age = 20;
console.log(age);
var myName = 'heather';
console.log(myName);
// ---------- TS Fundamentals ----------
// Built-in Types: variable: type = value
// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing
// ----- Arrays: Dynamic, you can pass any data type
// Another huge benefit: Code completion
// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values
// Code Completion
// ----- Enums: Special "Class" that represents a group of constants.
// PascalCase "numeric"
// "string"
// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config
// ----- Objects
/* NOTES:
Use "?" for optional properties
Use readonly on properties you never want to reassign
*/
