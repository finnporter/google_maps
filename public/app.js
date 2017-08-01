var initialize = function() {
  var center = {lat: 51.509865, lng: -0.118092};
  var mapDiv = document.querySelector('#main-map');
  var mainMap = new MapWrapper(mapDiv, center, 12);
  var infoData = '<div id="content">'+
            '<h1 id="firstHeading" class="firstHeading">Theo\'s Pizza</h1>'+
            '<div id="bodyContent">'+
            '<p>Best Pizza in town.</p>'+
            '</div>'+
            '</div>';
  mainMap.addMarker(center);


  var theosPizza = {lat: 51.473712, lng: -0.090585};
  mainMap.addMarker(theosPizza);
  mainMap.openInfoWindow(theosPizza, infoData);

  mainMap.addClickEvent();

  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))

  var chicagoButton = document.querySelector('#button-chicago');
  chicagoButton.addEventListener('click', mainMap.centerChicago.bind(mainMap))

  var geoLocButton = document.querySelector('#button-where-am-i');
  geoLocButton.addEventListener('click', mainMap.findLocation.bind(mainMap))
}

window.addEventListener('load', initialize);