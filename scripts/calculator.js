function one() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = 1;
    }
    else {
        document.getElementById("disp").innerHTML += 1;
    }
}

function two() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = 2;
    }
    else {
        document.getElementById("disp").innerHTML += 2;
    }
}

function three() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = 3;
    }
    else {
        document.getElementById("disp").innerHTML += 3;
    }
}

function four() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = 4;
    }
    else {
        document.getElementById("disp").innerHTML += 4;
    }
}

function five() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = 5;
    }
    else {
        document.getElementById("disp").innerHTML += 5;
    }
}

function six() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = 6;
    }
    else {
        document.getElementById("disp").innerHTML += 6;
    }
}

function seven() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = 7;
    }
    else {
        document.getElementById("disp").innerHTML += 7;
    }
}

function eight() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = 8;
    }
    else {
        document.getElementById("disp").innerHTML += 8;
    }
}

function nine() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = 9;
    }
    else {
        document.getElementById("disp").innerHTML += 9;
    }
}

function zero() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        
    }
    else {
        document.getElementById("disp").innerHTML += 0;
    }
}

function decimal() {
    document.getElementById("disp").innerHTML += '.';
}

function clearDisp() {
    document.getElementById("disp").innerHTML = 0;
}

function ent() {
    let temp = document.getElementById("disp").innerHTML;

    for (let i = 0; i < temp.length; i -= -1) {
        if (i == "+") {
            let first = temp.substring(0, i);
            let second = temp.substring(i, temp.length - 1);
            let result = parseFloat(first) + parseFloat(second);

            document.getElementById("disp").innerHTML = temp + " = " + result.toString();
        }
        else if (i == '-') {
            let first = temp.substring(0, i);
            let second = temp.substring(i, temp.length - 1);
            let result = parseFloat(first) - parseFloat(second);

            document.getElementById("disp").innerHTML = temp + " = " + result.toString();
        }
        else if(i == '/') {
            let first = temp.substring(0, i);
            let second = temp.substring(i, temp.length - 1);
            if (parseFloat(second) == 0) {
                document.getElementById("disp").innerHTML = "Error";
            }
            else {
                let result = parseFloat(first) / parseFloat(second);
            }

            document.getElementById("disp").innerHTML = temp + " = " + result.toString();
        }
        else if (i == '*') {
            let first = temp.substring(0, i);
            let second = temp.substring(i, temp.length - 1);
            let result = parseFloat(first) - parseFloat(second);

            document.getElementById("disp").innerHTML = temp + " = " + result.toString();
        }
    }
}

function divide() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = '/';
    }
    else {
        document.getElementById("disp").innerHTML += '/';
    }
}

function multiply() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = '*';
    }
    else {
        document.getElementById("disp").innerHTML += '*';
    }
}

function subtract() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = '-';
    }
    else {
        document.getElementById("disp").innerHTML += '-';
    }
}

function add() {
    if (document.getElementById("disp").innerHTML == "0" || document.getElementById("disp").innerHTML == 0) {
        document.getElementById("disp").innerHTML = '+';
    }
    else {
        document.getElementById("disp").innerHTML += '+';
    }
}