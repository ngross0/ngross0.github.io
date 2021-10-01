let sides = prompt("Nameless Genet would like to know how many sides your polygon has.");

document.getElementById("shape").innerHTML = sides + " sided polygon"; //Get and set a basic shape

function shape() {
    sides = parseInt(prompt("Nameless Genet would like to know how many sides your polygon has.")); //Get integer input for sides

    switch (sides) { //check number of sides and change text accordingly
        case 1:
            document.getElementById("shape").innerHTML = "monogon";
            break;
        case 2:
            document.getElementById("shape").innerHTML = "digon";
            break;
        case 3:
            document.getElementById("shape").innerHTML = "trigon";
            break;
        case 4:
            document.getElementById("shape").innerHTML = "tetragon";
            break;
        case 5:
            document.getElementById("shape").innerHTML = "pentagon";
            break;
        case 6:
            document.getElementById("shape").innerHTML = "hexagon";
            break;
        case 7:
            document.getElementById("shape").innerHTML = "heptagon";
            break;
        case 8:
            document.getElementById("shape").innerHTML = "octagon";
            break;
        case 9:
            document.getElementById("shape").innerHTML = "enneagon";
            break;
        case 10:
            document.getElementById("shape").innerHTML = "decagon";
            break;
        case 11:
            document.getElementById("shape").innerHTML = "hendecagon";
            break;
        case 12:
            document.getElementById("shape").innerHTML = "dodecagon";
            break;
        case 13:
            document.getElementById("shape").innerHTML = "triskaidecagon";
            break;
        case 14:
            document.getElementById("shape").innerHTML = "tetradecagon";
            break;
        case 15:
            document.getElementById("shape").innerHTML = "pentadecagon";
            break;
        default: //inform user if input is incorrect and ask again
            alert("Your polygon is the wrong size! Please enter a number between 1 and 15.");
            shape();
    }
}