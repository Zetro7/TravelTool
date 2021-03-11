fetch("https://flight-price-comparison.p.rapidapi.com/60495b935ebe270566373246/PIT/LAX/2021-04-04/2/0/0/Economy/USD/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c0fc24bd79msh019f02987794e44p153e68jsncddddeab7434",
		"x-rapidapi-host": "flight-price-comparison.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});