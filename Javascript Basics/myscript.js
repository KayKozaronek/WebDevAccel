// Create variables like so: let var const

let myName ="Kay";
var iLike = "Kebab";
const PI = 3.141;

// const defines a constant that cannot be changed afterwards
// let and var can be redefined
myName ="Julita";
iLike= "Sushi" ;

//Datatypes

let string ="This is a normal string";
let number = 42.123;
let bool = false;
let array = [1,2,3,4,5, "A", "B", "C"];
let _undefined = undefined;
let _null = null;
let _NaN = NaN; //Not a number

let object = {
    keyname: "value",
    "key name with-dashes": "value"
};

// Accessing 
// array[3] -> 4
// array[5] -> "A"
//object.keyname  
//or object["key name with-dashes"]


// function 
function myFunction(myString, myString2 = 0){
    //all of your code 

    return function() {
        console.log("This is an anonymous function")
    };

    console.log(myString);
    console.log(myString2);
}

// calling the function
myFunction("Display this", "And this");

let myResult = myFunction("abs","asdf");
console.log(myResult)

//alert promt confirm

alert("Hey");

let result = confirm("Are you 18 years old?");
console.log(result);

prompt("Works like confirm but gives the user the option to write something");


//Objects
let obj = {
    keyname: "value1",
    keyname2: "value2"
}
console.log(obj.keyname);
console.log(obj["keyname2"])

obj.keyname = "burger"

console.log(obj.keyname)

let person = {
    name: "Kay",
    tall: true, 
    expertIn: undefined
}

console.log(person)

delete person.expertIn

//If-Else
let name = "Kay";

if(name == "Kay") {
    console.log("Your name is still Kay")
}

if(name == "Julita") {
    console.log.log("Yup")
}  else if(name = "Donut") {
    console.log("This is a mess")
} 
else{
    console.log("Oups")
}

//Switch-case
let myAge = 23

switch(expression) {
    case 22:
        console.log("You're 22");
        break;
    case 23:
        console.log("You're 23");
        break;
    default:
        console.log("You're neither 22 nor 23");
}

// for loop 

for (let i=0; i<10; i++) {
    console.log(i);
}

// while loop
var i = 0;

while (i<10) {
    console.log(i);
    i++;
}

// do-while loop
do {
    console.log("Nice!");
    i++;
} while(i<10);

