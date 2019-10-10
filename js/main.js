'use strict';

(function () {
  var MAP_WIDTH = 1200;
  var MAP_YMIN = 130;
  var MAP_YMAX = 630;
  var COUNT_ADS = 8;
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateAds(amount) {
    var ads = [];
    var title = [
      'На Волгоградском проспекте, 11',
      'На Старом Арбате',
      'На Полянке, 30',
      'Технопарк',
      'Апартаменты на Бронной',
      'Deluxe Loft City Centre',
      'На улице Зацепа',
      'Бульвар Смоленский Бульвар'
    ];
    var type = ['palace', 'flat', 'house', 'bungalo'];
    var checkin = ['12:00', '13:00', '14:00'];
    var checkout = ['12:00', '13:00', '14:00'];
    var featuresAll = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
    var description = [
      'Апартаменты «На Волгоградском проспекте, 11» расположены в Москве, в ' +
      '3,7 км от парка Зарядье, в 4,1 км от собора Василия Блаженного, а также в 4,3 км от исторического торгового дома ГУМ.',
      'Апартаменты Starogo Arbata с видом на город расположены в Москве, в 1,9 км от Музея изобразительных искусств ' +
      'имени А. С. Пушкина и в 2,5 км от улицы Арбат.',
      'Апартаменты «На Полянке, 30» расположены в Москве, в 1 км от Третьяковской галереи ' +
      'и в 3 км от Московского Кремля. Из окон открывается вид на город.',
      'Апартаменты «Технопарк» с бесплатным Wi-Fi расположены в Москве, в 9 км от парка «Зарядье» и Донского монастыря.',
      'Апартаменты с бесплатным WiFi «На Бронной» расположены в центре Москвы. К услугам гостей кондиционер, балкон ' +
      'с видом на город, диван, кабельное телевидение, фен и стиральная машина.',
      'Апартаменты Deluxe Loft City Centre с видом на город, бесплатным Wi-Fi и бесплатной частной парковкой расположены в Москве, в 3,9 км от стадиона «Динамо» (VTB).',
      'Апартаменты «На улице Зацепа» расположены в Москве, в 1,7 км от Центрального парка культуры и отдыха имени Горького и в 2,3 км от храма Христа Спасителя.',
      'Апартаменты «Бульвар Смоленский Бульвар» расположены в Москве, в 1,8 км от улицы Арбат и в 2,8 км от храма Христа Спасителя. К услугам гостей бесплатный Wi-Fi и кондиционер.'
    ];

    function shuffleFeatures(features) {
      for (var i = features.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = features[i];
        features[i] = features[j];
        features[j] = temp;
      }
      return features;
    }

    function spliceFeatures(count, features) {
      features.splice(count - 1, features.length - count);
      return features;
    }

    for (var i = 0; i < amount; i++) {
      var location = {
        x: getRandomIntInclusive(0, MAP_WIDTH),
        y: getRandomIntInclusive(MAP_YMIN, MAP_YMAX)
      };
      var advert = {
        author: {
          avatar: 'img/avatars/user0' + (i + 1) + '.png'
        },

        offer: {
          title: title[i],
          address: location.x + ',' + location.y,
          price: getRandomIntInclusive(100, 10000),
          type: type[getRandomIntInclusive(0, type.length - 1)],
          rooms: getRandomIntInclusive(1, 5),
          guests: getRandomIntInclusive(1, 10),
          checkin: checkin[getRandomIntInclusive(0, checkin.length - 1)],
          checkout: checkout[getRandomIntInclusive(0, checkout.length - 1)],
          features: spliceFeatures(getRandomIntInclusive(1, featuresAll.length), shuffleFeatures(featuresAll.slice(0))),
          description: description[i],
          photos: 'http://o0.github.io/assets/images/tokyo/hotel' + getRandomIntInclusive(1, 3) + '.jpg',
        },

        location: location
      };
      ads.push(advert);
    }
    return ads;
  }


  var map = document.querySelector('.map');
  map.classList.remove('map--faded');


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
      pins.appendChild(newElement);
    }
    container.appendChild(pins);
  }

  drawPin(generateAds(COUNT_ADS), mapPins);
})();
