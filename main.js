//fname=Jacob&lname=Johnson&origin=Pittsburgh&destination=Miami&originAir=Pittsburgh%2C+PA+%28PIT%29&destAir=Miami%2C+FL+-+International+%28MIA%29
var values = window.location.search;

var splitData = values.split("=")
//Additional splits needed once two drop downs are used
var originSplit1 = splitData[5].split("%28");
var destSplit1 = splitData[6].split("%28");
var originSplit2 = originSplit1[1].split("%");
var destSplit2 = destSplit1[1].split("%");
var departSplit = splitData[7].split("&");
var depart = departSplit[0];
var arrive = splitData[8];



var url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/";
var origin = originSplit2[0].concat("-sky");
var dest = destSplit2[0].concat("-sky");
var outbound = depart;
var inbound = arrive;
var urlex = "?inboundpartialdate=";

var urlFinal = url.concat(origin.concat("/".concat(dest.concat("/".concat(outbound.concat(urlex.concat(inbound)))))));

console.log(urlFinal);

fetch(urlFinal, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eee204e8b3msh0f6a1cc96c72584p13af77jsnad25c961126a",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(response.Quotes[0].MinPrice);
    var price = response.Quotes[0].MinPrice;
    var airline = response.Carriers[0].Name;
    document.getElementById("price").innerHTML = price;
    document.getElementById("airline").innerHTML = airline;
})
.catch(err => {
	console.error(err);
});
