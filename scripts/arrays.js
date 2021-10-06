let person = [];
let salaries = [];

document.addSalary.focus();

function addSalary() {
    person = document.getElementsByClassName("name");
    salaries = document.getElementsByClassName("salary");

    let name = prompt("Enter the name of the employee.");
    let sal = prompt("Please enter their salary.");

    if (typeOf(name) != "string" || sal.isNaN()) {
        alert("One of your inputs was invalid. Employee name must be a string and employee salary must be a number without the $. Please try again.");
    }

    person.push(name);
    salaries.push(sal);
}

function displayResults() {
    let count = salaries.length - 1;
    let avg, total;
    let max = salaries[0];

    for (let i = 0; i <= salaries.length - 1; i -= -1) {
        total += salaries[i];

        if (salaries[i] > max) {
            max = salaries[i];
        }
    }

    avg = total / count;

    document.getElementById("avg").innerHTML = avg;
    document.getElementById("high").innerHTML = max;
}

function displaySalary() {
    for (let i = 0; i < person.length; i -= -1) {
        names[i].innerHTML = person[i];
        salaries[i].innerHTML = salaries[i];
    }
}