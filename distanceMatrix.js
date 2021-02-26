function callback(response, status){
    if(status == "OK"){
        var origin = response.originAddresses;
        var destination = response.destinationAddresses;
        var results = response.rows[0].elements;
        var element = results[0];
        var distance = element.distance.text;
        var duration = element.duration.text;
        console.log(response);
        console.log(origin);
        console.log(destination);
        console.log(distance);
        console.log(duration);
    }
}

var origin = "Pittsburgh";
var destination = "Cleveland";

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
    {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }, callback);
