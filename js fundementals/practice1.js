// let firstColor = 'blue';
// let secendColor = 'red';

// console.log('first color is ' + firstColor);
// console.log('secend color is ' + secendColor);

// let cash;

// cash = firstColor;
// firstColor = secendColor;
// secendColor = cash;

// console.log('first color is ' + firstColor);
// console.log('secend color is ' + secendColor);


// let hour = 10

// if (hour >= 6 && hour < 12)
//     console.log('good morning');
// else if (hour >= 12 && hour < 18)
//     console.log('good afternoon');
// else
//     console.log('good evening');


// function max(num1, num2) {
//     console.log(num1 > num2 ? num1: num2);
// }


// max(2, 2)

// function Islandscape(width, hight){
//     return width > hight
// }


// function fizzBuzz(input) {
//     if (input % 3 === 0) 
//         console.log('fizz')
//     else if (input % 5 === 0)
//         console.log('buzz')
    

// }

// function fizzBuzz2(input) {
//     if (typeof input !== 'number')
//         return NaN
//     let answer = ''
//     if (input % 3 === 0)
//         answer = 'Fizz'
//     if (input % 5 === 0)
//         answer += 'Buzz'
//     return answer ? answer: input
// }

// console.log(fizzBuzz2(15))
// let speedLimit = 70
// function checkSpeed(speed) {
//     let upper = speed - speedLimit
//     if (upper <= 4) {
//         return 'ok'
//     }
//     let points = Math.floor(upper / 5)
//     if (points >= 12) {
//         return 'susspended'
//     }
//     return points
// }
// console.log(checkSpeed(130));


// function showNumber(number) {
//     for(let i=1; i <= number; i++)
//         console.log((i % 2 === 0 )? 'EVEN': 'ODD')
// }
// showNumber(10)



// function countTruthy(array){
//     let counter = 0
//     for(value of array)
//         if (value) counter++
//     return counter
// }

// let testArray = ['', undefined, null , 1, 2 ,3 , 'asdf']
// console.log(countTruthy(testArray))


// function showProperty(obj){
//     for(key in obj){
//         if (typeof obj[key] === 'string') console.log(key, obj[key])
//     }
// }

// let mansourObj = {
//     name: 'mansour',
//     age: 30, 
//     friend: 'parsa',

// }
// showProperty(mansourObj)


// function sum(limit) {
//     let sum = 0

//     for(let i = 1; i <= limit; i++){
//         if (i % 3 === 0 || i % 5 === 0) sum += i
//     }
//     return sum
// }

// console.log(sum(10))


// function grade(marks) {
//     let sum = 0;
//     for(let mark of marks) sum += mark
//     let avrage =  sum / marks.length
//     if (avrage < 60) {
//         return 'F'
//     }
//     elif (60 < avrage < 69){
//         return ''
//     }
// }
// marks = [80, 80, 50]
// console.log(grade(marks))


// function drawMario(row){
//     let string;
//     for(let i =0; i < row; i++){
//         string = ''
//         for(let j =0; j <= i; j++){
//             string += '*'
//         }
//         console.log(string)
//     }
// }
// drawMario(3)



// function Post(title, body, author) {
//     this.title = title, 
//     this.body = body, 
//     this.author = author,
//     this.views = 0,
//     this.comments = [],
//     this.isLive = false, 
//     this.add_view = function() {
//         this.views +=1
//     }
//     return this
// }

// let post1 = Post('hello', 'this is the first post', 'parsa');
// console.log(post1.views);
// post1.add_view()
// console.log(post1.views);


// const blog = {
//     title: 'a',
//     body: 'asdfasdf',
//     author: 'b',
//     views: 1,
//     comments: [
//         {author: 'a', body: 'b'}
//     ],
//     isLive: true
// }



// function areEqual(address1, address2) {
//     for(key in address1) 
//         if (address1[key] !== address2[key]) return false    
//     return true
// }
// console.log(areEqual(address2, address3))