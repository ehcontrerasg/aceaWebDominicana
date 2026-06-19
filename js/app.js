$(function () {
    var togg = true;
    $('.menu-btn').click(function () {
        if (togg) {
            $(this).css('position', 'fixed');
            $('.menu').fadeIn('fast')
                .find('ul').css({
                    'right': '0'
                })
        } else {
            $(this).css('position', 'absolute');
            $('.menu').fadeOut('slow')
                .find('ul').css({
                    'right': '-100%'
                })
        }
        togg = !togg;
    })
    $('.menu').not('ul, a').click(function (e) {
        e.stopPropagation();
        if (e.target.nodeName == 'DIV' || e.target.nodeName == 'A' && window.innerWidth <= 728) {
            $(this).fadeOut('slow')
                .find('ul').css({
                    'right': '-100%'
                })
            togg = !togg;

        }
    })
    
    $('#text-animation').cycleText();
    
    // Anadiendo suavisado a los links internos de la web
    
    var linkInterno = $('a[href^="#"]');
    
    linkInterno.on('click', function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop : $(href).offset().top
        }, 'slow','easeOutBack')
    })
});
