'use strict';

(function () {

  var COUNT_ADS = 8;
  var filterForm = document.querySelector('.map__filters');
  var mapPins = document.querySelector('.map__pins');
  var filterFormSelect = document.querySelectorAll('.map__filters .map__filter');

  var adSelectRoomNumber = document.querySelector('#room_number');
  var adSelectCapacity = document.querySelector('#capacity');
  function setAttributeDisabled(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].setAttribute('disabled', true);
    }
  }
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
  function drawPin(adsData, container) {
    var pins = document.createDocumentFragment();
    for (var i = 0; i < adsData.length; i++) {
      var newElement = document.createElement('button');
      newElement.className = 'map__pin';
      newElement.setAttribute('type', 'button');
      newElement.style.top = adsData[i].location.y - PIN_HEIGHT + 'px';
      newElement.style.left = adsData[i].location.x - PIN_WIDTH / 2 + 'px';
      newElement.innerHTML = '<img src="' + adsData[i].author.avatar + '" width="40" height="40" draggable="false" alt="' + adsData[i].offer.title + '">';
      // pins.appendChild(newElement);
    }
    container.appendChild(pins);
  }

  drawPin(window.generateAds(COUNT_ADS), mapPins);
})();

