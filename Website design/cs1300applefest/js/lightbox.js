jQuery(document).ready(function ($) {
   "use strict";
    
    $('.lightbox-trigger').on('click', function (event) {
        event.preventDefault();
        var img_href = $(this).attr("src");
        
        if ($('.lightbox').length > 0) { //.lightbox exists
            //insert img tag with clicked link's href as src
            $('.img-content').html('<img src="' + img_href + '" alt="lightbox img"/>');
            //show lightbox window
            $('.lightbox').fadeIn(300);
        } else { //.lightbox does not exist
            //create html markup
            var lightbox =
                '<div class="lightbox">' +
                    '<div class="img-content">' +
                        '<img src="' + img_href + '" alt="lightbox img"/>' +
                    '</div>' +
                    '<p>click to close</p>' +
                '</div>';
            //insert lightbox html into page
            $('body').append(lightbox);
        }
        $('body').css('overflow', 'hidden');
    });

    //click anywhere for lightbox to disappear
    $(document).click(function (e) {
        var target = e.target;
        
        if (!$(target).is('.lightbox-trigger')) {
            $('.lightbox').fadeOut(200);
            $('body').css('overflow', 'auto');
        }
    });
});