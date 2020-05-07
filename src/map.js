//create map (centered in oxford)
// 'map' specifies which tag id to attach to
var map = L.map('map', {
  center: [51.7985, -1.2716],
  zoom: 9.5,
  maxZoom: 16,
});

//add tiles from mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlrZXdhbG1zbGV5IiwiYSI6ImNrOGRhNmFtYTB1NDgzaGx2emcyOGFmdmwifQ.0pmT0dDyyqU4oXgMdpbcLg', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  access_token: 'pk.eyJ1IjoibWlrZXdhbG1zbGV5IiwiYSI6ImNrOGRhNmFtYTB1NDgzaGx2emcyOGFmdmwifQ.0pmT0dDyyqU4oXgMdpbcLg'
}).addTo(map);
