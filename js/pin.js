'use strict';
(function () {

  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var mapPins = document.querySelector('.map__pins');
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
  drawPin(window.generateAds(window.COUNT_ADS), mapPins);
  window.PIN_WIDTH = PIN_WIDTH;
  window.PIN_HEIGHT = PIN_HEIGHT;
})();
