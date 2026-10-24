$(document).ready(function () {
  $('#add-item').on('click', function () {
    $('#items').append('<li>Bring a banana</li>');
  });

  $('#prepend-item').on('click', function () {
    $('#items').prepend('<li>Open the notes</li>');
  });

  $('#remove-item').on('click', function () {
    $('#items li').last().remove();
  });

  $('#change-image').on('click', function () {
    $('#meal-photo').attr('src', 'images/tart.jpg').attr('alt', 'Fruit tart');
  });

  $('#change-link').on('click', function () {
    $('#study-link').attr('href', 'https://api.jquery.com/').text('jQuery documentation');
  });

  $('#name, #email').on('input', function () {
    $('#name-preview').text($('#name').val());
    $('#email-preview').text($('#email').val());
  });

  $('#preview-form').on('submit', function (event) {
    event.preventDefault();
  });
});
