$(document).ready(function () {
    $(".next").on('click', function () {
        var currentimg = $('.active');
        var nextimg = currentimg.next();

        if (nextimg.length == 0) {
            nextimg = $('.slider-inner img').first();
        }
        if (nextimg.length) {
            currentimg.removeClass('active');
            nextimg.addClass('active');
        }
    });
    $('.prev').on('click', function () {
        var currentimg = $('.active');
        var previmg = currentimg.prev();

        if (previmg.length == 0) {
            previmg = $('.slider-inner img').last();
        }
        if (previmg.length) {
            currentimg.removeClass('active');
            previmg.addClass('active');
        }
    });
});