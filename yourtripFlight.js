

const link = localStorage.getItem('flightLink');
const airline = localStorage.getItem('flightAirline');
const flightCost = localStorage.getItem('flightCost');

console.log(link);
console.log(airline);
console.log(flightCost);

var split1 = link.split('"');
console.log(split1);

var flightLink = split1[1];
console.log(flightLink);

document.getElementById("flightPrice").innerHTML = flightCost;
document.getElementById("flightAirline").innerHTML = airline;
document.getElementById("flightLink").innerHTML = "Book Here";
var a = document.getElementById("flightLink");
a.href = flightLink;
