// // ================================
// //   STRING BASICS
// // ================================

// // Strings can be created in 3 ways:
// let str1 = "hello captain";   // double quotes
// let str2 = 'shah';            // single quotes
// let str3 = `captain jack`;    // backticks (template literals)

// console.log(str1, str2, str3);
// console.log("Length of str1:", str1.length);


// // ================================
// //   CHARACTER ACCESS
// // ================================

let str = "captain jack";

// console.log("charAt(3):", str.charAt(3));   // t
// console.log("charAt(100):", str.charAt(100)); // '' (empty string)
// console.log("charAt(-100):", str.charAt(-100)); // '' (empty string)

// console.log("charCodeAt(1):", str.charCodeAt(1)); // ASCII value of 'a'


// // ================================
// //   STRING CONCATENATION
// // ================================

// console.log("Concat:", "hello".concat(" ", "captain", " ", "jack", " ", "sparrow"));


// // ================================
// //   SEARCHING (includes, indexOf, lastIndexOf)
// // ================================
// let str = "captain jack";

// console.log(str.includes("c", 0));       // true
// console.log(str.includes("captain", 0)); // true
// console.log(str.includes("c", 8));      // true
// console.log(str.includes("p", 4));       // false

// console.log("indexOf c (from 0):", str.indexOf("c", 0));
// console.log("indexOf c (from 1):", str.indexOf("c", 1));
// console.log("indexOf c (from 3):", str.indexOf("c", 3));
// console.log("indexOf z:", str.indexOf("z")); // -1

// console.log("lastIndexOf c:", str.lastIndexOf("c", str.length - 1));
// console.log("lastIndexOf c (till index 2):", str.lastIndexOf("c", 2));


// // ================================
// //   EXTRACTING STRING
// // ================================

// console.log("slice(0,5):", str.slice(0, 5));       // "capta"
// console.log("slice(0, str.length):", str.slice(0, str.length)); // whole string
// console.log("slice(0, -1):", str.slice(0, -1));   // removes last char
// console.log("slice(0, -3):", str.slice(0, -3));   // removes last 3 chars

// console.log("substring(0,5):", str.substring(0, 5)); // "capta"
// // Negative index = treated as 0
// console.log("substring(0,-1):", str.substring(0, -1)); // ""
// console.log("substring(0,-2):", str.substring(0, -2)); // ""

// console.log("substr(3,2):", str.substr(3, 2));     // "ta"
// console.log("substr(-4,2):", str.substr(-4, 2));   // "ja"


// // ================================
// //   TRIMMING
// // ================================

// console.log("Trim:", "   white space   ".trim());
// console.log("TrimStart:", "   white space   ".trimStart());
// console.log("TrimEnd:", "   white space   ".trimEnd());


// ================================
//   SPLIT -> STRING TO ARRAY
// ================================

// let strArr = "hello,captain,jack,sparrow";
// console.log(strArr.split(","));       // [ 'hello', 'captain', 'jack', 'sparrow' ]
// console.log(strArr.split(",", 2));    // [ 'hello', 'captain' ]
// console.log(strArr.split(",", 10));   // all values
// console.log(strArr.split(",", 0));    // []
// console.log(strArr.split(",", -1));   // all values (negative ignored)


// // ================================
// //   REPLACE & REPEAT
// // ================================

// let repl = "hello world world";
// console.log(repl.replace("world", "JavaScript")); // replaces first match only
// console.log(repl.replace("worlds", "no effect")); // no match
// console.log(repl.replaceAll("world", "js"));      // replaces all matches

// console.log(repl.repeat(3));  // repeat string 3 times
// // console.log(repl.repeat(-2)); // ❌ Error: invalid count


// // ================================
// //   STARTS WITH / ENDS WITH
// // ================================

// console.log("captain".startsWith("c"));   // true
// console.log("captain".startsWith("C"));   // false
// console.log("captain".endsWith("n"));     // true
// console.log("captain ".endsWith("tain "));// true
// console.log("captain".endsWith("tain "));// false


// // ================================
// //   MULTILINE STRING (Template literals)
// // ================================

// let multiLine = `It
// is
// a
// multiline string.
// If you want multiline,
// use backticks (template literals).`;

// console.log(multiLine);
