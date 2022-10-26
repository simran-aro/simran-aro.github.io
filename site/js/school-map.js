// import schools from '../data/schools.js';
import catchments from '../data/catchments.js';

function initializeSchoolMap() {
    let schoolMap = L.map('school-map').setView([39.95248581284671, -75.16445594067633], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(schoolMap);

    const phl = L.geoJSON(catchments, {
        style: { fill: null, color: 'black', weight:1 },
    }).addTo(schoolMap);

    schoolMap.fitBounds(phl.getBounds());

    return schoolMap;
}

function makeSchoolFeature(school) {
    return {
        'type': 'Feature',
        'id': school['sdp_id'],
        'properties': {
            'name': school['name'],
            'sdp_id': school['sdp_id'],
            'City Council District': school['City Council District'],
        },
        'geometry': school['geom'],
    };
}

function showSchoolsOnMap(schoolsToShow, schoolMap) {
    if (schoolMap.schoolLayers !== undefined) {
      schoolMap.removeLayer(schoolMap.schoolLayers);
    }

    const schoolFeatureCollection = {
        'type': 'FeatureCollection',
        'features': schoolsToShow.map(makeSchoolFeature),
    };

    schoolMap.schoolLayers = L.geoJSON(schoolFeatureCollection, {
        pointToLayer: (geoJsonPoint, latlng) => L.circleMarker(latlng),
        style: {
            stroke: 0.25,
            fillOpacity: 0.5,
            radius: 2.5,
        },
    })
    .bindTooltip(layer => layer.feature.properties['name'])
    .addTo(schoolMap);
}

export {
    initializeSchoolMap,
    showSchoolsOnMap,
};