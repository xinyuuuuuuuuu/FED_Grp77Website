
mapboxgl.accessToken = 
"pk.eyJ1IjoieDFueXV1IiwiYSI6ImNsc2NwdjRlYjAydzkya3BxOWxkc21vZnoifQ.eVyWXLe__4dfMrVuLCdOtw";

navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation, {enableHighAccuracy: true})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([1.287953, 103.851784])  
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 15
     });
     
     const shopCoordinate = [1.341197428627903, 103.77346754550254];
     
     var geojson = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry:{
                type: 'Point',
                coordinates: shopCoordinate
            },
            
            properties:{
                title: 'Mapbox',
                description: 'brown butter baked house'
            }
        }]
     };
     
     geojson.features.forEach(function(marker){
        var ele = document.createElement('div');
        ele.className = 'marker';
        
        new mapboxgl.Marker(ele).setLngLat(marker.geometry.coordinates).addTo(map)
    });
}



