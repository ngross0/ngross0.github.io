let jediNames = ["Obi-Wan Kenobi", "Qui-Gon Jinn", "Jedi Bob", "Aayla Secura", "Bastile Shan", "Jaina Solo Fel", "Yoda", "Ben Skywalker", "Luke Skywalker", "Anakin Skywalker", "Cade Skywalker", "Kol Skywalker"];
let count = 1;

function slide() {
    var $active = $('div#slideshow IMG.active');
    var $next = $active.next();

    document.getElementById("jediName").innerHTML = jediNames[count];

    $next.addClass("active");
    $next.removeClass("inactive");

    $active.removeClass("active");
    $active.addClass("inactive");

    if ($active == document.getElementById("KolSkywalker")) {
        $('div#slideshow IMG#ObiWan').removeClass("inactive");
        $('div#slideshow IMG#ObiWan').addClass("active");

        $('div#slideshow IMG#KolSkywalker').removeClass("active");
        $('div#slideshow IMG#KolSkywalker').addClass("inactive");

        document.getElementById("jediName").innerHTML = jediNames[0];
        count = 1;
    }

    $('div#slideshow IMG.inactive').hide();
    $('div#slideshow IMG.active').show();

    count++;
}

$(document).ready(function() {
    $('div#slideshow IMG.inactive').hide();
});