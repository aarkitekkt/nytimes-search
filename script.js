var nyTimes = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var apiKey = "&api-key=GhMg9BIKX4bsgTVZGXqiR4ursxjB1PhI";
var searchBtn = $("#run-search");
var articleList = $("#article-section");
var url = "";
var NYTData = {};


function searchArticles() {
    console.log(url);

    $.ajax({
        url: url,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        NYTData = response;
        showArticles(NYTData);
    })

}

function showArticles(NYTData) {
    var numArticles = $("#article-count").val();

    for (var i = 0; i < numArticles; i++) {
        var article = NYTData.response.docs[i];

        var articleListEl = $("<ul>");
        articleListEl.addClass("list-group");

        articleList.append(articleListEl);

        var listItem = $("<li>");
        var headline = article.headline.main;
        var articleUrl = article.web_url;
        var articleAbstract = article.abstract;

        listItem.append("<strong>" + headline + "</strong> <br>");

        listItem.append(articleAbstract + "<br>")

        listItem.append("<a href='" + articleUrl + "'>" + articleUrl + "</a>");

        articleListEl.append(listItem);
    }
}

function buildQueryUrl() {
    var search = $("#search-term").val().trim();
    var startYear = "&begin_date=" + $("#start-year").val().trim() + "0101";
    var endYear = "&end_date=" + $("#end-year").val().trim() + "1231";
    url = nyTimes + "q=" + search + startYear + endYear + apiKey;

}

function clearFunction() {
    articleList.empty();
}

$("#run-search").click(function (event) {
    event.preventDefault();
    clearFunction();
    buildQueryUrl();
    searchArticles();
})

$("#clear-all").click(function () {
    clearFunction()
})



