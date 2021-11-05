let pictures = [];
let captions = [];

$(document).ready(function() {
        // preload the image for each link
        $(".picture").each(function(num) {
                pictures[num] = $(this).attr("href");
                captions[num] = $(this).attr("title");
        })

        $("#one").click(function() {
                event.preventDefault();
                $("#image").fadeOut(3000, function() {
                        document.getElementById("caption").innerHTML = captions[0];
                        $("#image").attr("src", pictures[0]);
                        $("one").focus();
                })
        })

        $("#two").click(function() {
                event.preventDefault();
                $("#image").fadeOut(3000, function() {
                        document.getElementById("caption").innerHTML = captions[1];
                        $("#image").attr("src", pictures[1]);
                        $("two").focus();
                })
        })

        $("#three").click(function() {
                event.preventDefault();
                $("#image").fadeOut(3000, function() {
                        document.getElementById("caption").innerHTML = captions[2];
                        $("#image").attr("src", pictures[2]);
                        $("three").focus();
                })
        })

        $("#four").click(function() {
                event.preventDefault();
                $("#image").fadeOut(3000, function() {
                        document.getElementById("caption").innerHTML = captions[3];
                        $("#image").attr("src", pictures[3]);
                        $("four").focus();
                })
        })

        $("#five").click(function() {
                event.preventDefault();
                $("#image").fadeOut(3000, function() {
                        document.getElementById("caption").innerHTML = captions[4];
                        $("#image").attr("src", pictures[4]);
                        $("five").focus();
                })
        })

        $("#six").click(function() {
                event.preventDefault();
                $("#image").fadeOut(3000, function() {
                        document.getElementById("caption").innerHTML = captions[5];
                        $("#image").attr("src", pictures[5]);
                        $("six").focus();
                })
        })

        $("one").focus();
        // set up the event handlers for each link

    			// get the image URL and caption for each image and animate the caption

            // cancel the default action of each link


        // move the focus to the first link

}); // end ready