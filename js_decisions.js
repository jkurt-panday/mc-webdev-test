// making decisions lesson

// let currentMoney = 23;
// let laptopPrice = 25;

// if (currentMoney >= laptopPrice) {
//     console.log("Getting a new laptop")
// }

// else {
//     console.log("Can't afford a new laptop, yet")
// }


// switch statement

let a = 2

switch(a) {
    case 1:
        a = 'one'
        break
    case 2:
        a = "two"
        break
    default:
        a = 'not found'
        break   
}

console.log(`The value of a is ${a}`)


let currentMoney
let laptopPrice
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2    // 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
    console.log('Getting a new laptop')
}

else {
    console.log('Can\'t afford a new laptop yet')
}


let firstNumber = 20
let secondNumber = 10
let biggestNumber  = firstNumber > secondNumber ? firstNumber : secondNumber

console.log(biggestNumber)

// Logical AND (&&)
let age = 25;
let hasLicense = true;

// if (age >= 18 && hasLicense) {
//   console.log("User is eligible to drive."); // This will be logged
// } else {
//   console.log("User is not eligible to drive.");
// }

let passed = (age >= 18 && hasLicense) 
                ? 'User is eligible to drive.' 
                : 'User is not eligible to drive'
console.log(passed)

// Logical OR (||)
let isWeekend = false;
let isHoliday = true;

// if (isWeekend || isHoliday) {
//   console.log("It's a day off!"); // This will be logged
// } else {
//   console.log("Time to work.");
// }

let toWorkOrNot = (isWeekend || isHoliday) ? 'It\'s a day off' : 'Time to work'
console.log(toWorkOrNot)

// Logical NOT (!)
let isLoggedIn = false;

// if (!isLoggedIn) {
//   console.log("Please log in to continue."); // This will be logged
// } else {
//   console.log("Welcome back!");
// }

(!isLoggedIn) ? console.log('Please log in to continue') : console.log('Welcome back')

// Combining logical operators
let score = 85;
let attendance = 92;
let passedExam = true;

// if ((score >= 70 && attendance >= 80) || passedExam) {
//   console.log("Student has successfully completed the course."); // This will be logged
// } else {
//   console.log("Student needs to re-evaluate the course requirements.");
// }

// ternary equivalent
let message = (score >= 70 && attendance >= 80 || passedExam) 
                ? 'Student has successfully completed the course.' 
                : 'Student nees to re-evaluate the course requirements.'

console.log(message)


// challenge from the lesson

let allStudents = [
  'C-',
  'B-',
  3,
  4,
  1,
  2
]

let studentsWhoPass = [];

/* logic
    if any letter grade is within the switch cases, the index from the
        'allStudents' array is pushed to the 'studentsWhoPass' array
    if any number grade is above or equal to 3, the index from the 'allStudents'
        array is pushed to the 'studentsWhoPassed' array, 
        the conditions won't check the letter grade
*/

for (let i = 0; i < allStudents.length; i++) {
    switch(allStudents[i]) {
        case 'A':
        case 'B':
        case 'A-':
        case 'B-':
        case 'C':
            studentsWhoPass.push(i)
            break
    }
    if (allStudents[i] >= 3) studentsWhoPass.push(i)
}

for (let i = 0; i < studentsWhoPass.length; i++) {
                console.log(`Student ${studentsWhoPass[i]} passed`)
            }