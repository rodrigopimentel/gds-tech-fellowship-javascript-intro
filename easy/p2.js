// Rodrigo Pimentel
// GDS Tech Fellowship
// 2022/07/01

// Coding Challenge: JavaScript Introduction
// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters. Example output: “The name Thomas is longer than John by 2 characters”

const longerName = (name1, name2) => {
    if (name1.length === name2.length) {
        console.log(`The name ${name1} is the same length as ${name2}.`);
    } else if (name1.length > name2.length) {
        console.log(`The name ${name1} is longer than ${name2} by ` + (name1.length - name2.length) + ' characters');
    } else {
        console.log(`The name ${name2} is longer than ${name1} by ` + (name2.length - name1.length) + ' characters');
    }
}

let myName1 = 'Bernard Sanders', myName2 = 'Eugene Debs';
longerName(myName1, myName2);