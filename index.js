
console.clear()

// Remove duplicates from an array

// Input: [1, 2, 2, 3, 4, 4] → Output: [1, 2, 3, 4]


// let arr=[1,2,2,3,4,4,5,5,0.1]

// let newArr=[]

// arr.forEach((elem)=>{
//      if(!newArr.includes(elem)){
//          newArr.push(elem)
//      }
// })

// console.log(newArr)


// Input: [1, [2, 3], [4, [5]]] → 
// Output: [1, 2, 3, 4, 5]

// let arr= [1, [2, 3], [4, [5],[6,7,8,[9]]]] 

// let newArr=[]


// function flattern(arr){
//      arr.forEach((elem)=>{
//      if(typeof elem==="number"){
//          newArr.push(elem)
//      }else if(Array.isArray(elem)){
//          flattern(elem)
//      }
// })
// }
// flattern(arr)
// console.log(newArr)


// Find the first non-repeating character in a string
// Input: "swiss" →
// Output: "w"


// console.log("helo")
// let arr=[1,2,3,4,5,6,5,6,7]
// console.log(arr)

// console.log("helo")




// 9/01/2026



// ========================
// JS Coding Round Questions
// ========================

// 1️⃣ Reverse a String
// Question: Reverse a given string.
// Input: "hello"
// Output: "olleh"
// let string="hello"
// function reverseString(str) {
//     let arr=str.split("")
//     let reverseStr=arr.reverse().join("");
//     return reverseStr;
// }

// console.log(reverseString("hello"))
// console.log(reverseString("captain"))

// 2️⃣ Check if a String is Palindrome
// Question: Check if a given string is a palindrome.
// Input: "madam"
// Output: true
// "A man, a plan, a canal: Panama" true

// let str="A man, a plan, a canal: Panama";


// function isPalindrome(str) {
//     let arr=str.toLowerCase().match(/[a-zA-z]/g)
//     let original=arr.join("");
//     let revStr=arr.reverse().join("")
//     if(original===revStr){
//         return true
//     }else{
//         return false
//     }


// }
// console.log(isPalindrome("madam"))
// console.log(isPalindrome("madam"))
// console.log(isPalindrome("sA man, a plan, a canal: Panama:s"))
// console.log(isPalindrome("A man, a plan, a canal: Panama:s"))
// console.log("a"=="A")

// 3️⃣ Remove Duplicates from an Array
// Question: Remove duplicate elements from an array.
// Input: [1, 2, 3, 2, 4, 1]
// Output: [1, 2, 3, 4]

// not recommonded
{


    // function removeDuplicates(arr) {
    //     // first method
    //     let newArr=[]
    //     arr.forEach(elm => {
    //         if(!newArr.includes(elm)){
    //             newArr.push(elm)
    //         }
    //     });
    //     return newArr

    // }
}

// let arr=[1, 2, 3, 2, 4,1,1,2,3,5]
// let newArr=[]

// implement it later




// 4️⃣ Find the Second Largest Element in an Array
// Question: Find the second largest number in an array.
// Input: [10, 5, 20, 8]
// Output: 10

// let arr=[10, 5, 20, 8];
// let newArr=arr.sort((a,b)=>b-a)
// console.log(newArr[1])

// 5️⃣ Count Frequency of Characters in a String
// Question: Count the frequency of each character in a string.
// Input: "javascript"
// Output: { j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1 }

// const input="javascript"
const input = "bbbbaaaaa,%*321"

const obj = {}
for (let i = 0; i < input.length; i++) {
    if (obj[input[i]]) {
        obj[input[i]] += 1;
    } else {
        obj[input[i]] = 1
    }
}
console.log(obj)

// 6️⃣ Flatten a Nested Array
// Question: Flatten a nested array of arbitrary depth.
// Input: [1, [2, [3, 4]], 5]
// Output: [1, 2, 3, 4, 5]

// const arr = [1, [2, [3, 4]], 5,[[2,3,4,[76,55]]]];
// let newArr = []
// function extractVal(arr) {
//     arr.forEach((element => {
//         if (Array.isArray(element)) {
//             extractVal(element)
//         } else {
//             newArr.push(element)
//         }
//     }));
// }
// extractVal(arr)
// console.log(newArr)

// make it better


// 7️⃣ Find Missing Number in an Array
// Question: Find the missing number in a sequence of integers.
// Input: [1, 2, 4, 5]
// Output: 3
function findMissingNumber(arr) { }

// 8️⃣ Implement map() Function (Polyfill)
// Question: Implement your own version of Array.map().
// Input: [1, 2, 3].myMap(x => x * 2)
// Output: [2, 4, 6]



// Array.prototype.myMap = function (callback) { 

// }
// function modify(arr){
// for(let i=0; i<arr.length; i++){

// }
// }

// implement it


// 9️⃣ Debounce Function
// Question: Implement a debounce function that delays execution.
// Input: debounce(() => console.log("Hi"), 300)
// Output: logs "Hi" after 300ms when called
function debounce(fn, delay) {
    setTimeout(()=>{
        fn()
    },delay*10)
 }
function hello(){
    console.log("helos")
}
 debounce(hello,200)

//  verify it


// 🔟 Check if Two Strings Are Anagrams
// Question: Check if two strings are anagrams of each other.
// Input: "listen", "silent"
// Output: true
function areAnagrams(str1, str2) { }

// 11️⃣ Reverse an Array In-Place
// Question: Reverse an array without using extra space.
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]
function reverseArray(arr) { }

// 12️⃣ Merge Two Sorted Arrays
// Question: Merge two sorted arrays into one sorted array.
// Input: [1,3,5], [2,4,6]
// Output: [1,2,3,4,5,6]
function mergeSortedArrays(arr1, arr2) { }

// 13️⃣ Check if Array is a Subset of Another Array
// Question: Determine if one array is a subset of another.
// Input: [1,2], [1,2,3,4]
// Output: true
function isSubset(arr1, arr2) { }

// 14️⃣ Find Maximum Product of Two Numbers in an Array
// Question: Find the maximum product of any two numbers in an array.
// Input: [1, 5, 3, 2]
// Output: 15
function maxProduct(arr) { }

// 15️⃣ Rotate an Array by K Positions
// Question: Rotate an array to the right by k positions.
// Input: [1,2,3,4,5], k=2
// Output: [4,5,1,2,3]
function rotateArray(arr, k) { }

// 16️⃣ Find Missing Elements in an Array of Range
// Question: Find all missing numbers in a given range.
// Input: [2,3,7], range 1-7
// Output: [1,4,5,6]
function missingElements(arr, rangeStart, rangeEnd) { }

// 17️⃣ Remove Falsy Values from Array
// Question: Remove falsy values (false, 0, "", null, undefined, NaN) from an array.
// Input: [0, 1, false, 2, '', 3]
// Output: [1, 2, 3]
function removeFalsy(arr) { }

// 18️⃣ Deep Clone an Object
// Question: Create a deep copy of an object.
// Input: {a:1, b:{c:2}}
// Output: {a:1, b:{c:2}} (separate object)
function deepClone(obj) { }

// 19️⃣ Implement Filter Function (Polyfill)
// Question: Implement your own version of Array.filter().
// Input: [1,2,3,4].myFilter(x => x%2==0)
// Output: [2,4]
Array.prototype.myFilter = function (callback) { }

// 20️⃣ Find Pairs in Array that Sum to Target
// Question: Find all pairs in an array that sum up to a target.
// Input: [1,2,3,4], target=5
// Output: [[1,4],[2,3]]
function findPairs(arr, target) { }
