const map = L.map("mapid").setView([-23.0863016,-45.5070517], 15);


//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

//create icon



L.marker([-23.0863016,-45.5070517])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
