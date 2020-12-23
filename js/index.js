$('.show').click(function (e) {
    e.preventDefault();

    $(this).toggleClass('hidden');

    $('.hide').removeClass('hidden');

    $('section').slideDown(1000, function () {
        $(this).toggleClass('hidden');
    });

});

$('.success').click(function (e) {
    e.preventDefault();

    if ($('footer').hasClass('hidden')) {
        $('footer').slideDown(1000, function () {
            $(this).toggleClass('hidden');
        });
    } else {
        $('footer').slideUp(1000, function () {
            $(this).toggleClass('hidden');
        });
    }
});

$('.hide').click(function (e) {
    e.preventDefault();

    $(this).toggleClass('hidden');

    $('.show').removeClass('hidden');

    $('section').slideUp(1000, function () {
        $(this).toggleClass('hidden');
    });

    if (!$('footer').hasClass('hidden')) {
        $('footer').slideUp(1000, function () {
            $(this).toggleClass('hidden');
        });
    }
});
