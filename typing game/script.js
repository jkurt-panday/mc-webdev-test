// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;

// starting time
let startTime = Date.now();

// page elements
const quoteElement = document.getElementById('quote')
const messageElement = document.getElementById('message')
const typedValueElement = document.getElementById('typed-value')

document.getElementById('start').addEventListener('click', () => {
    // get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    // put the quote into an array of words
    words = quote.split(' ')
    // reset the word index for tracking
    wordIndex = 0

    // todo challenge 1 done
    typedValueElement.disabled = false;

    // UI updates
    // Create an array of span elements so we can set a class
    const spanWords = words.map(function(word) {
        return `<span>${word} </span>`
    });
    quoteElement.innerHTML = spanWords.join('');
    // highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
    // clear any prior messages
    messageElement.innerText = '';

    // setup the textbox
    // clear the textbox
    typedValueElement.value = '';
    // set focus
    typedValueElement.focus();
    // set the event handler

    // start the timer
    startTime = new Date().getTime();

    typedValueElement.addEventListener('input', () => {
        // get the current word
        const currentWord = words[wordIndex];
        // get the current value
        const typedValue = typedValueElement.value;

        if (typedValue === currentWord && wordIndex === words.length - 1) {
            // end of sentence
            // Display success
            const elapsedTime = new Date().getTime() - startTime;
            const message = `CONGRATULATIONS!  You finished in ${elapsedTime / 
                1000} seconds.`;
            messageElement.innerText = message;

            // todo challenge 1 done
            typedValueElement.disabled = true;
        }
        else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
            // end of word
            // clear the typedValueElement for the new word
            typedValueElement.value = '';
            // move to the next word
            wordIndex++;
            // reset the class name for all elements in quote
            for (const wordElement of quoteElement.childNodes) {
                wordElement.className = '';
            }
            // highlight the new word
            quoteElement.childNodes[wordIndex].className = 'highlight';
        }
        else if (currentWord.startsWith(typedValue)) {
            // current correct
            // highlight the next word
            typedValueElement.className = '';
        }
        else {
            // error state
            typedValueElement.className = 'error';
        }
    })
})

function disableInput() {

}