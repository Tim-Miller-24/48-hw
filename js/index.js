$('.show').click(function (e) {
    e.preventDefault();

    $(this).toggleClass('hidden');

    $('.hide').removeClass('hidden');

    $('section').stop().slideDown(1000, function () {
        $(this).toggleClass('hidden');
    });

});

$('.success').click(function (e) {
    e.preventDefault();

    if ($('footer').hasClass('hidden')) {
        $('footer').stop().slideDown(1000, function () {
            $(this).toggleClass('hidden');
        });
    } else {
        $('footer').stop().slideUp(1000, function () {
            $(this).toggleClass('hidden');
        });
    }
});

$('.hide').stop().click(function (e) {
    e.preventDefault();

    $(this).toggleClass('hidden');

    $('.show').removeClass('hidden');

    $('section').stop().slideUp(1000, function () {
        $(this).toggleClass('hidden');
    });

    if (!$('footer').hasClass('hidden')) {
        $('footer').stop().slideUp(1000, function () {
            $(this).toggleClass('hidden');
        });
    }
});
