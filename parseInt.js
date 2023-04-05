let x = 10.02;  // 10
let x1 = "10.02" // 10
let x2 = "10this is adding string"  // 10
let x3 = "this is adding string10"  // NaN
let x4 = "this is adding10 string"  // NaN
console.log(parseInt(x ), typeof x);  // 10, number
console.log(parseInt(x1), typeof x1); // 10, String
console.log(parseInt(x2), typeof x2); // 10, String
console.log(parseInt(x3), typeof x3); // NaN String
console.log(parseInt(x4), typeof x4); // NaN String
console.log(typeof NaN);

let x5 = parseInt(x4);  // number
console.log(typeof x5); // number