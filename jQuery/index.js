$(document).ready(function(){

    // Mobile nav menu
    $(".toggle-button").click(function(){

        $(this).toggleClass("fa-times");
        $(".navbar-link").toggleClass("active");

    });

    // Avatar image transition
    $('.avatar-image').hover(function(){
        
        $(this).attr("src", "images/index/avatar1.png");
        
    }, function(){

        $(this).attr("src", "images/index/avatar.png");
        
    })

});