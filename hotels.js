fetch("https://hotels4.p.rapidapi.com/properties/list?destinationId=1474927&pageNumber=1&checkIn=2021-03-26&checkOut=2021-03-31&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fe2be3ebc9msha38fa8cac5dbaddp1dd0dejsn9ace77793bbf",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})

//var hotelArray = response.data.body.searchResults.results[]
.then(response => response.json())
.then(response => {
	console.log(response);
    var hotelCount = response.data.body.searchResults.results.length;
    for(k = 0; k < hotelCount/10; k++)
    {
        console.log(response.data.body.searchResults.results[k]);
        console.log(response.data.body.searchResults.results[k].urls);
    }
    
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var temp5;
	
    var table = document.getElementById("hotelTable");
    
    for(var n = 0; n < hotelCount/10; n++){
        temp1 = response.data.body.searchResults.results[n].name;
        temp2 = response.data.body.searchResults.results[n].ratePlan.price.current + " per night";
         temp3 = response.data.body.searchResults.results[n].starRating + " Stars";
        for(var l = 0; l < hotelCount/10; l++)
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
        cell4.innerHTML = temp4;
     
        
    }
})


.catch(err => {
	console.error(err);
});
