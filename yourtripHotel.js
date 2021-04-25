const hotelLink = localStorage.getItem('hotelLink');
const name = localStorage.getItem('hotelName');
const hotelCost = localStorage.getItem('hotelCost');
const totalHotelDays = localStorage.getItem('amtOfDays');
var initGoogleURL = "https://www.google.com/search?q=";

console.log(hotelLink);
console.log(name);
console.log(hotelCost);
console.log(totalHotelDays);

var split2 = hotelLink.split('"');
console.log(split2);

var hotelLinkF = split2[1];
//hotelLinkF.replace(' ', "%20");
console.log(hotelLinkF);
if(totalHotelDays > 1){
    document.getElementById("hotelDays").innerHTML = "for " +totalHotelDays+ " nights at ";
}
else{
    document.getElementById("hotelDays").innerHTML = "";
}
document.getElementById("hotelCost").innerHTML = hotelCost + " Per Night.";
document.getElementById("hotelName").innerHTML = name;
document.getElementById("hotelLink").innerHTML = "Book Here";
var a = document.getElementById("hotelLink");
a.href = hotelLinkF;
