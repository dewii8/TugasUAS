$(document).ready(function() {
    // Filter tombol
    $('.filter-button').on('click', function() {
        const filter = $(this).data('filter');
        $('.filter-button').removeClass('active');
        $(this).addClass('active');

        if (filter === 'all') {
            $('.post').show();
        } else {
            $('.post').hide();
            $(`.post[data-type="${filter}"]`).show();
        }
    });

    // Tombol Ikuti
    $('.follow-btn').on('click', function() {
        $(this).toggleClass('following');
        if ($(this).hasClass('following')) {
            $(this).text('Mengikuti');
        } else {
            $(this).text('Ikuti');
        }
    });

    // Tombol Love
    $('.like-btn').on('click', function() {
        $(this).toggleClass('liked');
    });
});
