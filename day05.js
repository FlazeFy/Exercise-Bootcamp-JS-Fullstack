// Exercise : make a calculator function that if executed the return is different for each hit
console.log('\n');
function calculator(numA, numB, operator) {
    let res = 0;
    switch (operator) {
        case "+":
            res = numA + numB;
            break;
        case "-":
            res = numA - numB;
            break;
        case "/":
            res = numA / numB;
            break;
        case "*":
            res = numA * numB;
            break;
        default:
            return 'operator is not valid';
    }
    return res;
}
console.log(calculator(2, 4, '+'));
console.log(calculator(2, 4, '-'));
console.log(calculator(2, 4, '/'));
console.log(calculator(2, 4, '*'));
console.log(calculator(2, 4, ';'));
