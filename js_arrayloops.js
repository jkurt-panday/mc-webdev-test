// Arrays and loops

let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

console.log(iceCreamFlavors[2])

// changing the value

console.log(iceCreamFlavors[4] = "Butter Pecan")

// adding new value to the last

console.log(iceCreamFlavors[5] = 'Cookie Dough')

// using .push()

console.log(iceCreamFlavors.push("Mango"))  // returns the index of 'Mango'
// console.log(iceCreamFlavors.pop())

// length of array
console.log(iceCreamFlavors.length)

// values assigned and passed through the log() are retained in the OG arrays
console.log(iceCreamFlavors)



// loops
let i = 0
for (i; i < 3; i++) {
    console.log(i)
}

while (i < 3) {
    console.log(i)
    i++
}

do {
    console.log(i)
    i++
} while(i < 3)