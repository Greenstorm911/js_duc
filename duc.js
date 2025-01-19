// varibles 

    var varibale1 = 'test1'; // function scooped variable it interfers with window object 
    let varible2 = 'test2'; // block scooped variable 
    const varible3 = 'test3'; // block scooped variable that is wont change the refrence

// data types

/*
    primitives value types
        string
        number
        boolean
        undifined
        null
    refrence value types
        Object
            Function
            Array
*/
typeof varibale1 // returns type of the varible



// an example of object

let person1 = {
    name: 'parsa',
    age: 18,
    graguated: false,
    talk: function(){
        return 'hello'
    }
};
// accsessing object propertiys
person1.name
person1["name"]
// adding new property
person1.favColor = 'red';
// removeing property
delete person1.favColor



// arrays
    // accsessing array indexes
    let nameArray = ['parsa', 'mansour', 'mamaliz'];
    nameArray[0];

    // adding a new value to the array
    nameArray[3] = 'amir';

    // array methods
    nameArray.length // return the size of the array


// functions 
    // defineing the first way
    function greetToUser(name) {
        return `hello to ${name}`
    }


// operatiors

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

// falsy values 

/*
false 
undifined 
null
''
0
NaN
*/

let car = [];
// conditions
    // if else 
        if (true) 
            car[0] = 'bmw';

        if (car){
            car[1] = '206';
            car[2] = '405';
        }
        else if (true) {
            car[1] = '405';
        }
        if (car) car[0] = ''
        else car[0] = ''
    // switch case

    let role = 'admin'
    let accsess;

    switch (role) {
        case 'admin':
            accsess = 'full';
            break
        case 'user':
            accsess = 'download';
            break
        default:
            accsess = 'no accsess';
    }


// for loops 

    // normal for loops 
    let number;
    for(let i = 1; i < 10; i++){
        number = i;
    }

    // while loop
    let counter = 1;
    while (counter <= 10){
        counter++
    }

    // do while loop
    counter = 1;
    do {
        counter++
    }while(counter<10)

    // for-in loop
    let phone = {
        name: 'iphone 13 pro',
        screenSize: 6.4,
        camera: 12,
    }
    for (let key in phone){
        text = `key is ${key} - value is ${phone[key]}`;
    }
    // for-of loop
    let colors = ['red', 'blue', 'green'];
    for (let color of colors){
        text = `color is ${color}`
    }

    // break and countine is useable at all of them



// factory function

    // first way
    function createCircle(redius) {
        return {
            redius: redius,
            draw: function draw() {
                return 'drawed a circle with the given radius'
            }
        }
    }
    let circle1 = createCircle(1)

    // secend way: this use the native js constracture Object()
    function createCircle2(redius){
        return {
            redius,
            draw() {
                return 'drawed a circle with the given radius'
            }
        }
    }
    let circle2 = createCircle2(2)

    // thired way: this use our constractor
    function Circle(redius) {
        this.radius,
        this.draw = function() {
            return `$drawed a circle with ${this.radius} radius`
        }
        return this
    }
    let circle3 = new Circle(5);
    circle3.draw()
    Circle.constructor

    Circle.call({}, 1);
    Circle.apply({}, [1]);

    // when we use '' "" `` complailer do this new String()
    // when we use true false complailer do this new Boolen()
    // when we use 1 2 3 => complailer do this new Number()



// permitivs values vs refernce values types
    
    // permitives
        let money = 10;
        function increese(money) {
            money++
        }
        increese(money)
        money // money is  10

    // referance
        let obj = {'value': 10}
        function increeseObj(obj) {
            obj.value++;
        }
        increeseObj(obj);
        obj.value // value is 11



// useing for-of for objects 

    // returns keys of an object
        for (let key of Object.keys(person1)){
            key
        }

    // returns an object with a pair key value of each property 
    for (let entry of Object.entries(person1)){
        entry
    }



let product = {
    name: 'mac book',
    price: 1000,
    inStuck: false,
    
} 


// cloneing an object 
    // old way
    let productCopy;
    for (let key in product) {
        productCopy[key] = product[key];
    }
    // ternery operator
    productCopy = {};
    productCopy = {...product};
    // object assign way
    productCopy = {};
    productCopy = Object.assign({}, product)


// Math object


// string object methods

    let message = '   hello this is the user input      ';
    // returns a new string 
    message = message.trim() // returns a new string
    message.includes('hello'); // returns a boolen 
    message.startsWith('hello'); // returns a bool when strats with the given string
    message = message.replace('hello', 'parsa');
    let messageList = message.split(' ');



// template leteral

    const messageToSend = 
    `
    hello how are you ${person.name}
    'testing'

    `

// Date object
    let now = new Date()
    const date1 = new Date('May 11 2018 09:00')
    const date2 = new Date(2018, 4, 11)


// arrays
    let streets = ['ghasrodasht', 'sadra', 'afif'];
    // adds the values in order at the end of the of the arry 
    streets.push('new street1', 'new street2', 'new street3');
    // adds the values in order to the beging
    streets.unshift('go to the first item', 'go to the secend item');
    // to search i dont remmber lol TODO
    streets.splice(2, 0, 'a', 'b')
    // returns index of the given elemnt
    streets.indexOf('sadra')
    // returns a boolen 
    streets.includes('sadra')
    // returns the last index of 
    streets.lastIndexOf('sadra')
    // removes the last element and returns the deleted item
    let last = nubmersArray2.pop()
    // removes the first element and returns the deleted item
    let first = nubmersArray2.shift()



// searching 
    
    // in array:
        streets.indexOf('sadra')
        // returns a boolen 
        streets.includes('sadra')
        // returns the last index of 
        streets.lastIndexOf('sadra')

    // in objects 
        const courses = [ 
            { id: 1, name: 'a' },
            { id: 2, name: 'b' },
            { id: 3, name: 'c' },
        ];
        let curse2 = courses.find((curse) => curse.id === 2);
        let curse1 = courses.find(function(curse){
            return curse.id === 1;
        });


// clearing an array
    let foods = ['berger', 'pizza']
    // first sulotion
        foodsCopy = foods;
        foods = []; 
        foodsCopy // it still will have the vlaues 
        foods // will be empty

    // secend sulotion
        foods.length = 0; // it will empty copy too BEST WAY
    
    // thired way
        foods.splice(0, foods.length)
    
// combining two array

    // first sulotion
        let array1 = [1, 2, 3];
        let array2 = [4, 5, 6];
        let combined = array1.concat(array2);
    
    // secend way 
        let combined2 = [...array1, 'in the middle' ,...array2]; // BEST WAY



// createing a slice of an array 
    let items = ['book', 'phone', 'lap top', 'glasses', 'notebook'];
    let slice = items.slice(2, 5);


// foreach 
    items.forEach(item => console.log(item));
    items.forEach((item, index) => console.log(`index: ${index} - item: ${item}`));
    let joined = items.join(' ');


// sort
    items.sort()
    items.reverse()

// sort for objects
    let users = [
        {id: 1, name: 'mansour'},
        {id: 2, name: 'mamal'},
        {id: 3, name: 'parsa'}
    ]
    users.sort((user1, user2) => {
        if (user1.id > user2.id) return -1
        if (user1.id < user2.id) return 1
        return 0
    })


// more array methods
    let numbersArray1 = [-1, -5, -3, 1, 7, 2];
    let allPositive = numbersArray1.every(number => number >= 0);
    let atLeastOnePostive = numbersArray1.some(number => number >= 0);
    let posstiveNumbers = numbersArray1.filter(number => number >= 0);
    let htmlTable = numbersArray1.map(number => '<li>' + number + '</li>').join('\n');
    let sum = numbersArray1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)


// practices
    // recreate include 
    // create except
    // counter elemnt of an array
    // find max an array
    // movie practice 
    // sum an array useing reduce


// function arguments
    function sumWitharguments(){
        for (value of arguments) console.log(value);
    }
    sumWitharguments(1, 2, 'asdf')
    // argeuments is an object here but becase it has an itter we can use for-of

    // useing the rest operator
    function testFounction(arg1, ...args){
        // args here is an array so we can use array methods like reduce
    }

    // we can set defult value for an argument like here
    function setDefulat(pi = 3.13){

    }
    // we also can override the defualt values


// createing a an object with a new filed with getter and setter

    let mansourObj = {
        name: 'mansour',
        lastName: 'marzban',
        get fullName(){
            return this.name + ' ' + this.lastName
        },
        set fullName(value){
            if (typeof value !== 'string')
                throw new Error('input should be an string');
            let inputArray = value.split();
            if (inputArray.length !== 2)
                throw new Error('input a valid fullname');
            this.name = inputArray[0];
            this.lastName = inputArray[1];
        }
    }
        
    try {
        mansourObj.fullName = ''
    }
    catch(e){
        console.error(`error: ${e}`)
    }



let movie = {
    name: 'arcane',
    carecters: ['jinx', 'vi', 'catelin'],
    showTags(){
        this.carecters.forEach((carecter) => console.log(carecter))
    }
}


// apply and call are the same but apply gets an argument
    // let person2 = new CreatePerson('parsa', 100);
    // CreatePerson.call({}, 'parsa', 100);
    // CreatePerson.apply({}, ['parsa', 100]);



// this two wrong lines are the same and both refrence to the window object 
    // person2 = CreatePerson('parsa', 100);
    // CreatePerson.call('parsa', 100)