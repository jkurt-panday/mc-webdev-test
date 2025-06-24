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


// challenge

console.log("Challenge")

// for each

// iceCreamFlavors.forEach((elem) => console.log(elem))

// for of
// for (const elem of iceCreamFlavors) {
//     console.log(elem)
// }

// map()
// iceCreamFlavors.map((elem) => console.log(elem))



// assignment

// lists every 3rd number

/*  0 1 2
    3 4 5
    6 7 8
    9 10 11 
    12 13 14
    15 16 17
    18 19 20*/

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 2)
        console.log([i])
}

/*  1 2 3
    4 5 6 
    7 8 9 */

for (let i = 1; i < 20; i++) {
    if (i % 3 == 0) 
        console.log((i))
}