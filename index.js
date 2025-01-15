console.log('part 2 js')



// prillars of OOP

    // encapsulation
        // grouping variables and founctions into objects . reduce complexity increase reusablitiy 
    //abstraction
        // hiding a few founctions and variables which result in simpler interface and reduce the impact of change
        // hidding details and complaxicity
    //inheritance
        // inhertanceing stuff 
    // polymorphism
        // poly means many morthism means form 
        // refactor ugly swithc and cases 
// objects
    // propertiys
    // methods 


// object literal

let person = {
    name: 'parsa',
    hight: 200,
    talk: function talk(){
        return `hello Im ${this.name}`
    }
};

console.log(person.talk())


// factory or constrocteer 
function createPerson(name, hight) {
    return {
        name,
        hight,
        talk: function(){
            return `hello i m ${this.name}`
        }
    }
}
let person1 = createPerson('parsa', 100);
console.log(person1.talk());
console.log(person1.constructor);



// constructor function if we use this and new


function CreatePerson(name, hight){
    this.name = name;
    this.hight = hight;
    this.talk =  function(){
        return `hello i m ${this.name}`
    }
    // when we use new it will return this auto
}
// this two lines are the same and this will refrence the empty object  
let person2 = new CreatePerson('parsa', 100);
CreatePerson.call({}, 'parsa', 100);
CreatePerson.apply({}, ['parsa', 100]);
// apply and call are the same but apply gets an argument

// this two wrong lines are the same and both refrence to the window object 
    // person2 = CreatePerson('parsa', 100);
    // CreatePerson.call('parsa', 100)


console.log(person2.talk());
console.log(person2.constructor);


let x = {};
// js engine will do this let x = new OBject():


if ('name' in person1)
    console.log('it has a name');

// abstraction role: hide the details and expose only the essenionals 
    // how to implant private props and methods
    // useing let in the constructor function can hide stuff 
    function CreatePerson2(name) {
        this.name = name;
        let passwordSalt = 'salt'
        
        let genratePasswordHash = function(){
            // logic of hashing
            return 'hash'
        }

        this.genratePassword = function(){
            return genratePasswordHash() + passwordSalt
        }

    }
    let user = new CreatePerson2('parsa');
    console.log(user.genratePassword());
    

    // now if i want to accsess the email i can use a method
    function CreatePerson3(name) {
        this.name = name;
        let email = '';
        this.getEmail = function(){
            return email;
        }
    }
    
    // if i want to get it as a prop 
    function CreateCircle4(name){
        this.name = name;
        let email = '';
        Object.defineProperty(this, 'email', {
            get: function(){
                return email
            },
            set: function(value){
                if (value.includes('a'))
                    email = value
                else
                    throw new Error('enter a valid email')
            }
        })
    }

    let user2 = new CreateCircle4('parsa')
    try{
        user2.email = 'parsa.nazerrr@gmail.com'
    }
    catch(e){
        console.log(e);
    }



// ingartance 
    // protetyp and classical inhaertance
    // base super paraent

    // every object in js inhrance from ojbectBase(not an officiail name) which is its prototype 

    let z = {};
    let y = {};
    Object.getPrototypeOf(x) === Object.getPrototypeOf(y) // this returns true becase of them uses the same instance of protatype
    // prototype is just a regualr boject 
    // in js engine it first search for the perperty in that object and then looks for it in the object that it inhartance from
    let myArray = []; // it inhrtance from myArray arrayBase and it inhetance from objectbase this is called multi levl inhrtance