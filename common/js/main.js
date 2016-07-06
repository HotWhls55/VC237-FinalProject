function accordionToggle() {
    var $accordion_id = $(this).next().attr('id');
    var accordion_el = document.getElementById($accordion_id);
    if (accordion_el.className.indexOf("w3-show") == -1) {
        accordion_el.className += " w3-show";
        $(this).addClass('ui-icon-minus').removeClass('ui-icon-plus');
    } else {
        accordion_el.className = accordion_el.className.replace(" w3-show", "");
        $(this).removeClass('ui-icon-minus').addClass('ui-icon-plus');
    }
}

function displayResizer() {
    var $window_width = $(window).width();
    var available_margin = ($window_width - 480) / 4;
    $('.wrapper').css('margin-left', available_margin.toString() + 'px');
    $('.wrapper').css('margin-right', available_margin.toString() + 'px');
    if ($window_width <= 720) {
        $("header").css('background-image', 'url(), linear-gradient(#6695ef, #fff)');
    } else {
        $('header').css('background-image', 'url(common/art/nwe_logo_styled.png), linear-gradient(#6695ef, #fff)')
    }
}

function imageModal() {
    var $img_src = $(this).attr('src');
    $('#modal_img').attr('src', $img_src);
    if ($(this).hasClass('narrow_img')) {
        $('#modal_img').addClass('narrow_img_style');
    } else {
        $('#modal_img').removeClass('narrow_img_style');
    }
    $('#img_modal').css('display', 'block');
}

function modalClose() {
    $(this).css('display', 'none');
}