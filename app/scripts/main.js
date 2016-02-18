/* global $ */
/* global $ */
$("#search").click(function searchWiki() {
    $("#result").html("")
    var keyword = $("#keyword").val();
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&limit=10&callback=?&search=' + keyword;
    //$("#url").html(wikiUrl);
    $.getJSON(wikiUrl, function (data) {
        //$("#result").html(data[1].length);
        for (var j = 0; j < data[1].length; j++) {
            var location = '#result' + j;
            var title = '#title' + j;
            var text = '#text' + j;
            $("#result").append("<div class='jumbotron' id='" + location +"'><div id='" + title +"'><h4><a href='" + data[3][j] + "'>" + data[1][j] + "</a></h4><div id='" + text +"'>" + data[2][j] + "</div></div></div>")
            // $(title).html(data[1][j]);
        }
    });
});

//