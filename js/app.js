// $('#scroll').jscroll();

//allows all read article buttons to work on click
for(var i = 0; i < 5; i++) {
    $('#readArticleButton' + i).on('click', function () {
        $(this).next().slideToggle(400);
        var impressions = '#impressionCounter'
        ;
    });
}
//
// $(document).ready(function() {
//     $('#popUp .hidden').show();
// });


//API call upon clicking source 1
$('#Source1').on('click', function(event) {
    event.preventDefault(); //prevents the page from reloading and puts the source name in the top
    $('#SourceName').html('Tech Crunch');
    $('.featuredImage').html('<img src = images/techCrunch.jpg />'); //sets the featured image to TechCrunch logo
    $('.articleContent h6').html('Latest Tech News'); //sets the taxonomy of the articles

    var techCrunch = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=fb28fc61b34b465c8312a74a703d953b';
    $.ajax({
        url: techCrunch,
        type: 'GET',
        success: function(data) {
           data.articles.forEach(function(article1,index){
                console.log(data);
                var article = article1.title;
                var describe = article1.description;
                var image = article1.urlToImage
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
               $('imgOne').attr('src', image);
               // $('.article .featuredImage').html(image);
            });
        }
    });
});

//API call upon clicking source 2
$('#Source2').on('click', function(){
    event.preventDefault();
    $('#SourceName').html('ESPN');
    $('.featuredImage').html('<img src = images/espn.jpg />');
    $('.articleContent h6').html('Sports News');
    var espn =  'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=fb28fc61b34b465c8312a74a703d953b';
    $.ajax({
        url: espn,
        type: 'GET',
        success: function(data) {
            data.articles.forEach(function(article1,index){
                console.log(data);
                var articleTitle = article1.title;
                var describe = article1.description;
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
                $('#title'+idTitle).html(articleTitle);
                $('#showContent'+idTitle).html(describe);
                // if(articleURL || articleTitle === 'mlb' || 'MLB'){
                //     $('.articleContent h6').html('Baseball');
                // }else if (articleURL || articleTitle === 'mma' || 'MMA' || 'boxing'){
                //     $('.articleContent h6').html('Boxing');}
            });
        }
    });
});


//API call upon clicking source 3
$('#Source3').on('click', function() { //on click event
    event.preventDefault(); //prevents refresh of page and clearing news source
    $('#SourceName').html('Time'); //adds news source Time to News Source window at top
    $('.featuredImage').html('<img src = images/time.png />'); //feeds in time's logo
    $('.articleContent h6').html('Latest News');
    var time = 'https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=fb28fc61b34b465c8312a74a703d953b';
    $.ajax({
        url: time,
        type: 'GET',
        success: function (data) {
            data.articles.forEach(function(article1,index){
                console.log(data);
                var article = article1.title;
                var describe = article1.description;
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
            });
        }
    });
});



