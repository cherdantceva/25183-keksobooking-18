'use strict';
(function () {
  var adForm = document.querySelector('.ad-form');
  var adFormFieldsets = document.querySelectorAll('.ad-form fieldset');
  var addressInput = document.querySelector('#address');

  var adSelectRoomNumber = document.querySelector('#room_number');
  var adSelectCapacity = document.querySelector('#capacity');

  function validateSelectsCapacity(select1, select2) {
    var errorMesage = select2.parentNode.querySelector('.error-message');
    if (errorMesage) {
      errorMesage.remove();
    }
    var n1 = select1.options.selectedIndex;
    var n2 = select2.options.selectedIndex;
    if (n1 === 0 && !(n2 === 2) || (n1 === 1) && !(n2 === 1 || n2 === 2) || (n1 === 2) && (n2 === 3) || (n1 === 3) && !(n2 === 3)) {
      select2.setCustomValidity('Количество комнат не соответствует количеству мест');
      select2.parentNode.insertAdjacentHTML('beforeend', '<div class="error-message">' +
        select2.validationMessage +
        '</div>');
    } else {
      select2.setCustomValidity('');
    }
  }
  var selectValidate = function (select) {
    select.addEventListener('change', function () {
      validateSelectsCapacity(adSelectRoomNumber, adSelectCapacity);
    });
  };
  selectValidate(adSelectRoomNumber);
  selectValidate(adSelectCapacity);
  adForm.addEventListener('submit', function (e) {
    e.preventDefault();
    validateSelectsCapacity(adSelectRoomNumber, adSelectCapacity);
  });

  window.adForm = adForm;
  window.adFormFieldsets = adFormFieldsets;
  window.addressInput = addressInput;
})();
