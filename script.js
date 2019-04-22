$(document).ready(function() {


    $("#clear").click(function(){
        $("#translation").empty();


    });


    $("#start").click(function () {

        var text = $("#text").val();
        var lang = $("#langs").val();
        console.log(text);
        console.log(lang);

        $.ajax({
            url: "https://translate.yandex.net/api/v1.5/tr.json/translate?&key=trnsl.1.1.20190410T211120Z.1ba9f462610b1621.bac935779dd2eb48263752fa11e08d330a572a71&text="+ text+"&lang="+lang,
            dataType: "jsonp",
            method: "GET",
            success:translate




        });



        function translate(data,lang) {

            var text = $("#text").val();
            var lang= $("#langs").find(":selected").text();
            console.log(data);
            console.log(data.text[0]);
            var translation=data.text[0];

            $("#translation").append("english: "+ text + "<br>" + lang+": " + translation+"<br><br>");


        }


    });
});