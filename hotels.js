fetch("https://hotels4.p.rapidapi.com/properties/list?destinationId=1474927&pageNumber=1&checkIn=2021-03-12&checkOut=2021-03-14&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fe2be3ebc9msha38fa8cac5dbaddp1dd0dejsn9ace77793bbf",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
