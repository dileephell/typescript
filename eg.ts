// import { print } from "util";

// // Boolean
// let isDone : boolean = false;

// // Number
// let decimal : number = 6;
// let hex : number = 0xf00d;
// let binary : number = 0b1010;
// let octal : number = 0o744;

// //String
// let color : string = 'blue';
// color = 'red';

// let fullName : string = `Bob Bobbington`;
// let age : number = 37;
// let sentence : string = `Hello, my name is ${fullName}. I'll be ${ age +1 } years old next month.`;

// // Array
// let list1 : number[] = [1,2,3];

// let list : Array<number> = [1,2,3];

// // Declare a Tuple type
// let x : [string, number];
// // Initialize it
// x = ["hello", 10]; //OK
// //Initialize it incorrectly
// x = [10,"hello"]; // Error

// console.log(x[0].substr(1));   // OK
// console.log(x[1].substr(1));   // Error, 'number' does not have 'substr'.

// // ENUM


// //Any
// let notSure : any = 4;
// notSure = "maybe a string instead";
// notSure = false; // Okay, definitely a boolean

// let list2 : any[] = [1, true, "free"];
// list2[1] = 100;

// //Void
// function warnUser() : void {
//     alert("This is my warning message");
// }

// let unusable : void = undefined;

// //Undefined or Null
// // Not much else we can assign to these variables!

// let u : undefined = undefined;
// let n : null = null;

// //Type Assertions
// let someValue : any  = 'This is a string';
// let strLength : number = (<string>someValue).length;

// // Other Syntax 
// let someValue1 : any = 'This is a string';
// let strLength1 : number = (someValue1 as string).length;

// // Interfaces
// function printLabel(labelledObj : { label : string }) {
//     console.log(labelledObj.label);
// }

// let myObj = { size : 10, label : 'Size 10 Object' };
// printLabel(myObj);

// // Same example again using an interface
// interface LabelledValue {
//     label : string,
// }

// function printLabel(labelledObj : LabelledValue) {
//     console.log(labelledObj.label);
// }

// let myObj = {size : 10, label : 'Size 10 Object'};
// printLabel(myObj);

// // Pass an object to a function that only has a couple of properties filled in
// interface SquareConfig {
//     color? : string;
//     width? : number;
// }

// function createSquare( config : SquareConfig) : { color : string; area : number } {
//     let newSquare = {color : 'white' , area : 100};
//     if(config.color) {
//         newSquare.color = config.color;
//     }
//     if(config.width) {
//         newSquare.area =  config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({color : 'black'});


// // ReadOnly Properties

// interface Point {
//     readonly x : number;
//     readonly y : number;
// }

// let p1 : Point = { x : 10, y : 20 };
// // p1.x = 5; // Error!

// // let a : number[] = [1,2,3,4];
// // let ro : ReadonlyArray<number> = a;
// // ro[0] = 12; //error!
// // ro.push(5); //error!
// // ro.length = 100; // Error!
// // a = ro; // error!

// // a = ro as number[];

// // readonly vs const

// // Class types
// // Impllementing an interface

// // interface ClockInterface {
// //     currentTime: Date;
// // }

// // class Clock implements ClockInterface {
// //     currentTime: Date;
// //     constructor(h: number, m: number) { }
// // }

// // // Define methods in an interface
// // interface ClockInterface1 {
// //     currentTime : Date;
// //     setTime(d : Date);
// // }

// // class Clock1 implements ClockInterface {
// //     currentTime : Date;
// //     setTime(d : Date) {
// //         this.currentTime = d;
// //     }
// //     constructor(h : number, m : number) {

// //     }
// // }

// // Difference between static and instance sides of classes

// // interface ClockConstructor {
// //     new(hour : number, minute : number);
// // }

// // class Clock2 implements ClockConstructor {
// //     currentTime : Date;
// //     constructor(h : number, m : number) {
// //     }
// // }

// // Work with the static side of the class.

// // ClockConstructor for the constructor
// interface ClockConstructor {
//     new (hour : number, minute : number) : ClockInterface;
// }
// // ClockInterface for the instance methods.
// interface ClockInterface {
//     tick();
// }

// function createClock(ctor : ClockConstructor, hour : number, minute : number) : ClockInterface {
//     return new ctor(hour , minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h : number, m : number) {}
//         tick() {
//             console.log('Beep Beep');
//         }
//     }

// class AnalogClock implements ClockInterface {
//     constructor(h : number, m : number) {}
//     tick() {
//         console.log('tick tick');
//     }
// }

// let digital = createClock(DigitalClock , 12 , 17);
// let analog = createClock(AnalogClock, 7 , 32);

// // Function Types
// interface SearchFunc {
//     (source : string, substring : string) : boolean;
// }
// // Create a variable of afunction type and assign it a function of the same type

// let mySearch : SearchFunc;
// mySearch = function(source : string, substring : string) {
//     let result = source.search(substring);
//     return result > -1;
// }

// // For function types to correctly type-check.
// let mySearch1 : SearchFunc;
// mySearch = function(src : string, sub : string) : boolean {
//     let result = src.search(sub);
//     return result > -1;
//     }
//  }

 // Classes

 class Greeter {
     greeting : string;
     constructor(message : string) {
         this.greeting = message;
     }
     greet() {
         return "Hello, " + this.greeting;
     }
 }

 let greeter = new Greeter("World");
 //console.log(greeter);

 // Public, Private and Protected modifiers

 class Animal {
     public name : string;
     public constructor(theName : string) {
         this.name =  theName;
     }
     public move(distanceInMeters : number) {
         console.log(`${this.name} moved ${distanceInMeters}m.`);
     }
 }

 //Private
 class Animal1 {
    private name : string;
    constructor(theName : string) {
        this.name = theName;
    }
    new Animal1("Cat").name; // Error 'name is private'
 }

 //
 class Animal2 {
     private name : string;
     constructor(theName : string) {
         this.name = theName;
     }
}    
 class Rhino extends Animal2 {
     constructor() {
         super("Rhino");
     }
 }    

 class Employee1 {
     private name : string;
     constructor(theName : string) {
         this.name = theName;
     }
 }

 let animal = new Animal2("Goat");
 let rhino = new Rhino();
 let employee = new Employee1("Bob");

animal = rhino;
animal = employee; // Error : 'Animal' and 'Employee' are not compatible



// Udnerstanding Protected
class Person {
    protected name : string;
    constructor(name : string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department : string;
    constructor(name : string, department : string) {
        super(name);
        this.department = department;
    }
     
  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // Error
--------------------------
 class Person {
    protected name : string;
    protected constructor(theName : string) {
        this.name = theName;
    }
}

class Employee extends Person {
    private department : string;
    constructor(name : string, department : string) {
        super(name);
        this.department = department;
    }
     
  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John");// Error:  Constructor of class 'Person' is protected and only accessible within the class declaration.
