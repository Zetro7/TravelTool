fetch("https://hotels4.p.rapidapi.com/properties/get-details?id=424023&locale=en_US&currency=USD&checkOut=2020-01-15&adults1=1&checkIn=2020-01-08", {
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
