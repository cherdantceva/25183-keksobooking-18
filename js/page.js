'use strict';
(function () {

  var PIN_MAIN_WIDTH = 65;
  var PIN_MAIN_HEIGHT = 65;
  var PIN_MAIN_POINTER_HEIGHT = 22;
  var mapPinMain = document.querySelector('.map__pin--main');
  function setAddress(input, coords) {
    input.value = coords.x + ', ' + coords.y;
  }

  function getToCenterPinMain(pinMain, width, height) {
    var pinMainCenterCoords = {};
    var pinMainLeft = parseFloat(getComputedStyle(pinMain).left);
    var pinMainTop = parseFloat(getComputedStyle(pinMain).top);
    var pinMainCenterX = Math.round(pinMainLeft + width / 2);
    var pinMainCenterY = Math.round(pinMainTop + height / 2);
    pinMainCenterCoords.x = pinMainCenterX;
    pinMainCenterCoords.y = pinMainCenterY;
    return pinMainCenterCoords;
  }

  function getToPointerPinMain(pinMain, width, height, pointerHeight) {
    var pinMainPointerCoords = {};
    var pinMainLeft = parseFloat(getComputedStyle(pinMain).left);
    var pinMainTop = parseFloat(getComputedStyle(pinMain).top);
    var pinMainPointerX = Math.round(pinMainLeft + width / 2);
    var pinMainPointerY = Math.round(pinMainTop + height + pointerHeight);
    pinMainPointerCoords.x = pinMainPointerX;
    pinMainPointerCoords.y = pinMainPointerY;
    return pinMainPointerCoords;
  }

  function setAttributeDisabled(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].setAttribute('disabled', true);
    }
  }
  function removeAttributeDisabled(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].removeAttribute('disabled');
    }
  }
  function disablePage(map, form, fieldsets, filter, filters) {
    map.classList.add('map--faded');
    form.classList.add('ad-form--disabled');
    setAttributeDisabled(fieldsets);
    filter.classList.add('filter-form--disabled');
    setAttributeDisabled(filters);
  }
  function resolvePage(map, form, fieldsets, filter, filters) {
    map.classList.remove('map--faded');
    form.classList.remove('ad-form--disabled');
    removeAttributeDisabled(fieldsets);
    filter.classList.remove('filter-form--disabled');
    removeAttributeDisabled(filters);
  }

  disablePage(window.mapPage, window.adForm, window.adFormFieldsets, window.filterForm, window.filterFormSelect);
  setAddress(window.addressInput, getToCenterPinMain(mapPinMain, PIN_MAIN_WIDTH, PIN_MAIN_HEIGHT));

  function mapPinMainHandler() {
    console.log('123');
    resolvePage(window.mapPage, window.adForm, window.adFormFieldsets, window.filterForm, window.filterFormSelect);
    setAddress(window.addressInput, getToPointerPinMain(mapPinMain, PIN_MAIN_WIDTH, PIN_MAIN_HEIGHT, PIN_MAIN_POINTER_HEIGHT));
  }

  mapPinMain.addEventListener('mousedown', mapPinMainHandler);

  mapPinMain.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
      mapPinMainHandler();
    }
  });
})();
