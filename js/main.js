var ADVERT_1 = {
  "author": {
    "avatar": "img/avatars/user01.png"
},

  "offer": {
    "title": "Шикарные хоромы",
    "address": "600, 350",
    "price": 300000,
    "type": "palace",
    "rooms": 35,
    "guests": 100500,
    "checkin": "13:00",
    "checkout": "12:00",
    "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    "description": "Все останутся довольны. Королевские апартаменты с двадцатью стеклянными балконами",
    "photos": [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ],
  },

  "location": {
    "x": 600,
    "y": 350.
  }
};

var ADVERT_2 = {
  "author": {
    "avatar": "img/avatars/user02.png"
  },

  "offer": {
    "title": "Хижина рыбака",
    "address": "150, 200",
    "price": 80,
    "type": "bungalo",
    "rooms": 1,
    "guests": 1,
    "checkin": "15:00",
    "checkout": "12:00",
    "features": ["washer"],
    "description": "Дешево и сердито. В тесноте, но не в обиде",
    "photos": [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
    ],
  },

  "location": {
    "x": 150,
    "y": 200.
  }
};

var ADVERT_3 = {
  "author": {
    "avatar": "img/avatars/user03.png"
  },

  "offer": {
    "title": "Простая трехкомнатная квартира ",
    "address": "400, 586",
    "price": 450,
    "type": "flat",
    "rooms": 3,
    "guests": 1,
    "checkin": "15:00",
    "checkout": "13:00",
    "features": ["washer", "wifi"],
    "description": "В центре",
    "photos": [
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
    ],
  },

  "location": {
    "x": 150,
    "y": 200.
  }
};

function generateAds(amount) {
  var ads = [];
  for(var i = 0; i < amount; i++) {
    var advert = {
      "author": {
        "avatar": "img/avatars/user0"+ (i+1) +".png"
      },

      "offer": {
        "title": "Квартира " + (i + 1),
        "address": "600, 350",
        "price": 300000,
        "type": "palace",
        "rooms": 35,
        "guests": 100500,
        "checkin": "13:00",
        "checkout": "12:00",
        "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
        "description": "Все останутся довольны. Королевские апартаменты с двадцатью стеклянными балконами",
        "photos": [
          "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
          "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
          "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
        ],
      },

      "location": {
        "x": 600,
        "y": 350
      }
    };
    ads.push(advert);
  }
  return ads;
}

console.log(generateAds(4));



var ads = [ADVERT_1, ADVERT_2, ADVERT_3];


var map = document.querySelector('.map');
map.classList.remove('map--faded');

var template = '<button type="button" class="map__pin" style="left: 200px; top: 400px;">' +
  '<img src="img/avatars/user07.png" width="40" height="40" draggable="false" alt="Метка объявления">' +
  '</button>'

var pinTemplate = document.createDocumentFragment();




