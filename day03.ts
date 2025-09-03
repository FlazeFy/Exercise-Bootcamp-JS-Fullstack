// Write a code to display the multiplication table of a given integer.
// Nomor 1
console.log('Nomor 1');
const number1: number = 9;
for (let idx = 0; idx < number1; idx++) {
    console.log(`${number1} x ${idx+1}`);
}
console.log('\n');

// Write a code to check whether a string is a palindrome or not.
// Nomor 2 
console.log('Nomor 2');
const string2: string = 'madam';
let string2Reversed: string = '';

for (let i = string2.length - 1; i >= 0; i--) {
    string2Reversed += string2[i];
}

console.log(`${string2 === string2Reversed ? '' : 'not '}palindrome`);
console.log('\n');

// Write a code to convert centimeter to kilometer
// Nomor 3 
console.log('Nomor 3');
const cm1: number = 100000;
const km1 = cm1 / 100000;
console.log(`${km1} km`)
console.log('\n');

// Write a code to format number as currency (IDR)
// Nomor 4
console.log('Nomor 4');
const unformatNum1: number = 1000;
const numString: string = unformatNum1.toString();
let formatIDR: string = '';
let counter = 0;

for (let idx = numString.length - 1; idx >= 0; idx--) {
    formatIDR = numString[idx] + formatIDR; 
    counter++;

    if (idx !== 0 && counter % 3 === 0) {
        formatIDR = '.' + formatIDR;
    }
}

console.log(`Rp. ${formatIDR},00`);
console.log('\n');

// Write a code to remove the first occurrence of a given “search string” from a string
// Nomor 5
console.log('Nomor 5');
const sampletring5: string = "Hello world";
const findChar: string = "ell";
console.log(sampletring5.replace(findChar,'')) 
console.log('\n');

// Write a code to capitalize the first letter of each word in a string
// Nomor 6
console.log('Nomor 6');
const sampletring6: string = "hello world";
let capitalized = "";
let newWord = true;

for (let i = 0; i < sampletring6.length; i++) {
    const char = sampletring6[i];

    if (newWord && char !== " ") {
        capitalized += char.toUpperCase();
        newWord = false;
    } else {
        capitalized += char;
    }

    if (char === " ") {
        newWord = true;
    }
}
console.log(capitalized);
console.log('\n');

// Write a code to swap the case of each character from string
// Nomor 7
console.log('Nomor 7');
const sampletring7: string = "The QuiCk BrOwN Fox";
let swap = "";

for (let i = 0; i < sampletring7.length; i++) {
    const char: string = sampletring7[i];
    
    if(char.toUpperCase() == char){
        swap += char.toLowerCase()
    } else {
        swap += char.toUpperCase()
    }
}
console.log(swap)
console.log('\n');

// Write a code to find the largest of two given integers
// Nomor 8 
console.log('Nomor 8');
const num1: number = 42;
const num2: number = 27;
let biggest: number = num1;

if(num1 < num2){
    biggest = num2
} 
console.log(biggest)
console.log('\n');

// Write a a conditional statement to sort three numbers
// Nomor 9 
console.log('Nomor 9');
const num3: number = 42;
const num4: number = 27;
const num5: number = 18;

let smallest: number, middle: number, biggest2: number;

if (num3 <= num4 && num3 <= num5) {
    smallest = num3;
    if (num4 <= num5) {
        middle = num4;
        biggest2 = num5;
    } else {
        middle = num5;
        biggest2 = num4;
    }
} else if (num4 <= num3 && num4 <= num5) {
    smallest = num4;
    if (num3 <= num5) {
        middle = num3;
        biggest2 = num5;
    } else {
        middle = num5;
        biggest2 = num3;
    }
} else {
    smallest = num5;
    if (num3 <= num4) {
        middle = num3;
        biggest2 = num4;
    } else {
        middle = num4;
        biggest2 = num3;
    }
}

console.log(`${smallest}, ${middle}, ${biggest2}`);
console.log('\n');

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// Nomor 10
const guessType: string = "hello";
console.log('Nomor 10');

if (typeof guessType === "string") {
    console.log(1);
} else if (typeof guessType === "number") {
    console.log(2);
} else {
    console.log(3);
}

console.log('\n');

// Write a code to change every letter a into * from a string of input
// Nomor 11
console.log('Nomor 11');
const text: string = 'An apple a day keeps the doctor away';
let newText: string = '';
for (let idx = 0; idx < text.length; idx++) {
    const char: string = text[idx];

    if(char.toLowerCase() == 'a'){
        newText += '*';
    } else {
        newText += char;
    }
}

console.log(newText);
console.log('\n');