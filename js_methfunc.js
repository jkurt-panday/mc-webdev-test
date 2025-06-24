// methods and functions lesson

function displayGreeting(name) {
    // console.log("hello world")
    console.log(`Hello ${name}`)
}

displayGreeting("Bob")

function displayGreeting2(name, salutations = "Hello") {
    console.log(`${salutations}, ${name}`)
}

displayGreeting2("Jon")
displayGreeting2("Von", "Hi")

function createGreeting(name) {
    return `Hello ${name}`;
}

console.log(createGreeting("Jan"))

function displayDone() {
    console.log('3 seconds has elapsed')
}

setTimeout(displayDone(), 3000)