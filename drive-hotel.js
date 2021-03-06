//This section parses the userdata string to pull out origin and destination
var splitNames = userData.split("=");
console.log(splitNames);
var initGoogleURL = "https://www.google.com/search?q=";
var originSplit = splitNames[1].split("&");
var destSplit = splitNames[2].split("&");
var departSplit = splitNames[3].split("&");
var returnSplit = splitNames[4].split("&");
var destHold = destSplit[0].split("+");
var userBudget = splitNames[5];
window.localStorage.setItem('budget', userBudget);

//These variables are now user defined and sent to the API
//https://hotels4.p.rapidapi.com/locations/search?query=new%20york&locale=en_US
var origin = originSplit[0];
var dest = destHold[0].concat("%20".concat(destHold[1]));
var departDate = departSplit[0];
var returnDate = returnSplit[0];
var hotelLocationURL = "https://hotels4.p.rapidapi.com/locations/search?query=";
var finalHotelLocationURL = hotelLocationURL.concat(dest).concat("&locale=en_US");

if (finalHotelLocationURL.includes("undefined") == true)
{
	finalHotelLocationURL = finalHotelLocationURL.replace("undefined","");
}
    
console.log(finalHotelLocationURL);
console.log(departDate);
console.log(returnDate);

var returnDay = new Date(returnDate);
var departDay = new Date(departDate);

var days = Math.abs(departDay - returnDay);
totalDays = days/(1000 * 60 * 60 * 24);

console.log(totalDays);
console.log("pls");

window.localStorage.setItem('amtOfDays', totalDays);

fetch(finalHotelLocationURL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eee204e8b3msh0f6a1cc96c72584p13af77jsnad25c961126a",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(response.suggestions[0].entities[1].destinationId);
    var destinationID = response.suggestions[0].entities[1].destinationId;
    console.log(destinationID);
    ///////////////////////////////////////////////////////////////////////
    var userData = window.location.search;
    console.log(userData);

var hotelDataURL = "https://hotels4.p.rapidapi.com/properties/list?destinationId=";
var finalHotelDataURL = hotelDataURL.concat(destinationID).concat("&pageNumber=1&").concat("checkIn=").concat(departDate).concat("&").concat("checkOut=").concat(returnDate).concat("&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE");
console.log(finalHotelDataURL);
/*
destinationID + pageNumber=1(static) + checkIn + checkOut + pageSize=25(static) + adults1=1(static for now) + currency=USD(static) + locale=en_US(static)+sortOrder=PRICE(static)
*/


fetch(finalHotelDataURL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eee204e8b3msh0f6a1cc96c72584p13af77jsnad25c961126a",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})


.then(response => response.json())
.then(response => {
	console.log(response);
    var hotelCount = response.data.body.searchResults.results.length;
    for(k = 0; k < hotelCount/4; k++)
    {
        console.log(response.data.body.searchResults.results[k]);
    }
	
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var table = document.getElementById("hotelTable");
   
    
    for(var n = 0; n < 8; n++){
        
        var googleHyperLinkLabel = "Book Here";
        var finalGoogleURL = googleHyperLinkLabel.link(initGoogleURL.concat(response.data.body.searchResults.results[n].name));
        
        temp1 = response.data.body.searchResults.results[n].name;
        temp2 = response.data.body.searchResults.results[n].ratePlan.price.current;
        temp3 = response.data.body.searchResults.results[n].starRating;
	 
        for(var l = 0; l < 8; l++)
        {
            temp4 = response.data.body.searchResults.results[n].roomsLeft;
            if(temp4 == undefined)
                {
                    temp4 = "No Rooms Remaining";
                }
        }
        var row = document.getElementById("hotelTable").insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3); 
        
        cell1.innerHTML = temp1;
        cell2.innerHTML = temp2;
        cell3.innerHTML = temp3;
        cell4.innerHTML = finalGoogleURL;
        //cell5.innerHTML = finalGoogleURL;
      
        document.getElementById("loader2").width = 0;
        document.getElementById("loader2").height = 0;
    }
 
})

.catch(err => {
	console.error(err);
});
})
.catch(err => {
	console.error(err);
});
