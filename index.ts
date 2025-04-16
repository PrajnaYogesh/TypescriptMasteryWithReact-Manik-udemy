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
var firstName:string = "Prajna";
let automobile:string = "BMB";
const school = "P.A college" //const has the literal value assigned as its type
// school="A.B"  =>cannot reassign because it is const
let id=32;
let idToString = id.toString();   //convert number to string

// ===============================
//2. number
let age:number = 10;
var size:number=5;
const roll = 3;

let stringToNumberconvert = parseInt("30"); //convert string to number

// ===============================
//3. boolean

let isStudent:boolean = true;
const alwaysStudent = true;
let minAge = age >=10 ? true :false;


// ===============================
//4. null =>to get a null, we must always assign it to null

let userRole = null;
console.log(userRole)

// ===============================
//5.undefined => if we dont assign a value, it will be undefined. if you dont explicitly annotate to undefined, it will take any type

let user:undefined;
console.log(user)

//null and undefined are not same
console.log(user===userRole)

//null and undefined are falsu value in TS, hence the below statements will be executed.
if(!user){
    console.log("This is true");
}

//null and undefined are falsu value in TS, hence the below statements will be executed.
if(!userRole){
    console.log("This is true");
}

// ===============================
//6. BigInt => intoduce in 2020. should update the tsconfig.json target libarary to  "target": "ES2020" . 
//can be used only for integers and not floating point values

let bigInt1:bigint = BigInt(1234);

//or 

let bigInt2:bigint = 1343453n;
console.log(bigInt1);
console.log(bigInt2)

// ===============================
//7. symbol  =>  intorduced in 2020

console.log ("Symbol")
let ids:symbol = Symbol(123);
let alphaids : symbol = Symbol("ids");

let userInfo = {
    [ids]: "456",
    name : "Prajwal",
    getIds(){
        return this[ids];
    }
}

console.log(ids);
console.log(userInfo.name)
console.log(userInfo.getIds())


// ===============================
//   Practice test for TYPES

/**
 * Assign the correct types to each of the following variables
 */
let message:string = "Hello, TypeScript!";
let ages:number = 42;
let isStudents:boolean = true;
let fetched:null = null;
let users:undefined = undefined;
let largeNumber:bigint = 9007199254740991n;
let unique:symbol = Symbol("uniqueSymbol");

// ======================================================================================================================
//  ---------------------------SECTION 3 EXPLORING TYPE SYSTEM--------------------------

//17. any type
let firstname:any = "Praj";
firstname=123;
firstname = []

//here implicitly return value will be of type any,unless you specify the type of param
function returnParam(param:string){
    return param
}

//18. Unknown - used when you dont know the type intially during declaration,but may know in future.

function multiplyByTwo(number:unknown){
    if(typeof number === "number"){
        return number * 2;
    }
    return "Please provide valid number";
}

console.log(multiplyByTwo(4));
console.log(multiplyByTwo("hey"));


///////Declaring, annotation and inference
// declaration is declaring your own type, when multiple complex types must be declared
// Annotation must be used for simple primitive type
//inference must be used in least possible ways, when you know the outcome is exactly what it must be, else typescript may take any

//21 . Union -here we will see simple primitive type, complex object type we will see in fiture
type StringOrNumber = string | number;
type NumberOrUndefined = number | undefined;
type StringNumberOrUndefined = string | number | undefined;
type DateOrUndefined = Date | undefined;

let stringOrNumber : StringOrNumber = 1233;
let canBeStringAlso : StringOrNumber = "hey";

function print(input : StringNumberOrUndefined){
    if(input){
        console.log(input);
           }else{
            console.log("Please input something to print");
           }
}

print();
print("Hello world");
//===============================================================================================
//22. Conditional types -> assigning types using conditional statements.not assigning the values here, instead type
type CustomDate = Date;
type CustomString = string;

type TrueString = CustomString extends string? true : false;
type IsThisDate = CustomDate extends Date ? Date : undefined;

//===============================================================================================
// 23. Type hierarcy
//24. Typecasting  => use "as" or <> 

//28 ========================OBJECTS==================

// the stricter way to create an object is first create an type alias that defines all the properties your object will hold and then create the object below.
//you cannnot add a new alue to object directly unless it is defined in the type. 
//type will have ; and object will have , 

type Post = {
    title :string;
    content : string;
    date : Date;
};

let post : Post = {
    title : "This is title",
    content : "this is content",
    date : new Date(),
};


//NESTED OJECT
type Author ={
    name:string;
    age:number;
};

type Posts = {
    title :string;
    content : string;
    date :Date;
    author : Author;
}

let posts : Posts = {
    title : "This is title",
    content : "this is content",
    date : new Date(),
    author:{
        name: "Praj",
        age:34,
    }
}
//====================================================================================================
//31. Index signatures - can be used when you have patterns, can have only 1 index signature. key can be a string or number
//using index you can set a property that you donot know before hand. 
// you can set this property using [key:string] or [key:number] and you can define their values later as per the key .
//here web1,web2 are the key.they are string. so we used [key:string]
type Post1 = {
    title :string;
    content : string;
    date : Date;
};

let post1 : Post1 = {
    title : "This is title",
    content : "this is content",
    date : new Date(),
};


//NESTED OJECT
type Author1 ={
    name:string;
    age:number;
};

type AwardDetails = {
    name:string;
    date: Date;
}

type Awards ={
    [key:string]:AwardDetails;
}


type Posts1 = {
    title :string;
    content : string;
    date :Date;
    author : Author1;
    awards:Awards;
}

let posts1 : Posts1 = {
    title : "This is title",
    content : "this is content",
    date : new Date(),
    author:{
        name: "Praj",
        age:34,
    },
    awards :{
        web1:{
name:"web 1 award",
date : new Date(),
        },
        web2: {
            name:"web 2 award",
            date : new Date(),
        }
    }
}

//====================================================================================================

//32. Optional property - In javascript if you declare an object, while defining the object mayor may not have values for all the properties declared.
//but in TS, once you clare a type ,while definig its values all properties must ne mandatorily set. in case you want to make something optional,then use this optional 
//use ? to make an propety optional

type School =  {
    sname:string;
    area? :string;
}

type SInfo = {
name:string;
school : School;
}

let student:SInfo = {
    name : "Praj",
    school :{
        sname: "Bharath",
        area:"ullal"
    }
}

let student1:SInfo = {
    name : "Praj",
    school :{
        sname: "Bharath",
        
    }
   
}

//===========================================================================================

// read only property - property once declared and assigned a value, cannot be changed 
type Authors ={
    name:string;
    age:number;
    readonly book : "DSA"|"Java";
    }

    let fiction:Authors = {
        name:"Praj",
        age:10,
        book :"DSA"

    }
//cannot change value of book
// fiction.book="SE"  => not allowed
