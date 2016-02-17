/* global $ */
$("#search").click(function () {
    var keyword = $("#keyword").val();
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&formatversion=2&search=' + keyword
    $("#url").html(wikiUrl);
    $.getJSON(wikiUrl, function (json) {
        $("#url").html(json);
        for (var j = 0; j < json[1].length; j++) {
            var location = '#result' + j;
            var title = '#title' + j;
            $("#result").append("<div id='" + location +"'></div>")
            $(location).append("<div id='" + title +"'></div>");
            $(title).html(json[1][j]);
        }
    });
    //$("#result").css('display', 'block');
});