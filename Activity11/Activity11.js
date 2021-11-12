//jQuery call to the accordion() method.
$(document).ready(function() {
    $(".item").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });
});