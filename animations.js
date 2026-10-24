$(document).ready(function () {
  $('#animate-basic').on('click', function () {
    $('#basic-box').stop(true, true)
      .css({left: 0, width: 60, height: 60})
      .animate({left: 100, width: 100, height: 100}, 700);
  });

  $('#animate-sequence').on('click', function () {
    $('#sequence-box').stop(true, true)
      .css({left: 0, top: 0, width: 60, height: 60})
      .animate({left: 120}, 400)
      .animate({top: 90}, 400)
      .animate({width: 30, height: 30}, 400)
      .animate({left: 0, top: 0, width: 60, height: 60}, 400);
  });

  $('#animate-combined').on('click', function () {
    $('#combined-box').stop(true, true)
      .css({left: 0, top: 0, width: 60, height: 60, opacity: 1})
      .animate({left: 100, top: 50, width: 100, height: 100, opacity: 0.4}, 900);
  });
});
