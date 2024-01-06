//SCOPE

// use var, let, const to define scope
//
var scope_name = 'value';

//COMMENT with double slashes // or /**/ */

/************************************************************************************************ */

//BUILTIN FUNCTION: alert, console,confirm,prompt,set timeout, set interval ....

alert(scope_name);  // alert will appear a box to show the notification
console.log(scope_name);  // console will appear notification in the console window
confirm(scope_name); //confirm to show the confirmation about one information previously displayed
prompt(scope_name); // show information and an input field 
setTimeout(function(){
    console.log(scope_name);
},1000);  // set timeout -> para:function use to use a function after definition time
setInterval(); // same with setTimeout but it will loop after definition time


/************************************************************************************************/

//OPERATOR
var a=1;
var b  =2 ;
// Arithmetic operator 
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var e = a ** b;
var g = a %b;
var h = a++;
var j = a--;
var a =1 ;
a++; // a = 2 after this line
++a; // a = 3 in this line

// 
// Assignment 
var a =1;
a += 1;
a -= 1;
a *= 1;
a /= 1;
a **= 1;

// Comparison

// ==,!=,>,<,>=,<=
var a = 1;
var b = 2;
if(a > b) {
    console.log(a +'is greater than'+ b);
}else{
    console.log(a +'is less than'+ b);
}
//ternary operator

const sf =  a>b ? a = b : b=a;



// Logical

//&&-and , || - or , ! - not

// Type of data

//Primitive Data :number,string,boolean,undefined,null,symbol
//Complex Data : function, object


//String operator

var firstName = 'Dat'
var lastName = 'Nguyen';
console.log(firstName + lastName); // => 'DatNguyen'
console.log(firstName +'' + lastName); // => 'Dat Nguyen'


var name = firstName;
name += 'Nguyen';
console.log(name); // => 'DatNguyen'


//Compare 

// ==  same as value
// === same as value and type of data


/********************************************************************************************** */
//FUNCTION

function Show(para){
    
}

//Can't run without call
//Can have some para
//Return value

// NAMING
// a -z , A-X, 0-9 _, $
// Can't let number at the first of the para


//FUNCTION TYPE

//Delcaration 

function Show(para){

}

// Expression

var show = function(){

}
setTimeout(function(){

});
var objex = {
    show: function(){

    }
}

// Arrow 


/*************************************************************************** */

//STRING

// or 

var names = new String('Dat'); // Object
var names = 'Dat'; // String 
 
//length of string

console.log(names.length)

// Javascript string methods

//1.Length

console.log(names.length);

//2. Find index

console.log(names.indexOf('a'));

//3. Cut String

console.log(names.substring(1,3));

//4. Replace

console.log(names.replace('a','b'));

//5. To upper case

console.log(names.toUpperCase());

//6. To lower case

console.log(names.toLowerCase());

//7. Trim to delete whitespace

console.log(names.trim());
//8. Split
var lage = 'Data, Ruby, String';
console.log(names.split(', ')); // converts to array 

//9. Get a character by index

console.log(names.charAt(1));




/********************************************************************************************************** */

// NUMBER

var numbers = new Number(10); // return object

var numbers = 10; // return number 

/*********************************************************************************************************** */

//ARRAY
 var language = [
    'Javascript',
    'Java',
    'Python',
    'C++'
 ];

 //length of array
console.log(language.length);

var languages = new Array('Javascript','Kotlin'); // return instance

// Index

console.log(languages[0]);

languages[0] = 'Java';
console.log(languages[0]);

// Javascript Array function

//1. To string

console.log(language.toString());

//2. Join

console.log(language.join('-')); // to push at the between of the array element

//3. Pop

console.log(language.pop()); // Delete the lastest element of the array and return it

//4. Push

console.log(language.push('PHP')); // Add a new element to the end of the array and return it

//5. Shift

console.log(language.shift()); // Delete the first element of the array and return it

//6. Unshift

console.log(language.unshift('C#')); // Add a new element to the beginning of the array and return it

//7.Splicing

console.log(language.splice(1,1)); // Delete the element at the given index and return it

//8. Concat

console.log(language.concat('C#')); // Concatenate the array with another array and return it

//9. Slicing

console.log(language.slice(1,3)); // Slice the array from the given index and return it



/********************************************************************************************************* */

//OBJECT

var person = {
    firstName: 'Dat',
    lastName: 'Nguyen',
    age: 20,
    job: 'Developer'
}

person.address = "Ha noi";
person['home-o'] = "Hahah";

console.log(person);

// Get value

console.log(person.firstName);
console.log(person['firstName']);
// Set value

person.firstName = 'Dat';
console.log(person.firstName);

// Delete value

delete person.firstName;
console.log(person.firstName);

// Check value

if(person.firstName){
    console.log(person.firstName);
}else{
    console.log('No value');
}


//Object constructor

function Person(firstName, lastName, age, job){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;
}
var dat = new Person('Dat','Dat',20,'Ahihi');

// Object prototype

Person.prototype.fullName = function(){
    console.log(this.firstName +'' + this.lastName);
}

dat.fullName();

//Object date

var date = new Date();
console.log(date.getDate());


// Math object

//Math.PI

console.log(Math.PI);

//Math.random

console.log(Math.random());

//Math.round()

console.log(Math.round(10.5));

//Math.floor()

console.log(Math.floor(10.5)); // to previous value

//Math.ceil()

console.log(Math.ceil(10.5)); // to next value

//Math.abs()


console.log(Math.abs(-10));

//Math.pow()

console.log(Math.pow(2,3));

//Math.sqrt()

console.log(Math.sqrt(4));

//Math.min()

console.log(Math.min(10,20));

//Math.max()

console.log(Math.max(10,20));

//Math.sin()

console.log(Math.sin(10));

//Math.cos()

console.log(Math.cos(10));


/************************************************************************************************************* */
//CONDITIONAL FUNCTIONS

// If else, Switch case

/************************************************************************************************************* */
//LOOP

//for, for in, for of, while, do while


/************************************************************************************************************** */
//CALL BACK

//call back is function and be called in parameter

function sayHello(name){
    console.log('Hello'+ name);
}

function callback(){

}
sayHello(callback);

var courses = [
    'Javascript',
    'Java',
    'Python',
    'C++'
];
courses.map(function(course){
console.log(course);
});

/************************************************************************************* */

//HTML DOM 

// element, attribute, text

var element = document.getElementById('element');
element.innerHTML = 'Hello';


/// Get element
var title = document.getElementsByClassName('title');

var titles = document.getElementsByName();

var titless = document.getElementsByTagName('h1');

var title = document.querySelectorAll('.title');

var title = document.querySelector('.title');

//    parent.query to children

//DOM attribute

title.className = 'titles';
//...

//get attribue 

title.getAttribute('class');

//set attribute

title.setAttribute('class','titless');

//remove attribute

title.removeAttribute('class');

//style

title.style.color ='red';
title.style.fontSize = '20px';
title.style.fontWeight = 'bold';
title.style.textDecoration = 'underline';
title.style.backgroundColor = 'yellow';

//get style

title.style.color;
title.style.fontSize;
title.style.fontWeight;
title.style.textDecoration;
title.style.backgroundColor;

//set style


title.style.color ='red';
title.style.fontSize = '20px';
title.style.fontWeight = 'bold';
title.style.textDecoration = 'underline';
title.style.backgroundColor = 'yellow';

//remove style

title.style.color = '';
title.style.fontSize = '';
title.style.fontWeight = '';
title.style.textDecoration = '';
title.style.backgroundColor = '';
//Event

//InnerText and textContent property

//innertext will show the text in the browser
//textContent will show the value of the text



