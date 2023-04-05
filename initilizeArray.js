// we can initialize in 2 ways 
// 1.
let arr = [];

// 2.

let arrUsingNew = new Array()
let arrUsingNew1 = new Array()
let arrUsingNew2 = new Array(5)

console.log(arr);  //[]
console.log(arrUsingNew);  //[]
console.log(arrUsingNew1);  //[ <5 empty items> ]
// if you will check length it will return 5
// if you want to iterate like 100 then no need to write like [1,2,3,4,5] like so on
//  so better to write with new keyword
console.log(arrUsingNew2.length);  //5