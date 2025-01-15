JavaScript Basics Documentation

Variable Declaration

JavaScript supports three ways to declare variables:
	1.	var (old way):

var name = 'John';

	•	Function-scoped.
	•	Can be redeclared and updated.

	2.	let:

let name = 'John';

	•	Block-scoped.
	•	Can be updated but not redeclared in the same scope.

	3.	const:

const pi = 3.14;

	•	Block-scoped.
	•	Cannot be updated or redeclared.

Primitive Data Types
	•	string
	•	number
	•	boolean
	•	undefined
	•	null

Example:

let isApproved = false; // boolean
let lastName = null; // null
console.log(typeof isApproved); // boolean
console.log(typeof lastName); // object

Objects

Objects in JavaScript are collections of key-value pairs.

let person = {
    name: 'Parsa',
    age: 18
};

Accessing Properties:
	1.	Dot notation:

console.log(person.name);


	2.	Bracket notation:

let selectedProperty = 'name';
console.log(person[selectedProperty]);

Arrays

Arrays are used to store multiple values in a single variable.

let firstArray = ['test', 'asdf'];
console.log(firstArray[0]); // 'test'
firstArray[2] = 1; // Adding a new element
console.log(firstArray.length); // 3

Functions

Functions perform tasks or calculate values.
	1.	Task-Performing Function:

function greetToPersonObject(personObject) {
    console.log('Hello ' + personObject.name);
}
greetToPersonObject(person);


	2.	Value-Returning Function:

function square(number) {
    return number * number;
}
console.log(square(16)); // 256

Operators

Arithmetic Operators

+  -  /  *  %  **  ++x  x++  --x  x--

Assignment Operators

x += 2;
x *= 2;

Comparison Operators
	1.	Relational:

>=  <=  <  >


	2.	Equality:
	•	Loose equality (==): Converts types before comparison.

console.log(1 == '1'); // true


	•	Strict equality (===): No type conversion.

console.log(1 === '1'); // false



Ternary Operator

let type = points > 100 ? 'gold' : 'silver';

Logical Operators
	1.	AND (&&)
	2.	OR (||)
	•	Short-circuiting:

console.log(false || 'mosh'); // 'mosh'
console.log(false || 1 || 2); // 1


	•	Example:

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); // 'red'


	3.	NOT (!)

Bitwise Operators

Binary-level operations:

&  |  ^  ~  <<  >>  >>>

Falsy Values

These are treated as false in a Boolean context:

false
undefined
null
0
''
NaN

Control Flow

if Statement
	1.	Single-line statement:

if (condition) statement;


	2.	Block statement:

if (condition) {
    statement;
} else if (anotherCondition) {
    statement;
} else {
    statement;
}



switch Statement

Useful for multiple conditions:

let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    default:
        console.log('Not logged in');
}

Alternate using if-else:

if (role === 'guest') console.log('Guest user');
else if (role === 'moderator') console.log('Moderator user');
else console.log('Not logged in');

Summary

This guide outlines the basic concepts of JavaScript, including variable declaration, data types, objects, arrays, functions, operators, and control flow. Each topic includes examples and notes about multiple ways to implement functionality. For further learning, practice writing small programs to solidify these concepts.