fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/PIT-sky/MIA-sky/2021-03-01?inboundpartialdate=2021-03-04", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eee204e8b3msh0f6a1cc96c72584p13af77jsnad25c961126a",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
