$(document).ready(function () {
  console.log('jQuery is ready!');

  $('#change-examples').on('click', function () {
    $('#id-text').text('Now the banana is ready');
    $('.class-text').html('<strong>Time for a snack</strong>');
    $('article').css('background-color', '#fff2c6');
  });
});
