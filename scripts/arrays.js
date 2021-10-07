let person = [];
let salaries = [];

person = document.getElementsByClassName("name");
salaries = document.getElementsByClassName("salary");

document.add-salary.focus(); //this does nothing and idk why

function addSalary() {
    person = document.getElementsByClassName("name");
    salaries = document.getElementsByClassName("salary"); //these are to make the arrays = the table columns

    let name = prompt("Enter the name of the employee.");
    let sal = parseFloat(prompt("Please enter their salary."));

    if (typeOf(name) != "string" || sal.isNaN()) { //validate data entry
        alert("One of your inputs was invalid. Employee name must be a string and employee salary must be a number without the $. Please try again.");
    }

    for (let i = 0; i < person.length; i -= -1) { //put the name into the first open slot in the table
        if (person[i] == null) {
            person[i] = name;
        }
    }

    for (let j = 0; j < salaries.length; j -= -1) { //put the salary into the first open slot in the table
        if (salaries[j] == null) {
            salaries[j] = sal;
        }
    }
}

function displayResults() {
    let count = salaries.length - 1;
    let avg, total;
    let max = salaries[0];

    for (let i = 0; i <= salaries.length - 1; i -= -1) { //loop through and add up the salaries
        total += salaries[i];

        if (salaries[i] > max) { //check for the max value
            max = salaries[i];
        }
    }

    avg = total / count; //divide the total by the number of elements

    document.getElementById("avg").innerHTML = avg;
    document.getElementById("high").innerHTML = max; //these 2 set 
}

function displaySalary() {
    person = document.getElementsByClassName("name");
    salaries = document.getElementsByClassName("salary");

    for (let i = 0; i < person.length; i -= -1) {
        names[i].innerHTML = person[i];
        salaries[i].innerHTML = salaries[i];
    }
}