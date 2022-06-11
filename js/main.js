/*
    refference: 

    case: solve for 14
    14: 2 + 7 = 0;
    7: 2 + 3 = 1;
    3: 2 + 1 = 1;
    1: 2 + 0 = 1;

    case: solve for 5
    5: 2 + 2 = 1;
    2: 2 + 0 = 0;
    0: 2 + 0 = 1; 

    case: solve for 2003;
    2003 : 2 + 1001 = 1;
    1001 : 2 + 500 = 1;
    500 : 2 + 250 = 0;
    250 : 
    
    case: solve for 4
    4: 2 + 2 = 0;
    2: 2 + 1 = 0;
    1: 2 + 0 = 1;


*/
// DOM elements
const numInput = document.querySelector('#num-input');
const binOutput = document.querySelector('#bin-output');
const body = document.querySelector('body');

// clear all spaces in textarea
body.onload = () => {
    numInput.value = '';
    binOutput.value = '';
};

// return a binary & convert x to binary code
function binary(x) {
    let binary = [];
    let num = x;

    while (num > 0) {
        let count = binary;
        let result = num / 2;

        if (!Number.isInteger(result)) {
            count.push('1');
            result = result - 0.5;
        } else {
            count.push('0');
        }

        binary = count;
        num = result;
    }

    return binary.reverse().join('');
}

// check if the input only a number, if not it will automaticaly remove
function numOnly(char) {
    const isValid = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    if ((char >= 48 && char <= 57) || char === 8) {
        const input = numInput.value
            .split('')
            .filter(x => isValid.includes(x))
            .join('');

        if (input === '') {
            binOutput.value = '';
        } else {
            binOutput.value = binary(parseInt(input));
        }
    } else {
        const poped = numInput.value;

        numInput.value = poped
            .split('')
            .filter(x => x !== ' ')
            .pop();
    }
}

// run numOnly
numInput.addEventListener('keyup', e => {
    numOnly(e.which);
});
