$(document).ready(function(){
    $(".accordion h3").click(function(){
        $(this).next().slideToggle(); // Rozwija/zwija zawartość
        $(this).parent().siblings().find("div").slideUp(); // Zwija inne sekcje
    });
});
