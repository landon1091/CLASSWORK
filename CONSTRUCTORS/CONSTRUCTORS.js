//making constructors the bad way
function Person1(name, job) { //creates an object called Person. 
    this.name = name;
    this.job = job;
}

Person.prototype.getName = function getName() {  //adds a property to the Person object called getName that assagns a name to a name property.
    return this.name;
}

var goodGuy = new Person1 ("Aang", "Avatar"); // create new object using the Person constructor
console.log(goodGuy.getName())


// Constructor, the good way -----------------------------------------
class Person {
    constrctor (name, job) {
        this.name = name;
        this.job = job;
    }
    getName() {
        return this.name;
    }
    getJob() { 
        return this.job;
    }
}

let goodGuy = new Person("Neo", "the one")
// console.log(goodGuy)

// ES6 how to extend and add to an existing Object-----------------------

class SuperHero extends Person {
    constructor (name, heroName, superPower) {
        super(name)  //super lets your use the same name property from person  
        this.heroName = heroName;
        this.superPower = superPower;
    }
    secretIdentity() {
        return `${this.heroName} is ${this.name}!!`
    }

}

let batman = new SuperHero("Bruce Wayne", "I'm Batman")
console.log(batman/secretIdentity)



// getter and setter -----------------------------------------
class Person {
    constructor(name) {
        this.name = name;
    }
    set name (name) {
        this._name = name;
    }
    get name() {
        return this._name = name;
    }
}

let goodGuy = new Person('Jim Gordon');
console.log(goodGuy.name);
goodGuy.name = "James Gordon"
console.log(goodGuy.name);

let student = {name: "A-aron"}
let status = new Map();

status.set(name, "A-aron");
status.set("feeling", "churlish");
console.log(status.get(student.name));
console.log(status.get('feeling'));