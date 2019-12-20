var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=GhMg9BIKX4bsgTVZGXqiR4ursxjB1PhI"
var search = $("#search-term").val().trim();
var startYear = $("#start-year").val.trim();
var endYear = $("#end-year").val.trim();

$("#run-search").click(searchBtn)

function searchBtn(event) {
    event.preventDefault();
    console.log(search)
}

