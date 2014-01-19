function initialize() 
{
    var mapOptions = {
        zoom : 2, center : new google.maps.LatLng(15, 0) 
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
function setAllMap(map) 
{
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
function showMarkers() 
{
    setAllMap(map);
}
function clearMarkers() 
{
    setAllMap(null);
}
function deleteMarkers() 
{
    clearMarkers();
    markers = [];
}
function updateMap() 
{
    deleteMarkers();
    for (var i = 0; i < retData.length; i++) 
    {
        var pos = new google.maps.LatLng(retData[i].lat, retData[i].lon);
        var marker = new google.maps.Marker(
        {
            position : pos, 
			map : map, 
			title : retData[i].name, 
			draggable : false, 
			animation : google.maps.Animation.DROP 
        });
        markers.push(marker);
    }
    showMarkers();
}
