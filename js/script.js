if ($(window).width() > 992) {
    $('.nav-drop').hover(function() {
        // alert('here');
       $('.nav-drop .drop-menu').toggle();
    });
}

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height());
    });
});
