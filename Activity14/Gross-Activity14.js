function insertData(data) {
	var jsonData = $.parseJSON(data);

	$('main > h2').html(jsonData.speakers[0].month + "<br>");
	$('main > h1').html(jsonData.speakers[0].title);
	$('main > h3').html(jsonData.speakers[0].speaker);
	$('main > img').attr('src', jsonData.speakers[0].image);
	$('main > p').html(jsonData.speakers[0].text);
}

function getJSON(jsonPath) {
	$.ajax({
		url: jsonPath,
		dataType: "text",
		success: insertData(data)
	})
}

function switchPerson() {
	let title = $(this).children("a").attr("title");
	let fileName = "json_files/" + title + ".json";

	getJSON(fileName);
}

$(document).ready(function() {
	$("#nav_list li").click(switchPerson());
}); // end ready