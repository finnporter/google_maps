var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
};

MapWrapper.prototype.addMarker = function(coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);

};

MapWrapper.prototype.addClickEvent = function() {
  google.maps.event.addListener(this.googleMap, 'click', function(event) {
    var position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
    this.addMarker(position);
  }.bind(this))
};

MapWrapper.prototype.bounceMarkers = function() {
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
};

MapWrapper.prototype.centerChicago = function() {
  var chicago = {lat: 41.948438, lng: -87.655333};
  this.googleMap.setCenter(chicago);
};

MapWrapper.prototype.openInfoWindow = function(marker, infoData) {
  var infoWindow = new google.maps.InfoWindow({
   content: infoData
 })
  google.maps.event.addListener(marker, 'click', function(marker) {
    infoWindow.open(this.googleMap, marker)});
  console.log("marker is:", marker)
  console.log("this is:", this)
  console.log("infoWindow is:", infoWindow)
  console.log("event is:", event)
};

