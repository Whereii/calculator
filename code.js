let one = document.querySelector('.one');
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let zero = document.querySelector('.zero')
let divide = document.querySelector('.divide')
let multiply = document.querySelector('.multiply')
let equal = document.querySelector('.equal')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let display = document.querySelector('#display')
let clear = document.querySelector('.clear')
let operatorBtn = document.querySelectorAll('.oper')
let total = [];
let previous
let next
let operator
/*
for(let i = 0; i< operatorBtn.length; i++){
    operatorBtn[i].addEventListener('click', function() {
        next = display.textContent;
        if(operator === '/'){
            display.textContent = mathItUp['/'](previous, next);
            previous = display.textContent;
        } else if (operator === '*') {
            display.textContent = mathItUp['*'](previous, next);
            previous = display.textContent;
        } else if (operator === '+'){
            display.textContent = mathItUp['+'](previous, next);
            previous = display.textContent;
        } else if (operator === '-') {
            display.textContent = mathItUp['-'](previous, next);
            previous = display.textContent;
        }
    })
}
*/

one.addEventListener('click', function () {
    display.textContent += '1';
});
two.addEventListener('click', function () {
    display.textContent += '2';
});
three.addEventListener('click', function () {
    display.textContent += '3';
});
four.addEventListener('click', function () {
    display.textContent += '4';
});
five.addEventListener('click', function () {
    display.textContent += '5';
});
six.addEventListener('click', function () {
    display.textContent += '6';
});
seven.addEventListener('click', function () {
    display.textContent += '7';
});
eight.addEventListener('click', function () {
    display.textContent += '8';
});
nine.addEventListener('click', function () {
    display.textContent += '9';
});
zero.addEventListener('click', function () {
    display.textContent += '0';
});
divide.addEventListener('click', function () {      
    next = display.textContent;
    if(operator === '/'){
         display.textContent = mathItUp['/'](previous, next);       //This snippet of code is in all the operators including the equal. It basically runs the math on the previous and next variables
        previous = display.textContent;
    } else if (operator === '*') {
        display.textContent = mathItUp['*'](previous, next);
        previous = display.textContent;
    } else if (operator === '+'){
        display.textContent = mathItUp['+'](previous, next);
        previous = display.textContent;
    } else if (operator === '-') {
        display.textContent = mathItUp['-'](previous, next);
        previous = display.textContent;
    }
    previous = display.textContent;
    display.textContent = '';
    operator = '/';
});
multiply.addEventListener('click', function () {
    next = display.textContent;
    if(operator === '/'){
        display.textContent = mathItUp['/'](previous, next);
        previous = display.textContent;
    } else if (operator === '*') {
        display.textContent = mathItUp['*'](previous, next);
        previous = display.textContent;
    } else if (operator === '+'){
        display.textContent = mathItUp['+'](previous, next);
        previous = display.textContent;
    } else if (operator === '-') {
        display.textContent = mathItUp['-'](previous, next);
        previous = display.textContent;
    }
    previous = display.textContent;
    operator = '*';
    display.textContent = '';
});
plus.addEventListener('click', function () {
    next = display.textContent;
    if(operator === '/'){
        display.textContent = mathItUp['/'](previous, next);
        previous = display.textContent;
    } else if (operator === '*') {
        display.textContent = mathItUp['*'](previous, next);
        previous = display.textContent;
    } else if (operator === '+'){
        display.textContent = mathItUp['+'](previous, next);
        previous = display.textContent;
    } else if (operator === '-') {
        display.textContent = mathItUp['-'](previous, next);
        previous = display.textContent;
    }
    previous = display.textContent;
    operator = '+';
    display.textContent = '';
});
minus.addEventListener('click', function () {
    next = display.textContent;
    if(operator === '/'){
        display.textContent = mathItUp['/'](previous, next);
        previous = display.textContent;
    } else if (operator === '*') {
        display.textContent = mathItUp['*'](previous, next);
        previous = display.textContent;
    } else if (operator === '+'){
        display.textContent = mathItUp['+'](previous, next);
        previous = display.textContent;
    } else if (operator === '-') {
        display.textContent = mathItUp['-'](previous, next);
        previous = display.textContent;
    }
    previous = display.textContent;
    operator = '-';
    display.textContent = '';
});
clear.addEventListener('click', function () {
    display.textContent = '';
    operator = undefined;
    previous = undefined;
    next = undefined;
});
equal.addEventListener('click', function () {
    next = display.textContent;
    if(operator === '/'){
        display.textContent = mathItUp['/'](previous, next);
        previous = display.textContent;
    } else if (operator === '*') {
        display.textContent = mathItUp['*'](previous, next);
        previous = display.textContent;
    } else if (operator === '+'){
        display.textContent = mathItUp['+'](previous, next);
        previous = display.textContent;
    } else if (operator === '-') {
        display.textContent = mathItUp['-'](previous, next);
        previous = display.textContent;
    }
    operator = undefined;
    console.log(previous)
    console.log(next)
});


let mathItUp = {
    '+': function(x, y) { return parseInt(x) + parseInt(y) },   //Easiest way to run the math on the variables. Couldnt figure out how to convert the operators any other way
    '-': function(x, y) { return x - y},
    '*': function(x, y) { return x * y},
    '/': function(x, y) { 
        if(y == 0) {
            return 'Cant divide by 0 stupid'
        } else {
        return Math.round((x / y) * 10) / 10
        }
    }
}
