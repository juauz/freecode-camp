function setup() {
    let input = Array.prototype.slice.call(document.getElementsByClassName("searchbox__input"))[0];
    let wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&uselang=user&search=";
    let button = Array.prototype.slice.call(document.getElementsByClassName("searchbox__button"))[0];

    /* When input changes, get new searchUrl */
    button.addEventListener("click", generateUrl);

    function generateUrl() {
        let searchUrl = wikiUrl + input.value;
        console.log(searchUrl);
        console.log(input.value);

        loadJSON(searchUrl, getData, 'jsonp');

        function getData(data) {
            let searchTitles = data["1"];
            let searchLinks = data["3"];
            console.log(data);

            $(".searchbox__results").append("<h1 class='searchbox__results__intro'>There are " + (searchLinks.length - 1) + " results for " + searchTitles[0] + "</h1>");

            for (let i = 0; i < searchTitles.length - 1; i++) {
                $(".searchbox__results").append("<div class='search__results__item'> <h2 class='searchbox__results__title'>" + searchTitles[i+1] + "</h2></div>");
            }
        }
    }
}