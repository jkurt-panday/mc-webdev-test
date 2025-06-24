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