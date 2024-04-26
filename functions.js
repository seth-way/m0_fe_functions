// Defining Our Own Functions
// For each exercise below, write the function according to the requirements.
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting.
function greeting() {
  return 'Greetings and salutations, young wizard.';
}

var greetingText = greeting();

console.log('greeting() ->', greetingText);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
  return `Greetings and salutations, ${name}.`;
}

var customGreetingText = customGreeting('Dumbledore');

console.log('customGreeting() ->', customGreetingText);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName) {
  return `Greetings and salutations, ${firstName} ${middleName} ${lastName}.`;
}

var greetPersonText = greetPerson('Hermione', 'Jean', 'Granger');

console.log('greetPerson() ->', greetPersonText);

console.log('\n');

// 4: Write a function named square that takes in one number, and returns the square of that number.
function square(number) {
  return number * number;
}
// BONUS: Print a sentence that interpolates the return value of your square function.
console.log('3 squared is ' + square(3));
console.log('9 squared is ' + square(9));
console.log('-2 squared is ' + square(-2));

console.log('\n');

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(qty, item) {
  var itemStatus = item + ' - ';

  if (qty < 1) {
    itemStatus += 'OUT of stock!';
  } else if (qty < 4) {
    itemStatus += 'running LOW';
  } else {
    itemStatus += 'is stocked';
  }

  return itemStatus;
}

var status1 = checkStock(4, 'Coffee');
// => "Coffee is stocked"
console.log(status1);

var status2 = checkStock(3, 'Tortillas');
// => "Tortillas - running LOW"
console.log(status2);

var status3 = checkStock(0, 'Cheese');
// => "Cheese - OUT of stock!"
console.log(status3);

var status4 = checkStock(1, 'Salsa');
// => "Salsa - running LOW"
console.log(status4);
