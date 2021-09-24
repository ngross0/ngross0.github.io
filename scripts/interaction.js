let today = new Date();
let date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes();
let name = prompt("What's your name?");
let feel = prompt("How are you feeling?");

document.getElementById("date").innerHTML = date;
document.getElementById("time").innerHTML = time;
document.getElementById("name").innerHTML = name;
document.getElementById("feel").innerHTML = feel;

function compliment() {
    let numRand = Math.round(Math.random() * (5 - 1) + 1);

    switch (numRand) {
        case 1:
            alert("You're an amazing person!");
            break;
        case 2:
            alert("We're glad you're alive!");
            break;
        case 3:
            alert("You light up the room when you walk in!");
            break;
        case 4:
            alert("You look great today!");
            break;
        case 5:
            alert("You're extremely smart!");
            break;
        default:
            alert("This wasn't supposed to happen, I think we need new interns.");
    }
}

function insult() {
    let numRand = Math.round(Math.random() * (5 - 1) + 1);

    switch (numRand) {
        case 1:
            alert("You're proof that even God makes mistakes.");
            break;
        case 2:
            alert("Calling you stupid would be an insult to stupid people.");
            break;
        case 3:
            alert("Some babies were dropped on their heads, but you were clearly thrown at a wall.");
            break;
        case 4:
            alert("If you're going to be two-faced, at least make one of them pretty.");
            break;
        case 5:
            alert("You had a thought? That's a first!");
            break;
        default:
            alert("This wasn't supposed to happen, I think we need new interns.");
    }
}

function color() {
    let numRand = Math.round(Math.random() * (5 - 1) + 1);

    switch (numRand) {
        case 1:
            alert("Green: #159724");
            break;
        case 2:
            alert("Pink: #e965d3");
            break;
        case 3:
            alert("Purple: #7b08a7");
            break;
        case 4:
            alert("Orange: #ea8751");
            break;
        case 5:
            alert("Blue: #3617ba");
            break;
        default:
            alert("This wasn't supposed to happen, I think we need new interns.");
    }
}

function genet() {
    alert("A genet is a small African carnivore from the genus Genetta, with an appearance similar to felines and weasels. The only genet present in Europe is the common genet, found in France and the Iberian Peninsula.");
}

function funFact() {
    let numRand = Math.round(Math.random() * (5 - 1) + 1);

    switch (numRand) {
        case 1:
            alert("Ancient Roman surgeons were trained to block out the screams of human pain.");
            break;
        case 2:
            alert("Canada eats more macaroni and cheese than any other nation in the world.");
            break;
        case 3:
            alert("In Alaska, it is illegal to get drunk in a bar.");
            break;
        case 4:
            alert("Surgeons who play video games at least 3 hours a week perform 27% faster and make 37% fewer errors.");
            break;
        case 5:
            alert("In Connecticut, a pickle can only be classified as a pickle if it bounces when it is dropped one foot.");
            break;
        default:
            alert("This wasn't supposed to happen, I think we need new interns.");
    }
}