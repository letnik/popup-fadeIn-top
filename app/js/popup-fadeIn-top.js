// popup
$(document).ready(function () {

  $('.popup-open').on('click', function() {

    var popUpData = $(this).data('popupName');
      popUpId = document.getElementById(popUpData);

    $(popUpId).fadeIn();
    $(popUpId).addClass('popup-animated');

  });

  $('.popup-close, .popup-close-bg').on('click', function() {

    var popUpData = $(this).data('popupName');
      popUpId = document.getElementById(popUpData);

    $(popUpId).fadeOut();
    $(popUpId).removeClass('popup-animated');

  });

});