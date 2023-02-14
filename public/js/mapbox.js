/*eslint-disable*/

const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiZXNsYW1raGFsZWZhIiwiYSI6ImNsZTNoeWFjcTA1ZXUzb21wb2RuMHhtaXEifQ.4z7aIfZD42PtaZiMEy_pQw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/eslamkhalefa/cle3kke84000h01nuc7tmo58r',
  scrollZoom: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  const el = document.createElement('div');
  el.className = 'marker';
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  new mapboxgl.Popup({
    offset: 30
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}:${loc.description} </p>`)
    .addTo(map);
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100
  }
});
