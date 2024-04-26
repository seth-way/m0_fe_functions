// Each example below has at least one opportunity for improvement.

// YOUR TASK:
// Modify the code to make that improvement(s)
// write a JS comment to explain what you changed, and why
// make sure the code you submit WORKS - you can run this entire file
// using `node cleanUp.js` or copy and paste into a replit

// EX 1:
// This code works fine. I cleaned up the formatting a bit to make it more readable.
// We could also potentially choose a different function name, but this one isn't terrible. I added a semicolon to the return statement and function call for consistency.
function askForName() {
  console.log('Hello, what is your name?');
}

askForName();

// EX 2:
// This code also works fine but the formatting was a little messy. I cleaned that up. I also removed the variable sum, but this wasn't entirely necessary, just a personal preference. I added a semicolon to the return statement for consistency. I also console logged the function calls so that we could check that it is working.
function addThreeNums(first, second, third) {
  return first + second + third;
}

console.log(addThreeNums(1, 2, 3), ': sum of 3 should be -> 6');
console.log(addThreeNums(4, 2, 7), ': sum of 3 should be -> 13');

// EX 3:
// The `func` keyword was updated to be `function`
function makeFreshPesto() {
  console.log(
    'Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper'
  );
  console.log('Pulse basil and pine nuts.');
  console.log('Add garlic and cheeses.');
  console.log('Slowly pour in oil.');
  console.log('Season.');
}

makeFreshPesto();

//  EX 4:
// I cleaned up the formatting and added a semicolon to the return statement. I also added a function call so we could see the code working properly.
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;

  return avg;
}

console.log(average(2, 4), ': avg should be -> 3');
console.log(average(-1, 6), ': avg should be -> 2.5');
