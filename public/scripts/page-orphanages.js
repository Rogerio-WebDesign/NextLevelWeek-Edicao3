//  Tipos de dados do js
// String    ""
// Number    01
// Object    {}
// Boolean   true ou false
// Array     [] <- "mesmo que uma lista dentro das chaves"


const map = L.map('mapid').setView([-23.421407, -51.933046], 12);
/* const map = L.map('mapid').setView([51.505, -0.09], 13);
 */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

/* Popup do mapa */
L.marker([-23.421407, -51.933046]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup()