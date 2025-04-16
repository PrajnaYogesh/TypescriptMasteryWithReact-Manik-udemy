"use strict";
// const students = [{
//     name:"John",
//     score:70,
// },
// {
//     name:"Mark",
//     score:90,
// }]
//iterate over Array of obj ect
// for(const student of students){
//     console.log("Name:" ,student.name);
//     console.log("Score:" ,student.score);
// }
// ====================
// function addNumbers(a:number,b:number){
//     return a+b;
// }
// console.log(addNumbers(2,3));
// console.log(addNumbers("text",3));
// ===============================
//  ---------------------------SECTION 2 PRIMITIVE TYPES--------------------------
// primitive types example
// 1. string
var firstName = "Prajna";
let automobile = "BMB";
const school = "P.A college"; //const has the literal value assigned as its type
// school="A.B"  =>cannot reassign because it is const
let id = 32;
let idToString = id.toString(); //convert number to string
// ===============================
//2. number
let age = 10;
var size = 5;
const roll = 3;
let stringToNumberconvert = parseInt("30"); //convert string to number
// ===============================
//3. boolean
let isStudent = true;
const alwaysStudent = true;
let minAge = age >= 10 ? true : false;
// ===============================
//4. null =>to get a null, we must always assign it to null
let userRole = null;
console.log(userRole);
// ===============================
//5.undefined => if we dont assign a value, it will be undefined. if you dont explicitly annotate to undefined, it will take any type
let user;
console.log(user);
//null and undefined are not same
console.log(user === userRole);
//null and undefined are falsu value in TS, hence the below statements will be executed.
if (!user) {
    console.log("This is true");
}
//null and undefined are falsu value in TS, hence the below statements will be executed.
if (!userRole) {
    console.log("This is true");
}
// ===============================
//6. BigInt => intoduce in 2020. should update the tsconfig.json target libarary to  "target": "ES2020" . 
//can be used only for integers and not floating point values
let bigInt1 = BigInt(1234);
//or 
let bigInt2 = 1343453n;
console.log(bigInt1);
console.log(bigInt2);
// ===============================
//7. symbol  =>  intorduced in 2020
console.log("Symbol");
let ids = Symbol(123);
let alphaids = Symbol("ids");
let userInfo = {
    [ids]: "456",
    name: "Prajwal",
    getIds() {
        return this[ids];
    }
};
console.log(ids);
console.log(userInfo.name);
console.log(userInfo.getIds());
// ===============================
//   Practice test for TYPES
/**
 * Assign the correct types to each of the following variables
 */
let message = "Hello, TypeScript!";
let ages = 42;
let isStudents = true;
let fetched = null;
let users = undefined;
let largeNumber = 9007199254740991n;
let unique = Symbol("uniqueSymbol");
// ======================================================================================================================
//  ---------------------------SECTION 3 EXPLORING TYPE SYSTEM--------------------------
//17. any type
let firstname = "Praj";
firstname = 123;
firstname = [];
//here implicitly return value will be of type any,unless you specify the type of param
function returnParam(param) {
    return param;
}
//18. Unknown - used when you dont know the type intially during declaration,but may know in future.
function multiplyByTwo(number) {
    if (typeof number === "number") {
        return number * 2;
    }
    return "Please provide valid number";
}
console.log(multiplyByTwo(4));
console.log(multiplyByTwo("hey"));
let stringOrNumber = 1233;
let canBeStringAlso = "hey";
function print(input) {
    if (input) {
        console.log(input);
    }
    else {
        console.log("Please input something to print");
    }
}
print();
print("Hello world");
let post = {
    title: "This is title",
    content: "this is content",
    date: new Date(),
};
let posts = {
    title: "This is title",
    content: "this is content",
    date: new Date(),
    author: {
        name: "Praj",
        age: 34,
    }
};
let post1 = {
    title: "This is title",
    content: "this is content",
    date: new Date(),
};
let posts1 = {
    title: "This is title",
    content: "this is content",
    date: new Date(),
    author: {
        name: "Praj",
        age: 34,
    },
    awards: {
        web1: {
            name: "web 1 award",
            date: new Date(),
        },
        web2: {
            name: "web 2 award",
            date: new Date(),
        }
    }
};
