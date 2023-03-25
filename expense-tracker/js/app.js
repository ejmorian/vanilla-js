//get reference to user input
const form = document.getElementById('add-expense');
const expenseName = document.getElementById('expense');
const cost = document.getElementById('cost');
const date = document.getElementById('date');
const add = document.getElementById('add');

const table = document.getElementById('expense-list')

//A blueprint for expense object
class Expense {
    constructor(date, expense, cost) {
        this.date = date;
        this.expense = expense;
        this.cost = cost;
    }
}

// Store Expenses in the array
const expenseList = []


//use the user input to create a new expense and put it in the list array
const createExpense = () => {
    if (date.value && expenseName.value && cost.value) {
        expenseList.push(new Expense(date.value, expenseName.value, cost.value))
    } else {
        console.log('please fill in all the input fields');
    }

}

const displayExpense = () => {
    //create html elements to insert the expense data collected
    const row = document.createElement('tr');
    const date = document.createElement('td');
    const name = document.createElement('td');
    const price = document.createElement('td');


    if (expenseList.length !== 0) {
        expenseList.forEach(item => {
            date.textContent = item.date;
            name.textContent = item.expense;
            price.textContent = "$" + item.cost;

            row.append(date, name, price);
            table.append(row);
        })
    } else {
        console.log('expense list is empty...')
    }
}

const init = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    add.addEventListener('click', createExpense);
    add.addEventListener('click', displayExpense);
}


window.onload = init;