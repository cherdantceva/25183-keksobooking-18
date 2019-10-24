'use strict';
(function () {
  var MAP_WIDTH = 1200;
  var MAP_YMIN = 130;
  var MAP_YMAX = 630;
  var mapPage = document.querySelector('.map');
  window.mapPage = mapPage;
  window.MAP_WIDTH = MAP_WIDTH;
  window.MAP_YMIN = MAP_YMIN;
  window.MAP_YMAX = MAP_YMAX;

  var filterForm = document.querySelector('.map__filters');
  var filterFormSelect = document.querySelectorAll('.map__filters .map__filter');
  window.filterForm = filterForm;
  window.filterFormSelect = filterFormSelect;
})();
