
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100 ) {
            $("#gototop").show();
          
        }

        else  {
            $("#gototop").hide();
            
        }
    })

    $("#gototop").click(function() {
        $("html, body").animate({scrollTop:0},1000);
    })

    $("#oneli").click(function() {
        $('html, body').animate({
            scrollTop: $("#one").offset().top
        },1000);
    });

    $("#twoli").click(function() {
        $('html, body').animate({
            scrollTop: $("#two").offset().top
        },1000);
    });

    $("#threeli").click(function() {
        $('html, body').animate({
            scrollTop: $("#three").offset().top
        }, 1000);
    });
})