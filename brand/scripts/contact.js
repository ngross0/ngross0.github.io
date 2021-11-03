function submitInfo() {
    $('form#contact').hide();
    $('div#submitted').show();

    document.getElementById("full-name").innerHTML = document.getElementById('contact').elements['firstname'].value + " " + document.getElementById('contact').elements['lastname'].value;
    document.getElementById("phone-number").innerHTML = document.getElementById('contact').elements['phone'].value;
    document.getElementById("e-mail").innerHTML = document.getElementById('contact').elements['email'].value;
}

function reload() {
    location.reload();
}

$(document).ready(function() {
    $('div#submitted').hide();
});