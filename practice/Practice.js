let total = 0.0;

function addEspresso() {
	document.getElementById("order").innerHTML += "1x Espresso - $1.95<br>";

	total += 1.95;

	document.getElementById("total").innerHTML = total;
}

function addCappuccino() {
	document.getElementById("order").innerHTML += "1x Cappuccino - $3.45<br>";

	total += 3.45;

	document.getElementById("total").innerHTML = total;
}

function placeOrder() {
	alert("Your order has been placed!");
}

function clearOrder() {
	document.getElementById("order").innerHTML = "";

	total = 0;

	document.getElementById("total").innerHTML = total;
}

function contactUs() {
	alert("Contact us at 777-777-7777!");
}