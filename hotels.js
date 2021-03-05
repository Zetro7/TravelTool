fetch(urlFinal, {
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