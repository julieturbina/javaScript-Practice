// //1. Variables and Data Types

var firstName = "John"; 
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

//declaring variables after initiation
var job;
console.log(job);
job = "Teacher";
console.log(job);

//variable naming rules
var $home = "Miami";
console.log($home);


// 2. Variable Mutation and Type Coercion

// Type Coersion

var firstName ="John";
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = "Teacher";
isMarried = false;
console.log(firstName + " " + job + " " + " " + age + " " + " Is he married?" + " " + isMarried + ".");

//Variable mutation
age = "Twenty eight";
job = "driver";

alert(firstName + " " + job + " " + " " + age + " " + " Is he married?" + " " + isMarried + ".");

var lastName = prompt("What is John's last name?");

console.log(firstName + " " + lastName + " "+ job + " " + " " + age + " " + " Is he married?" + " " + isMarried + ".");


// 3. Basic  Operators

// 4. Operator Precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// //muliple assignments

var x, y;
x = (3 + 5) * 4 - 6;
console.log(x, y);

// x = x * 2;
x *= 2;
console.log(x);
x -= 2;
console.log(x);

x += 1;
console.log(x);
x++;
console.log(x);
x++;
console.log(x);


// //Challenge 1

/* var markHeight = 1.69;
var markMass = 78;

var markBmi = markMass / (markHeight * markHeight);
console.log(markBmi);

var johnHeight = 1.95;
var johnMass = 92;

var johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);


var markBmiHeigher =  markBmi >= johnBmi;
console.log("Is Mark's BMI heigher than John's?" + " " + markBmiHeigher);
*/

//if/else statements

// 

// Boolean Logic

var firstName = "John";
var age = 2;

if (age >= 13 && age <= 19) {
    console.log(firstName + " " + "has is a teenager");
} else if (age >= 20) {
    console.log(firstName + " " + "is a man");
} else {
    console.log(firstName + " " + "he must be a baby");
}

// The ternary or conditional operator 

var firstName = "John";
var age = 16;

if (age >= 16) {
    console.log(firstName + " " + "can drink a beer");
} else if (age < 16) {
    console.log(firstName + " " + "drinks juice");
}



if (age >= 16) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log(drink);

// using the ternary operator as below = allows you to write an if else statement all on 1 line.

var drink = age >= 16 ? 'beer' : 'juice';
console.log(drink);

Switch statements 
1. the break stops the evaluation once the condition is met and the string is printed.
2. Default prints if no condition is met. (similar to an if/else statement)
3. multiple values can produce the same statement eg. case 'teacher','coder'/'instructor': 

Truthy values are considered true when evaluated (all values that are not falsy)

var height = 1.95;
if (height) {
    console.log("Variable is defined");
} else {
    console.log("Variable has NOT been defined");
}

Falsy (undefined, null, 0, " ", NaN) values are considered false when evaluated.

var weight; //value is undefined
if (weight) {
    console.log("Variable is defined");
} else {
    console.log("Variable has NOT been defined");
}

var weight = ""; //value is undefined
if (weight) {
    console.log("Variable is defined");
} else {
    console.log("Variable has NOT been defined because it is an empty string");
}

var weight = 0; //value is defined as 0
if (weight || weight ===0) {
    console.log("Variable is defined");
} else {
    console.log("Variable has NOT been defined");
}

Coding challenge

var scoreJohn = (89 + 0 + 103)/3;
var scoreMike = (116 + 94 + 123)/3;

console.log(scoreJohn, scoreMike);

if (scoreJohn > scoreMike) {
    console.log(" John' team won with" + scoreJohn + "points");
} else  if (scoreJohn < scoreMike) {
        console.log(" Mike' team won with" + " " + scoreMike + " " + "points");
} else {
    console.log("Both teams drew");
}


var scoreJohn = (89 + 120 + 103)/3;
var scoreMike = (116 + 94 + 123)/3;
var scoreMary = (97 + 134 + 105)/3;
console.log(scoreJohn, scoreMike, scoreMary);
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log(" John' team won with" + scoreJohn + "points");
} else  if ( scoreMike > scoreJohn && scoreMike > scoreMary) {
        console.log(" Mike' team won with" + " " + scoreMike + " " + "points");
} else { 
    console.log("Mary's team won with" + " " + scoreMary + " " + "points.");
}

// Functions: containers that hold lines of codes that can be reused

/*function nameOfFunction(argument or parameter that we 
 want to pass into the function, can be 0, a value or 
 multiple values separated by commas) {
 everyhing inside curly braces is a part of the function block   
}
call the function(pass in the value, argument and 1990 is passes in as birthYear)
the calculation will be made 2018-1990 = result is returned and will be
 stord a new variable called "ageJohn" 
*/

function calculateAge(birthYear) {
    return 2018-birthYear;
}
var ageJohn = calculateAge(1990);
console.log(ageJohn);

eg.2


Function Expression(pieces of code that always produces a single value =  2 + 3 = 5)
function without a name followed by the argument list

var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + " teaches kids to code.";
        case 'driver':
            return firstName + " drivea an uber.";
        case 'dsigner':
        return firstName + " made my dress.";
        default:
        return firstName + "does something else";
}
};
// call the function below
console.log(whatDoYouDo('teacher', 'Lucy'));
console.log(whatDoYouDo('driver', 'Tim'));
console.log(whatDoYouDo('designer', 'Jane'));

Function statement(perform action but do not produce a result or value)
eg. it returns undefined. 

Arrays(collections of variables that can be different data types
in brackets)you can't name each value. the order matters.

initialize new array(of names) in BRACKETS
var names = ['John', 'Mark', 'Lucy'];

console.log(names);
console.log(names[0]);
console.log(names.length);

//mutate array data

names[0] = 'Ralph';
console.log(names);

names[names.length] ='Mary';
console.log(names);

names[5] ='Ben';
console.log(names);

//different data types

var john = ['John', 'Smith', 28, 'designer', false];
console.log(john);

john.push('green');
john.unshift('Mr');
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer': 'John is a designer!';
console.log(isDesigner);

3. Coding challenge

var billFamily = [124, 48, 268];

function calculateTip (bill){
    var percentage;
    if (bill < 50){
        percentage = .20;
    } else if (bill >= 50 && bill <200) {
        percentage = .15;
    } else {
    percentage = .10;
    }
    return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]),
            calculateTip(bills[1]),
            calculateTip(bills[2])];
console.log(tips);

var finalBills = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2],];
console.log(finalBills);

Objects (key: value pairs = you use the key to name the value and
order does not matter.)  
object literal = in the curly braces.
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Luke', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.family);
console.log(john.lastName);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john.isMarried = true;
console.log(john);

// new onject syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1983;
jane.lastName = 'Smith';
console.log(jane);






/*=================Review below=========


Methods - attach functions to objects

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Luke', 'Emily'],
    job: 'teacher',
    isMarried: false
    calcAge:  function() {
        this.age = 2018 - this.birthYear;
    }
};
john.calcAge();
console.log(john);


//====================Review above============*/
 

4.Coding challenge

var mark = {
    fullName: 'Mark Smith',
    height: 1.69,
    mass: 92,
    calcBmi: function (){
        this.bmi = this.mass / ( this.height *  this.height);
        return this.bmi;
    }
};

var john = {
    fullName: 'John Doe',
    height: 1.95,
    mass: 98,
    calcBmi: function (){
        this.bmi = this.mass / ( this.height *  this.height);
        return this.bmi;
    }
};

if (john.calcBmi() > mark.calcBmi()) {
    console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (john.bmi < mark.bmi) {
    console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else {
console.log('Both men have equal BMI');
}

Loops and iteration

for loop
to count from 0 (i=0) to 10 (i<=10) and increase by 1 (i++) and console log llnumbers between 1 and 10
for (var i = 0; i <= 10; i++){
    console.log(i);
}
//increse by 2
for (var i = 0; i <= 20; i += 2){
    console.log(i);
}

var john = ['John', 'Smith', 28, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//while loop
while (i < john.length) {
    console.log(john[i]);
    i++;
}

var john = ['John', 'Smith', 28, 'designer', false];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
// John, Smith, designer
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
//John, Smith

//looping backwards

for (var i = john.length -1; i >= 0; i--) {
    console.log(john[i]);
}
// false, designer, 28, Smith, John


