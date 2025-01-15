// var old way 
//let name, lastname;
// const pi = 3.14


// primitives value types
/*
string 
number 
boolean 
undifined
null
*/

// let isApproved = flase;
// let lastName = null;
// typeof


let person = {
    name: 'parsa',
    age: 18
};

// acsess with two way
/*
person.name
let selectedProperty = 'name' 
person[selectedProperty]

*/

let firstArray = ['test', 'asdf']
firstArray[0]
firstArray[2] = 1
firstArray.length

// let name = 'parsa'
// console.log(name);

// perform a task
function greetToPersonObject(personObject) {
    console.log('hello ' + personObject.name);
}
// greetToPersonObject(person);


// caculate a value 
function square(number) {
    return number * number;
}

// console.log(square(16));


/* 
operatiors 
    arithemetic + - / * % ** ++x x++ --x x-- 
    assignment x+=2 x*=2
    comparison
        relational >= <= < >
        equality == === != !==
            lose quality 1 == '1' true
            strickt equality 1 === '1' false most of the times we use this
        ternary let type = points > 100 ? 'gold' : 'silver';
    logical
        and &&
        or || 
            false || 'mosh' will return 'mosh'
            false || 1 will return 1
            false || 1 || 2 will return 1 this is called short circeting

            let userColor = 'red';
            let defaultColor = 'blue';
            let currentColor = userColor || defaultColor;

        not !

    bitwise

*/

/* falsy
false
undefined
null
0
''
NaN
*/





// if (condition)
//     statment

// if (condition){
//     statment
// }
// else if (anotherCondition){
//     statment
// }
// else 
//     statment
// // another way
// else {
//     statment
// }



// let role = 'guest';

// switch (role) {
//     case 'guest':
//         console.log('guest user');
//         break
//     case 'moderator':
//         console.log('mod user');
//         break
//     default:
//         console.log('not loged in ')
// }
    

// if (role === 'guest') console.log('guest user in if');
// else if (role ==='moderator') console.log('mod user in if');
// else console.log('not loged in if ');



// for loops 

// for (let i = 1; i <= 5; i++) {
//     if (i % 2 === 0) console.log(i + 'is even');
// }

// let i = 0;

// while (i <= 5){
//     if (i % 2 === 0) console.log(i + 'is even in while loop');
//     i++
// }

// let i = 10
// do {
//     if (i % 2 === 0) console.log(i + ' is even in do while loop');
//     i++
// }while (i <= 5);


let parsaObject = {
    name: 'parsa',
    age: 30
} 
//for-in loop
// for (let key in person) {
//     console.log(key + ' is ' + parsaObject[key])
// }
// let colorArray = ['green', 'blue', 'red']
// for (let index in colorArray) {
//     console.log('index ' + index + ' is ' + colorArray[index])
// }


// for of 
// for (let color of colorArray) {
//     console.log(color);
// }
// doesnt work with object

// break continue


const circle = {
    radius: 1,
    location: {
        x:1, 
        y:1,
    },
    draw: function() {
        console.log('draw from the object ')
    }
}
circle.draw()
//factory founciton 
function createCircle(radius) {
    return {
        radius: radius,
        draw: function draw() {
            console.log('drawed from the createCircle'); 
        }
    }
}
let circleOfCreateCircle = createCircle(1)
circleOfCreateCircle.draw();


// factory shorter syntax
// this use the native js constracture Object()
function CreateCircle2(radius) {
    return {
        radius,
        draw() {
            console.log('drawed from 2');
            
        }
    }
}
let circleOfcreateCircle2 = CreateCircle2(1)
circleOfcreateCircle2.draw()

// this use our constractor 
function Circle(radius) {
    this.radius = radius,
    this.draw = function() {
        console.log('drawed');
        
    }
    return this
}

const circle1 = new Circle(1);
console.log(circle1);
console.log(Circle.constructor)


// const Circle5 = new Function('radius', `    
// this.radius = radius,
// this.draw = function() {
//     console.log('drawed');
    
// }
// `);
// const circle7 = new Circle5(1)
// console.log(circle7)

Circle.call({}, 1);
Circle.apply({}, [1]);



// when we use '' "" `` complailer do this new String()
// when we use true false new Boolen()
// when we use 1 2 3 => new Number()

//dynamic nature of objects in this trash lang

const parsaObject2 = {
    name: 'parsa'
}
parsaObject2.age = 10
delete parsaObject.age


/*
permtives values types
    Number
    String
    Boolen
    Symbol
    undifined
    null

Reference types
    Object
    Function
    Array

*/

// permitivs values vs refernce values types
let number = 10;
function increese(number) {
    number++
}
increese(number)
console.log(number); // return 10


let obj = {'value': 10}
function increeseObj(obj) {
    obj.value++;
}
increeseObj(obj);
console.log(obj.value); //returns 11

const square2 = {
    radius: 1,
    draw() {
        console.log('draw square');
    }
};

for (let key in square2) {
    console.log(key, square2[key], 'in');
}

for (let key of Object.keys(square2)){
    console.log(key, 'of')
}
for (let entry of Object.entries(square2)){
    console.log(entry, 'of entry')
}


//cloneing an object 

const mamalObject = {
    name: 'mamal',
    talk() {
        console.log(`${this.name} is talking`)
    }
}

// old way of copying 
// const copyOfmaml = {}
// for (key in mamalObject)
//     copyOfmaml[key] = mamalObject[key]
// console.log(`copy is ${copyOfmaml}`)


// new way of copying 
// const copyOfmaml2 = Object.assign({}, mamalObject)
// console.log(copyOfmaml2)

// thired way of copying an object
const copyOfmaml3 = {...mamalObject};
console.log(copyOfmaml3);



// Math object

// string object

const message = '  hello how are you   ';
console.log(message.includes('how'));
console.log(message.startsWith('hello'));
// this returns a new string
console.log(message.trim().replace('you', 'them'));
// white space remover 
console.log(message.trim());

console.log(message.trim().split(' '));


// template leteral
const name85 = 'parsa'
const messag2e = 
`
hello how are you ${name85}
'testing'
`
console.log(messag2e);


const now = new Date()
const date1 = new Date('May 11 2018 09:00')
const date2 = new Date(2018, 4, 11)
console.log(now);
console.log(date1);
console.log(date2);
// makeing an ojbect 
let address = {
    city: 'a', 
    zipcode: 'b', 
    street: 'c', 
}


// factory founction
function createAddrees(street, city, zipcode) {
    return {
        city,
        street,
        zipcode
    }
}

let address1 = createAddrees('gh', 'shiraz', 123)
console.log(address1);

// constractor 
function AddressObject(street, city, zipcode) {
    this.street = street,
    this.city = city, 
    this.zipcode = zipcode
    // this.showAddress = function() {
    //     console.log(`${this.city} - ${this.street} - ${this.zipcode}`)
    // }
    return this
}
let address2 = new AddressObject('ghasrodast', 'shiraz', '1') 
let address3 = new AddressObject('ghasrodast', 'shiraz', '1') 
// parsaAddress.showAddress()


// arrays
const nubmersArray = [1, 2, 3]
console.log(nubmersArray);
nubmersArray.push(4, 5, 6)
console.log(nubmersArray);
nubmersArray.unshift(0, -1)
console.log(nubmersArray);
// index many to delete and the items
nubmersArray
console.log(nubmersArray);


console.log(nubmersArray.indexOf(1));
console.log(nubmersArray.includes(1));
console.log(nubmersArray.lastIndexOf(1));

// search for an elemnt of refrence type


const courses = [ { id: 1, name: 'a' },]

const course = courses.find(function (course) {
return course.name === 'a';
});
console.log(course)
// arrow founcitn
const course2 = courses.find(course => {
return course.name === 'a';
});
console.log(course2);


const course3 = courses.find(course => course.name === 'a');
    console.log(course3);



//removeing element 
const nubmersArray2 = [1, 2, 3, 4]
nubmersArray2.splice(2, 1)
console.log(nubmersArray2);

let last = nubmersArray2.pop()
let first = nubmersArray2.shift()
console.log(last);
console.log(first);

// clearing an array
let numbers10 = [1, 2, 3];
let another = numbers10;
// S1 the problem is doesnt affect the refrence types
numbers10 = []
console.log(another)
console.log(numbers10)

// S2
numbers10.length = 0;

// S3 
numbers10.splice(0, numbers10.length)

//combining two array

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combined = array1.concat(array2);
let combined2 = [...array1, 'in the middle' ,...array2];
let copy = [...combined2]
console.log(combined);
console.log(combined2);


let slice = combined.slice(2, 5);
console.log(slice);


let nubmersArray3 = [1, 2, 3]
nubmersArray3.forEach(function(number) {
    console.log(number);
})

nubmersArray3.forEach(number => console.log(number))
nubmersArray3.forEach((number, index) => console.log(`${number} - in for each- ${index}`))
let joined = nubmersArray3.join('this is the spratoed string of joined')
console.log(joined);


let numbersArray4 = [3, 1, 2]
console.log(numbersArray4);

numbersArray4.sort()
console.log(numbersArray4);
numbersArray4.reverse()
console.log(numbersArray4);

// sorting by a property of objects

const users = [
    {id: 1, name: 'mansour'},
    {id: 2, name: 'Parsa'}
]

users.sort((a, b) => {
    nameA = a.name.toLowerCase()
    nameB = b.name.toLowerCase()
    if (nameA > nameB) return -1
    if (nameA < nameB) return 1 
    return 0
})
console.log(users);

let numbersArray5 = [5, 4, 7, -1, -5]

// let allPositive = numbersArray5.every(function(value) {
//     return value >= 0;
// });

let allPositive = numbersArray5.every(value => value >= 0
);


let atLeastOnePostive = numbersArray5.some(function(value) {
    return value >= 0;
});

console.log(allPositive);
console.log(atLeastOnePostive);

let posstiveValues = numbersArray5.filter(value => value >= 0)
console.log(posstiveValues);


let numbersArray6 = [1, 2, 3, 4];

let items = numbersArray6.map(n => '<li>' + n + '</li>');

let html = items.join('\n');
html = `<ul>\n${html}\n</ul>`
console.log(html);



// => after this shouldnt be {} if you want to put u should put it in a ()
const numbers = [11, -1, 2, 31];
const items2 = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }));
console.log(items2);




const numbersArray7 = [1, 2 , 3, 4, 5];

sum = 0;
for (number of numbersArray7)
    sum += number;
console.log(sum);

// another way of implanting the above code 
// it takes a founction with two input and the defualt of accumulator
result = numbersArray7.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(result);




function arrayFromRange(min, max) {
    let array = []
    for (let start = min; start<= max; start++)
        array.push(start)
    console.log(array);
    
}
arrayFromRange(-3, 6)


function include(array, searchElement) {
    for(value of array)
        if(value === searchElement) return true 
    return false
}
let searchArray = [6, 4, 3, 1];
console.log(include(searchArray, 6));

const numbersArray9 = [1, 1, 3, 4, 5, 6]
function except(array, excluded) {
    return array.filter(value =>  !excluded.includes(value))
}
console.log(except(numbersArray9, [1,3]));



const numbersArray10 = [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1];




function countBUllshit(array, searchElement) {
    counter = 0;
    for (element of array)
        if (element === searchElement) counter += 1 
    return counter
}

// result = numbersArray7.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
function countBUllshit2(array, searchElement) {
    let answer = array.reduce((counter, currentValue) => {
        if(currentValue === searchElement) {
            return counter + 1
        }
        return counter + 0
    }, 0)
    
    return answer
}

console.log(countBUllshit2(numbersArray10, 1));
console.log(countBUllshit(numbersArray10, 1));



function max(array) {
    let maxValue = array[0]
    for (value of array){
        if (value > maxValue) maxValue = value
    }
    return maxValue
}

function max2(array) {
    return array.reduce((maxValue, currentValue) => maxValue < currentValue? currentValue: maxValue, array[0])
}

console.log(max(numbersArray10));
console.log(max2(numbersArray10));



const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5}
]

let filterdMovies = movies
    .filter(movie => movie.year === 2018 && movie.rating > 4)
    .sort((a, b) => {
        if (a.rating > b.rating) return -1
        if (a.rating < b.rating) return 1
        return 0
    })
    .map(movie => movie.title)
// better way for sort .sort((a,b) => a.rating - b.rating) since its negtive 0 and postive 
console.log(filterdMovies);
 
// function declaration
function walk() {
    console.log('hello mother fucker');
}
// annoymous experssion 
const run = function() {
    console.log('fck Brendan Eich');
}
// named  experssion 
const run2 = function walk() {
    console.log('fck Brendan Eich');
}

let move = run;
run()
move()

// diffrence between function declaration and experssion
/**
 in dec we can call before we define but in expersion we cant call before defining this is for hoisting 
 */



function sum3(){
    let total = 0;
    for(value of arguments)
        total += value
    return total
 }

 console.log(sum3(1, 2, 3, 4));
 

// rest operator 
 function sum4(discount, ...args){
    total = args.reduce((a, b) => a + b)
    return total * (1 - discount)
 }

 console.log(sum4(0.3, 1, 2, 3, 4));


function test(arg1 = 1, arg2 = 2) {
    return arg1 + arg2
}

//defuilt last or give name
function interest (principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log(interest(10000, undefined, 5));



const person10 = {
    name: 'parsa',
    lastName: 'nazer',
    get fullName() {
        return this.name + ' ' + this.lastName
    }, 
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.')
        parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('enter correctly mother fucker')
        this.name = parts[0];
        this.lastName = parts[1];
    }
}
try {
    person10.fullName = ''
}
catch(e){
    console.log(e);

}
console.log(person10.fullName)


// var is founction scoped varibale but let and const are block scoped


// playVideo.call({ name: 'Mosh' }, 1, 2); 
// playVideo.apply({ name: 'Mosh' }, [1, 2]);
// playVideo.bind({ name: 'Mosh' })



// picture 2

let array1000 = []


const products = [
    {
      name: "Wireless Mouse",
      price: 25.99
    },
    {
      name: "Bluetooth Headphones",
      price: 89.99
    },
    {
      name: "Smartphone Charger",
      price: 15.49
    },
    {
      name: "Laptop Stand",
      price: 29.99
    },
    {
      name: "Portable Speaker",
      price: 49.99
    }
  ];
  

products.forEach((obj, index) => {
    obj.available = (index % 2 === 0);
});
console.log(products);

let total2 = products.reduce((total, currentObj) => {
    let add = currentObj.available ? currentObj.price: 0;
    return total + add;
}, 0)
console.log(total2);









