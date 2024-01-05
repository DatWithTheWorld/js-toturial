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
