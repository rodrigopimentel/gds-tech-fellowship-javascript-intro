// Rodrigo Pimentel
// GDS Tech Fellowship
// 2022/07/01

// Coding Challenge: JavaScript Introduction
// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

const detectSentenceTone = sentence => {
    if (sentence === sentence.toUpperCase()) {
        console.log('You are shouting.')
    } else if (sentence === sentence.toLowerCase()) {
        console.log('You are whispering.')
    } else {
        console.log('You are talking normally.')
    }
}

let mySentence = window.prompt("type a sentence");
detectSentenceTone(mySentence);