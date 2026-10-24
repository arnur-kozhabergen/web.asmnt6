$(document).ready(function () {
  $('.accordion-title').on('click', function () {
    let panel = $(this).next('.accordion-content');
    let isOpen = $(this).attr('aria-expanded') === 'true';

    $('.accordion-content').stop(true, true).slideUp(300);
    $('.accordion-title').attr('aria-expanded', 'false');

    if (!isOpen) {
      panel.stop(true, true).slideDown(300);
      $(this).attr('aria-expanded', 'true');
    }
  });
});
