console.log(typeof NaN); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof [], "obj"); // object
console.log(typeof {}, "obj"); // object
console.log(typeof boolean, "undefined"); // object
console.log(typeof true, "boolean"); // object
console.log(typeof "", "str"); // object

let a = true
let a1 = true + true
let a2 = true + true + true
let a3 = true + true + true + true
console.log(a, typeof a); // true, boolean
console.log(a1, typeof a1); // 2, number
console.log(a2, typeof a2); // 3, number
console.log(a3, typeof a3); // 4, number

let b = 1 + true
let b1 = 2 + true
let b2 = true + ""
let b3 = true + "1"
let b4 = true + 1.3
let b5 = true + null
let b6 = true + undefined
console.log(b, typeof b);   // 2 number
console.log(b1, typeof b1); // 3 number
console.log(b2, typeof b2); // true string
console.log(b3, typeof b3); // true1 string
console.log(b4, typeof b4); // 2.3 number
console.log(b5, typeof b5); // 1 number
console.log(b6, typeof b6); // NaN number


let checkNaN = 1 + NaN  // NaN
let checkNaN1 = "1" + NaN  // 1NaN
let checkNaN2 = true + NaN  // NaN

console.log(checkNaN);
console.log(checkNaN1);
console.log(checkNaN2);

console.log("" == "")  // true
console.log(" " == "")  // false
console.log([] == []);  // false
console.log({} == {});  // false