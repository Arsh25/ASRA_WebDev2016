// Arsh Chauhan
// ASRA webdev 2016
// 07/16/2016
// Introduction to JS arrays
// Public Domain

// This is EXAMPLE code written to demonstrate things you should not do
// DO NOT USE THIS OUTSIDE OF A CLASSROOM

//Available on repl.it at https://repl.it/CcjR/20 


var age=[16,17,15,18,17.5];
console.log(age);


age[5]=18.5; 
var age_original=age.slice(0,age.length); // Keep clean copy of age

//------------------BEGIN NEVER DO THESE ARRAY OPERATIONS IN REAL CODE-----------------------

age[10]=100; //This works !! JS arays are maps 
//Display the length as an exmaple of unexpected behaviour
console.log("Length of age: " +age.length); //length is 11. length property tracks highest index, does not count elements
age["arsh"]=22; // This works. So keys don't have to be integers
console.log(age);

console.log("Length of age: " +age.length);
//-------------------END DO NOT DO THESE OPERATIONS SECTION----------------------------------

var real_length=0;
for (var index in age)
	real_length++;
console.log("Real length of array age: "+ real_length);

console.log("Printing indices of age");
for (var index in age)
	console.log(index); //print all indices 

console.log("\n");
console.log("Printing array age_original");
console.log(age_original);


//array methods

//array.push(val) method
console.log("age_original.length: "+age_original.length);
age_original.push(20);
console.log("age_original array after push(20)")
console.log(age_original);
console.log("age_original.length: "+age_original.length);
console.log("\n");

//array.splice(start,end) method
var spliced=age.splice(0,5);
console.log("spliced is equal pre push() age_original");
console.log(spliced);
console.log("\n");

//array.pop() method
var age=age_original.pop();
console.log("age_original.pop() gives:" +age);
console.log("age_original is now:");
console.log(age_original);
console.log("age_original.length: "+age_original.length);
