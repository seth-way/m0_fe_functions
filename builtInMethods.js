// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
'Hello World'.toLowerCase();

// includes() takes 1 string argument & returns a boolean representation of 'does this string ever contain an exact match to the argument?'
// The return value would be -> true.
'Hello World'.includes('Hello');

// endsWith() takes 1 string argument & returns a boolean representation of 'does this string end with an exact match of the argument?'
// The return value would be -> false.
'Hello World'.endsWith('Hello');

// The return value would be -> true;
'Hello World'.endsWith('rld');

// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff".
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = 'Jeff';
console.log(firstName.startsWith('J'));

var breed = 'Bernedoodle';
// indexOf() takes 1 string argument & returns the starting index of where the argument appears in the String. If the argument does not exist, the method returns -1.
// The return value would be -> 5.
console.log(breed.indexOf('doodle'));

var relationship = 'Best Friends Forever';
// split() takes 1 string argument & breaks the string into an array of substrings. The breaks occur at each instance of the argument and the arguments are removed. If the argument does not appear in the String, it will return an array with one member, the original string.
// The return value would be -> ['Best', 'Friends', 'Forever']
console.log(relationship.split(' '));

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var agesOfGuests = [21, 40, 33, 12, 55];

function isLegal(age) {
  return age >= 21;
}
// every() takes 1 arguement, a function, and tests whether all members of an array return true when tested with the argument function.
// The return value would be -> false
console.log(agesOfGuests.every(isLegal));

var maleDogNames = ['Max', 'Bear', 'Duke', 'Buddy'];

function updateName(dogName) {
  return dogName + ' the best boy ever.';
}
// map() takes 1 paremeter, a function, and runs the function on each member of the array. Then, it stores the result of the function in the original index of the member.
// The return value would be -> ['Max the best boy ever', 'Bear the best boy ever', ...]
console.log(maleDogNames.map(updateName));
