var nyTimes = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var apiKey = "&api-key=GhMg9BIKX4bsgTVZGXqiR4ursxjB1PhI";
var searchBtn = $("#run-search");
var articleList = $("#article-section");
var url = "";


function searchArticles() {
    console.log(url);

    $.ajax({
        url: url,
        method: "GET",
    }).then(function (response) {
        console.log(response)
    })

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
    buildQueryUrl();
    searchArticles()
})

$("#clear-all").click(function () {
    clearFunction()
})



