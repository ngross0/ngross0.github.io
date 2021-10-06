let person = [];
let salaries = [];

function addSalary() {

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

}