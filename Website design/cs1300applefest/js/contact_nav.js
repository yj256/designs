jQuery(document).ready(function ($) {
    "use strict";
    
    // browser window scroll (in pixels) after which the "contact info" link is shown
    var offset = 300;
    var navContainer = $('.contact-nav'),
        contactNav = navContainer.find('.contact-info');

    function checkContact() {
        if ($(window).scrollTop() > offset && !navContainer.hasClass('is-fixed')) {
            navContainer.addClass('is-fixed').find('.contact-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                contactNav.addClass('has-transitions');
            });
        } else if ($(window).scrollTop() <= offset) {
            //check if the contact is open when scrolling up
            if (contactNav.hasClass('is-visible') && !$('html').hasClass('no-csstransitions')) {
                //close the menu with animation
                contactNav.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    //wait for the menu to be closed and do the rest
                    contactNav.removeClass('is-visible is-hidden has-transitions');
                    navContainer.removeClass('is-fixed');
                    $('.contact-nav-trigger').removeClass('contact-is-open');
                });
            //check if the contact is open when scrolling up - fallback if transitions are not supported
            } else if (contactNav.hasClass('is-visible') && $('html').hasClass('no-csstransitions')) {
                contactNav.removeClass('is-visible has-transitions');
                navContainer.removeClass('is-fixed');
                $('.contact-nav-trigger').removeClass('contact-is-open');
            //scrolling up with contact closed
            } else {
                navContainer.removeClass('is-fixed');
                contactNav.removeClass('has-transitions');
            }
        }
    }

    //hide or show the "contact" link
    checkContact();
    $(window).scroll(function () {
        checkContact();
    });
    
    //open or close the menu clicking on the bottom "contact info" link
    $('.contact-nav-trigger').on('click', function () {
        $(this).toggleClass('contact-is-open');
        //we need to remove the transitionEnd event handler (we add it when scrolling up with the menu open)
        contactNav.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
    });

    //hide contact info nav when lightbox is showing
    $(document).click(function(e) {
        var target = e.target;
        
        if ($(target).is('.lightbox-trigger')) {
            $('.contact-nav').hide();
        } else {
            $('.contact-nav').fadeIn(100);
        }
    });
});

