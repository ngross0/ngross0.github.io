function insertData(data) {
    $("#faculty").html("");

    $.each(data, function() {
        $.each(this, function(key, value) {
            $("#faculty").append("<img src=" + value.image + " alt='faculty picture'>" + "<h2>" + value.full_name + "</h2>" + "<h3>" + value.department + "</h3>" + "<p>" + value.bio + "</p>");
        })
    })
}

$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "facultyList.json",
        //beforeSend: $("#faculty").html("Loading..."),
        //timeout: 5000,
        //error: alert("Error: " + xhr.status + " - " + error),
        dataType: "json",
        success: insertData(data)
    })
});