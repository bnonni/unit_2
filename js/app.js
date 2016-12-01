// $('#scroll').jscroll();
for(var i = 0; i < 5; i++) {
    $('#readArticleButton' + i).on('click', function () {
        $(this).next().slideToggle(400);
    });
}

//API call upon clicking source 1
$('#Source1').on('click', function(event) {
    event.preventDefault(); //prevents the page from reloading and puts the sourec name in the top
    $('#SourceName').html('Tech Crunch');
    $('.featuredImage').html('<img src = images/techCrunch.jpg />');

    //sets the
    var techCrunch = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=fb28fc61b34b465c8312a74a703d953b';
    $.ajax({
        url: techCrunch,
        type: 'GET',
        success: function(data) {
           data.articles.forEach(function(article1,index){
                console.log(data);
                var article = article1.title;
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
               // $('.article .featuredImage').html(image);
            });
        }
    });
});

//API call upon clicking source 2
$('#Source2').on('click', function(){
    event.preventDefault();
    $('#SourceName').html('ESPN');
    $('.featuredImage').html('<img src = images/espn_logo.jpg />');

    var espn =  'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=fb28fc61b34b465c8312a74a703d953b';

    $.ajax({
        url: espn,
        type: 'GET',
        success: function(data) {
            data.articles.forEach(function(article1,index){
                console.log(data);
                var article = article1.title;
                //var describe = article1.description;
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
                $('.articleContent h6').html(describe);
            });
        }
    });
});


//API call upon clicking source 3
$('#Source3').on('click', function() {
    event.preventDefault();
    $('#SourceName').html('Time');
    $('.featuredImage').html('<img src = images/time.jpg />');

    var time = 'https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=fb28fc61b34b465c8312a74a703d953b';
    $.ajax({
        url: time,
        type: 'GET',
        success: function (data) {
            data.articles.forEach(function(article1,index){
                console.log(data);
                var article = article1.title;
                //var image = article1.urlToImage;
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
            });
        }
    });
});



//
// function getNewsSource1() {
//     var url = "https://newsapi.org/v1/articles?source=";
//     var source = "techcrunch";
//     var apiKey = "fb28fc61b34b465c8312a74a703d953b";
//     url += source + "&apiKey=" + apiKey;
//     console.log(url);
//     $.ajax({
//         url: url,
//         method: 'GET',
//         success: function (response) {
//             for (var i = 0; i < 5; i++) {
//                 var headline = response.articles[i].title;
//                 $('#headline' + i).html(headline);
//             }
//         }
//     });
// }
// $('#Source1').on('click',function(e){
//     e.preventDefault();
//     getNewsSource1();
// });
