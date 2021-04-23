const hotelLink = localStorage.getItem('hotelLink');
const name = localStorage.getItem('hotelName');
const hotelCost = localStorage.getItem('hotelCost');
var initGoogleURL = "https://www.google.com/search?q=";

console.log(hotelLink);
console.log(name);
console.log(hotelCost);

var split2 = hotelLink.split('"');
console.log(split2);

var hotelLinkF = split2[1];
//hotelLinkF.replace(' ', "%20");
console.log(hotelLinkF);

document.getElementById("hotelCost").innerHTML = hotelCost;
document.getElementById("hotelName").innerHTML = name;
document.getElementById("hotelLink").innerHTML = "Book Here";
var a = document.getElementById("hotelLink");
a.href = hotelLinkF;
