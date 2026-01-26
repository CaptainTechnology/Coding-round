// ===========================
// PRIMITIVE DATA TYPES
// ===========================
// Primitive types store a single value, are immutable(can't change), and stored in stack memory.
// Types: String, Number, Boolean, Undefined, Null, BigInt, Symbol

"use strict";

// Number example
let num = 32;
num = 44; // Reassigned, original value 32 is garbage collected
console.log(num); // 44

// String example
let str = "hello";
// str[0] = "k"; // ❌ Cannot change a character in string
console.log(str); // "hello"

// ===========================
// REFERENCE DATA TYPES
// ===========================
// Reference types are objects, arrays, functions, etc.
// Stored in heap memory, mutable, and variables hold a reference to the object

const obj = {
  name: "captain",
  job: "web developer",
  salary: "45k"
};

// Reference copy: both variables point to same object
const newObj = obj;
newObj.job = "Backend developer";

console.log(obj.job);    // "Backend developer"
console.log(newObj.job); // "Backend developer"

// ===========================
// SHALLOW COPY
// ===========================
// Copies top-level properties only. Nested objects still share references.
// Safe for objects with only primitive values

const original = {
  name: "Alice",
  address: { city: "Wonderland", zip: 12345 }
};

const shallow = { ...original }; // Spread operator
shallow.name = "Captain";
shallow.address.city = "Uttar Pradesh"; // Changes original nested object

console.log(original.name, original.address.city); // Alice, Uttar Pradesh
console.log(shallow.name, shallow.address.city);   // Captain, Uttar Pradesh

// ===========================
// REFERENCE COPY
// ===========================
// No new object is created. Both variables point to same memory address.
const referenceCopy = original;
referenceCopy.name = "Captain";
referenceCopy.address.city = "Siddharth Nagar";

console.log(original.name);          // Captain
console.log(original.address.city);  // Siddharth Nagar
console.log(referenceCopy.name);     // Captain
console.log(referenceCopy.address.city); // Siddharth Nagar

// ===========================
// DEEP COPY
// ===========================
// Creates a completely independent object including nested objects
// Changes in copy do NOT affect original

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.name = "Captain";
deepCopy.address.city = "Looking Glass";
console.log(original.name);          // Alice
console.log(original.address.city);  // Wonderland
console.log(deepCopy.name);          // Captain
console.log(deepCopy.address.city);  // Looking Glass




// old code 
{// primative and refrence data type

// Primitive types are immutable and hold a single value. They are stored directly in the stack memory.

// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol

// ✅ Characteristics:

// Immutable: Cannot be altered once created (e.g., a string cannot be changed in-place).
// Stored in stack memory.
// When assigned to a variable, the value is copied, not referenced.
// Comparison is by value.

// let num=32;
// num=44;
// console.log(num);

// // the value 32 still exist in memory until garmbage colleced but num no longer refres to it
// // new value assign to the a not change a ; it mean reassined not changed


// "use strict"

// let a=12;
// a=43;
// // now 12 is garbage collection and new value is 43 reasign not changed

// let str="hello";
// str[0]="k"//error in use strict mode
// console.log(str);


// Reference types are objects. They are stored in heap memory, and variables hold a reference (address) to the value, not the actual value.

// Object

// Array

// Function

// Date, RegExp, etc.

// ✅ Characteristics:
// Mutable: Contents can be changed even if declared with const.

// Stored in heap memory.

// The variable holds a reference (or pointer) to the actual data.

// When assigned to another variable, both point to the same object.

// Comparison is by reference (memory address), not by content.


// const obj={
//     "name":"captain",
//     "job":"web developer",
//     "salary":"45k"
// }

// const newObj=obj;
// newObj.job="Backend developer"
// console.log(obj.job);
// console.log(newObj.job);


// shallow copy
// A shallow copy in JavaScript means copying the top-level properties of an object or array. If the original object contains nested objects (like objects inside objects or arrays inside objects), the references to those nested objects are shared, not cloned.

// If you change a nested object in the copied version, it also changes in the original, because they both point to the same memory.

//  When Is Shallow Copy Safe to Use?
// ✅ When your object or array contains only primitive values (numbers, strings, booleans, etc.)

// ❌ Not safe if it contains nested objects, arrays, functions, or any non-primitive types — unless you're okay with shared references.


// const original = {
//   name: 'Alice',
//   address: {
//     city: 'Wonderland',
//     zip: 12345
//   }
// };

// Shallow copy using spread operator

// const shallow = { ...original };
// shallow.name="captain";
// shallow.address.city="Uttar pradesh";
// console.log(original.name,original.address.city);
// console.log(shallow.name,shallow.address.city);


// Reference Copy in JavaScript some people say shadow copy but it is not a good term in js so use refrence copy insted of shadow copy
// A reference copy happens when you assign an object or array to a new variable without cloning it.
// Both variables now point to the same object in memory.

// ✅ What Happens:
// No new object is created.

// Both variables share the same memory address.

// Changes in one are reflected in the other.
//  This is not a clone—it's just a new variable pointing to the same object.


// const original = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     zip: 12345
//   }
// };

// const referenceCopy = original;
// referenceCopy.address.city = "Siddharth Nagar";
// referenceCopy.name = "Captain";
// console.log(original.name);         // 👉 "Captain" ✅
// console.log(original.address.city); // 👉 "Siddharth Nagar" ✅
// console.log(referenceCopy.name);         // 👉 "Captain" ✅
// console.log(referenceCopy.address.city); // 👉 "Siddharth Nagar" ✅


// 🔍 What Is a Deep Copy?
// A deep copy creates a completely new and independent object,
// including all nested objects and arrays.

// ✅ Key Characteristics:
// - The entire structure is copied recursively.
// - There are no shared references between the original and the copy.
// - Changes to the deep copy do NOT affect the original object.

// Original object with nested properties

// const original = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     zip: 12345
//   }
// };


// // ✅ Deep copy using JSON methods
// const deepCopy = JSON.parse(JSON.stringify(original));
// console.log(typeof(original),typeof(deepCopy));

// // Modify the deep copy
// deepCopy.address.city = "Looking Glass";
// deepCopy.name = "Captain";

// // 🔍 Original object remains unchanged
// console.log(original.name);          // Output: "Alice" ✅
// console.log(original.address.city);  // Output: "Wonderland" ✅
}



