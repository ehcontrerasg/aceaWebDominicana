$(function () {
    var togg = true;

    // Menú móvil
    $('.menu-btn').click(function () {
        if (togg) {
            $('.menu').fadeIn('fast').find('ul').css({ 'right': '0' });
        } else {
            $('.menu').fadeOut('slow').find('ul').css({ 'right': '-100%' });
        }
        togg = !togg;
    });

    $('.menu').not('ul, a').click(function (e) {
        e.stopPropagation();
        if (e.target.nodeName === 'DIV' || (e.target.nodeName === 'A' && window.innerWidth <= 728)) {
            $(this).fadeOut('slow').find('ul').css({ 'right': '-100%' });
            togg = !togg;
        }
    });

    // Animación de texto en el hero
    $('#text-animation').cycleText();

    // Scroll suave con compensación del header sticky
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        if (!target.length) return;

        var headerH = $('header').outerHeight() || 0;
        var scrollTo = href === '#top' ? 0 : target.offset().top - headerH;

        $('html, body').animate({ scrollTop: scrollTo }, 600, 'swing');

        // Cierra el menú móvil al navegar
        if (window.innerWidth <= 768) {
            $('.menu').fadeOut('slow').find('ul').css({ 'right': '-100%' });
            togg = true;
        }
    });
});
