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
let total = [];

one.addEventListener('click', function () {
    total.push('1');
    display.textContent += '1';
});
two.addEventListener('click', function () {
    total.push('2');
    display.textContent += '2';
});
three.addEventListener('click', function () {
    total.push('3');
    display.textContent += '3';
});
four.addEventListener('click', function () {
    total.push('4');
    display.textContent += '4';
});
five.addEventListener('click', function () {
    total.push('5');
    display.textContent += '5';
});
six.addEventListener('click', function () {
    total.push('6');
    display.textContent += '6';
});
seven.addEventListener('click', function () {
    total.push('7');
    display.textContent += '7';
});
eight.addEventListener('click', function () {
    total.push('8');
    display.textContent += '8';
});
nine.addEventListener('click', function () {
    total.push('9');
    display.textContent += '9';
});
zero.addEventListener('click', function () {
    total.push('0');
    display.textContent += '0';
});
divide.addEventListener('click', function () {
    total.push('/');
    display.textContent += '/';
});
multiply.addEventListener('click', function () {
    total.push('*');
    display.textContent += '*';
});
plus.addEventListener('click', function () {
    total.push('+');
    display.textContent += '+';
});
minus.addEventListener('click', function () {
    total.push('-');
    display.textContent += '-';
});
