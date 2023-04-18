// last name output
console.log('My last name is Yatsiuk');

//operations with variables
let userName, userAge;

userName = 'Alfredo';
userAge = 29;

console.log(userName);
console.log(userAge);

userName = userAge;

console.log(userAge);
console.log(userAge);

//creating an obj
let myObject = {
    String: 'Bruh',
    Number: 998,
    Boolean: true,
    Undefined: undefined,
    Null: null
  };

console.log(myObject);

//confirm function
let isAdult = confirm('Are you adult?');

console.log(isAdult);

//operations with variables 2.0
let firstName = "Yana";
let lastName = "Yatsiuk";
let groupNum = "753";
let yearOfBirth = 2001;
let isMarried = false;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof groupNum);
console.log(typeof yearOfBirth);
console.log(typeof isMarried);

let nullVar = null;
let undefinedVar = undefined;

console.log(typeof nullVar);
console.log(typeof undefinedVar);

//prompt function
let login = prompt("Enter your login:");
let email = prompt("Enter your email:");
let password = prompt("Enter your password:");

let message = `Dear User, your email is ${email}, your password is ${password}.`;

alert(message);

//calculations 
let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 30;

console.log("Seconds in an hour: " + secondsInHour);
console.log("Seconds in a day: " + secondsInDay);
console.log("Seconds in a month: " + secondsInMonth);