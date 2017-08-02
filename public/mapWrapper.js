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
  return marker;
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
  console.log(chicago)
  this.googleMap.setCenter(chicago);
  this.addMarker(chicago);
};

MapWrapper.prototype.findLocation = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var here = {lat: lat, lng: lng};
    //console.log(here)
    //console.log("this is:", this.googleMap)
    this.googleMap.setCenter(here);
    this.addMarker(here);
    //why is this. undefined?
  }.bind(this))
};

MapWrapper.prototype.openInfoWindow = function(coords, infoData) {
  console.log(coords)
  var marker = this.addMarker(coords);
  console.log(marker)
  google.maps.event.addListener(marker, 'click', function() {
  var infoWindow = new google.maps.InfoWindow({
   content: infoData
 })
    infoWindow.open(this.googleMap, marker)
});
 // console.log("marker is:", marker)
  // console.log("this is:", this)
  // console.log("infoWindow is:", infoWindow)
  // console.log("event is:", event)
};

