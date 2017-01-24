/* Modified code from url:http://codepen.io/MightyShaban/pen/CIfdj */ 

jQuery(document).ready(function ($) {
    "use strict";
    
    // Sticky Header
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $('.main_h').addClass('sticky');
        } else {
            $('.main_h').removeClass('sticky');
            $('.main_h').removeClass('open-nav');
        }
    });
    
    // Mobile Navigation
    $('.mobile-toggle').click(function () {
        if ($('.main_h').hasClass('open-nav')) {
            $('.main_h').removeClass('open-nav');
        } else {
            $('.main_h').addClass('open-nav');
        }
    });

    $('.main_h .row nav ul li a').click(function () {
        if ($('.main_h').hasClass('open-nav')) {
            $('.main_h').removeClass('open-nav');
        }
    });

    // Navigation Scroll
    $('nav a').click(function (event) {
        var id = $(this).attr("href");
        var offset = 70;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500);
        event.preventDefault();
    });
});