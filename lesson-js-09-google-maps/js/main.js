var map,
    infoWindowContent = document.getElementsByClassName('info-freeUA')[0].outerHTML;

function initMap() {
    var freeUA = {lat: 48.7344336, lng: 37.5795707},
        map = new google.maps.Map(document.getElementById('map'), {
            center: freeUA,
            zoom: 18
        }),

        marker = new google.maps.Marker({
            position: freeUA,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title: 'Hello from FreeUA and Beetroot'
        }),
        infowindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });

    marker.setMap(map);

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}


