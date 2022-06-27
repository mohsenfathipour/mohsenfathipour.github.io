/**
 * fader
 */

$('.show-more-btn').click(function () {
    let show_more_box = $(this).parent();

    if (show_more_box.data('status') === 'collapse') {
        show_more_box.find('.show-more-text').css('height', 'auto');
        show_more_box.data('status', 'open');
    } else {
        show_more_box.find('.show-more-text').css('height', '100px');
        show_more_box.data('status', 'collapse');
    }

    show_more_box.find('.fader').toggle();
    show_more_box.find('.show-more').toggleClass('d-block');
    show_more_box.find('.show-more').toggleClass('d-none');
    show_more_box.find('.show-less').toggleClass('d-block');
    show_more_box.find('.show-less').toggleClass('d-none');
});