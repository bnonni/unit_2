//allows all read article buttons to work on click
$(document).ready(function() {

for(var i = 0; i < 5; i++) {
    var readArticle = $('#readArticleButton' + i);
        readArticle.on('click', function () {
        $(this).next().slideToggle(400);
    });
}
// $('.scroll').jscroll({
//     autoTriggerUntil: 3
// });

// for(var j = 0; j < 5;j++) {
//     var readCount = $('#readArticleButton1');
//     var count = 0;
//     readCount.one('click', function(){
//         // var impressions = $('#impressionsCounter');
//         $('#impressionsCounter1').html(++count);
//     })


//API call upon clicking source 1
$('#Source1').on('click', function(event) {
    event.preventDefault(); //prevents the page from reloading
    $('#SourceName').html('Tech Crunch'); //adds the source name to the top
    // $('.featuredImage').html('<img src = images/techCrunch.jpg />'); //sets the featured image to TechCrunch logo
    // $('.articleContent h6').html('Latest Tech News'); //sets the taxonomy of the articles

    var techCrunch = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=fb28fc61b34b465c8312a74a703d953b';
    $.ajax({
        url: techCrunch,
        type: 'GET',
        success: function(data) {
           data.articles.forEach(function(article1,index){
                console.log(data);
                var article = article1.title;
                var describe = article1.description;
                var image = article1.urlToImage;
                var tax = data.sortBy;
                var idTitle;
                switch(index){
                    case 1:
                        idTitle = "One";
                        break;
                    case 2:
                        idTitle = "Two";
                        break;
                    case 3:
                        idTitle = "Three";
                        break;
                    case 4:
                        idTitle = "Four";
                        break;
                }
               $('#showContent'+idTitle).html(describe);
               $('#img'+idTitle).attr('src', image);
               $('#tax'+idTitle).html(tax);

               var $articleNumber = $('#title'+idTitle);
               $articleNumber.html(article);
               $('#my_popup .container h1').text(article);
            });//end forEach
        }//end success function
    });//end ajax call
});//end on Source click

//API call upon clicking source 2
$('#Source2').on('click', function(){
    event.preventDefault();
    $('#SourceName').html('ESPN');
    // $('.featuredImage').html('<img src = images/espn.jpg />');
    // $('.articleContent h6').html('Sports News');
    var espn =  'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=fb28fc61b34b465c8312a74a703d953b';
    $.ajax({
        url: espn,
        type: 'GET',
        success: function(data) {
            data.articles.forEach(function (article1, index) {
                console.log(data);
                var article = article1.title;
                var describe = article1.description;
                var image = article1.urlToImage;
                var tax = data.sortBy;
                var idTitle;
                switch (index) {
                    case 1:
                        idTitle = "One";
                        break;
                    case 2:
                        idTitle = "Two";
                        break;
                    case 3:
                        idTitle = "Three";
                        break;
                    case 4:
                        idTitle = "Four";
                        break;
                }
                $('#showContent' + idTitle).html(describe); //adds article titles to headline from API call
                $('#img' + idTitle).attr('src', image); //adds article image URL to src attribute
                $('#tax' + idTitle).html(tax); //adds the "sortBy' filter to the taxonomy section of the article

                var $articleNumber = $('#title' + idTitle); //defines the wiring up of the article titles as a variable for reusability below
                $articleNumber.html(article);//calls articleTitle variable above and adds it to the article titles variable
                $('#my_popup .container h1').html(article);
            });
        }
    });
});

//API call upon clicking source 3
$('#Source3').on('click', function() { //on click event
    event.preventDefault(); //prevents refresh of page and clearing news source
    $('#SourceName').html('Time'); //adds news source Time to News Source window at top
    // $('.featuredImage').html('<img src = images/time.png />'); //feeds in time's logo
    // $('.articleContent h6').html('Latest News');
    var time = 'https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=fb28fc61b34b465c8312a74a703d953b';
    $.ajax({
        url: time,
        type: 'GET',
        success: function (data) {
            data.articles.forEach(function(article1,index){
                console.log(data);
                var article = article1.title;
                var describe = article1.description;
                var image = article1.urlToImage;
                var tax = data.sortBy;
                var idTitle;
                switch(index){
                    case 1:
                        idTitle = "One";
                        break;
                    case 2:
                        idTitle = "Two";
                        break;
                    case 3:
                        idTitle = "Three";
                        break;
                    case 4:
                        idTitle = "Four";
                        break;
                }
                $('#title'+idTitle).html(article);
                $('#showContent'+idTitle).html(describe);
                $('#img'+idTitle).attr('src', image);
                $('#tax'+idTitle).html(tax);

                $('#my_popup .container h1').html(article);
            });
        }
    });
});

//API call upon clicking source 4
    $('#Source4').on('click', function() { //on click event
        event.preventDefault(); //prevents refresh of page and clearing news source
        $('#SourceName').html('Reddit'); //adds news source Time to News Source window at top
        // $('.featuredImage').html('<img src = images/time.png />'); //feeds in time's logo
        // $('.articleContent h6').html('Latest News');
        var reddit = 'https://www.reddit.com/r/news/new.json';
        $.ajax({
            url: reddit,
            type: 'GET',
            success: function (data) {
                console.log(data);
                data.children.forEach(function(article1,index){
                    var article = article1.data.title;
                    var describe = article1.description;
                    var image = article1.urlToImage;
                    var tax = data.sortBy;
                    var idTitle;
                    switch(index){
                        case 1:
                            idTitle = "One";
                            break;
                        case 2:
                            idTitle = "Two";
                            break;
                        case 3:
                            idTitle = "Three";
                            break;
                        case 4:
                            idTitle = "Four";
                            break;
                    }
                    $('#title'+idTitle).html(article);
                    $('#showContent'+idTitle).html(describe);
                    $('#img'+idTitle).attr('src', image);
                    $('#tax'+idTitle).html(tax);
                });
            }
        });
    });
});


