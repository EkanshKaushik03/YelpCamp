const map = L.map('map').setView([47.0202,-113.1331], 3);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// const markers = new L.MarkerClusterGroup();

// campgrounds.forEach(campground => {
//     if (campground.geometry && campground.geometry.coordinates) {
//       const [lng, lat] = campground.geometry.coordinates
//       markers.addLayer(L.marker([lat,lng]));
//     }
// })

// map.addLayer(markers);
const markers = new L.MarkerClusterGroup();

campgrounds.forEach(campground => {
    if (
        campground.geometry && 
        Array.isArray(campground.geometry.coordinates) && 
        campground.geometry.coordinates.length === 2
    ) {
        const [lng, lat] = campground.geometry.coordinates; // Extract coordinates
        const marker = L.marker([lat, lng])
        
        marker.bindPopup(`
            <h5>${campground.properties.popUpMarkup}</h5>
        `);
        markers.addLayer(marker); // Add marker (Lat first, then Lng for Leaflet)
    } else {
        console.error('Invalid coordinates:', campground);
    }
});

map.addLayer(markers); // Add the cluster group to the map
