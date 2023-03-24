//get references to buttons
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const output = document.querySelector('.output')
const clear = document.querySelector('.clear')
const showResult = document.querySelector('.result')

let results;
let display = '';

numbers.forEach(number => {

    number.addEventListener('click', () => {
        //results.push()
        display += number.textContent
        showResult.textContent = display;
        console.log(display);
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        display += operator.textContent
        showResult.textContent = display;
        console.log(display);
    })
})

output.addEventListener('click', () => {

    results = eval(display);
    display = results;
    showResult.textContent = results;
    console.log(results);
})

clear.addEventListener('click', () => {
    showResult.textContent = '';
    display = '';
    results = 0;
})

