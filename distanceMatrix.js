function callback(response, status){
    if(status == "OK"){
        var origin = response.originAddresses;
        var destination = response.destinationAddresses;
        var results = response.rows[0].elements;
        var element = results[0];
        var distance = element.distance.text;
        var duration = element.duration.text;
        console.log(response);
        //console.log(origin);
        //console.log(destination);
        //console.log(distance);
        //console.log(duration);
        //This sends the duration to the webpage
        document.getElementById("driveTime").innerHTML = duration;
        
        //Calculate Gas Station Stops
        var distSplit = distance.split(" ");
        console.log(distSplit);
        var distInt = parseInt(distSplit[0].replace(/,/g, ''));
        var gasStopsDec = distInt / 275;
        //275 is calculated using average car gas mileage and an 11 gallon gas tank. 11 allows for 
        //the driver to fill their tank before it is empty
        var gasStops = gasStopsDec.toFixed();
        //console.log(distInt);
        //console.log(gasStops);
        document.getElementById("gasStops").innerHTML = gasStops;
    }
}
//fname=Jacob&lname=Johnson&origin=Pittsburgh&destination=Miami&originAir=Pittsburgh%2C+PA+%28PIT%29&destAir=Miami%2C+FL+-+International+%28MIA%29
var userData = window.location.search;
//This section parses the userdata string to pull out origin and destination
var splitNames = userData.split("=");
//console.log(splitNames);
var originSplit = splitNames[3].split("&");
var destSplit = splitNames[4].split("&");

//These variables are now user defined and sent to the API
var origin = originSplit[0];
var destination = destSplit[0];

//console.log(window.location.search);

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
    {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }, callback);

