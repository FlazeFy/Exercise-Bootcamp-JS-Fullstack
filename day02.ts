// Nomor 1 ================================================ 
// Write a code to check whether the number is odd or even 
// Example: 25 → odd number, 2 → even number
// Input
const n1a: number = 25;
const n1b: number = 2;

// Process : Check if odd or even by modulo
const typeA: string = n1a % 2 === 0 ? 'even' : 'odd'; 
const typeB: string = n1b % 2 === 0 ? 'even' : 'odd'; 

// Output
console.log(`${n1a} → ${typeA} number`);
console.log(`${n1b} → ${typeB} number`);
console.log('\n');

// Nomor 2 ================================================ 
// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number
// Input
const n2a: number = 7;
const n2b: number = 6;

// Declare
let resA: string = "";
let resB: string = "";

// Process 
let isPrimeA: boolean = true;
if (n2a <= 1) {
    isPrimeA = false;
} else {
    for (let i = 2; i * i <= n2a; i++) {
        console.log(`${n2a} % ${i}`)
        if (n2a % i === 0) {
            isPrimeA = false;
            break;
        }
    }
}
resA = isPrimeA ? "is a prime number" : "is not a prime number";

let isPrimeB: boolean = true;
if (n2b <= 1) {
    isPrimeB = false;
} else {
    for (let i = 2; i * i <= n2b; i++) {
        if (n2b % i === 0) {
            isPrimeB = false;
            break;
        }
    }
}
resB = isPrimeB ? "is a prime number" : "is not a prime number";

// Output
console.log(`${n2a} → ${n2a} ${resA}`);
console.log(`${n2b} → ${n2b} ${resB}`);
console.log('\n');

// Nomor 3 ================================================ 
// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 6

// Input
const n3a: number = 5;
const n3b: number = 3;

// Declare : Variable to contain the total each iteration
let total3a: number = 0;
let total3b: number = 0;

// Process : Sum each iteration
for (let idx = 1; idx <= n3a; idx++) {
    total3a += idx;
}
for (let idx = 1; idx <= n3b; idx++) {
    total3b += idx;
}

// Output
console.log(total3a);
console.log(total3b);
console.log('\n');

// Nomor 4 ================================================ 
// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

// Input
const number4a: number = 4;
const number4b: number = 6;

// Declare : Variable to contain the total each iteration
let total4a: number = 1;
let total4b: number = 1;

// Process : Sum of total multiple index each iteration
for (let idx = number4a; idx > 1; idx--) {
    total4a *= idx;
}
for (let idx = number4b; idx > 1; idx--) {
    total4b *= idx;
}

// Output
console.log(total4a);
console.log(total4b);
console.log('\n');

// Nomor 5 ================================================ 
// Write a code to print the first N fibonacci numbers
// Example: 15 → 610

// Input
const number5: number = 15;

// Declare : Variable that contain total of fibonaci
let fa: number = 0;
let fb: number = 1;

// Process :
for (let idx = 2; idx <= number5; idx++) {
    const fnext: number = fa + fb;
    fa = fb;
    fb = fnext;
}

// Output
console.log(fb);