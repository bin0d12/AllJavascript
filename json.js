// JSON it is stored the data in key-value pairs

// you can access the data in 2 ways

let obj = {
    "name" : "binod kumar sahu",
    "age": 26,
    "occupation" : "Developer",
    "home address": "berhampur"
}

//  1.
console.log(obj.name)  // binod kumar sahu

// 2. 
console.log(obj['occupation']);  // developer

// what is the difference between this two is
// if that key have space in between words you can't access with 1st process
// see the below example

// accessing the home address from object

// console.log(obj.home address);  // it is error
console.log(obj["home address"]);  // berhampur

// so better to use 2nd procedure 