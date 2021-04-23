//?originAir=Aberdeen%2C+SD+%28ABR%29&destAir=Abilene%2C+TX+%28ABI%29&depart=2021-03-29&return=2021-03-30
var values = window.location.search;
console.log(values);
var splitData = values.split("=")
console.log(splitData);
//Additional splits needed once two drop downs are used
var originSplit1 = splitData[1].split("%28");
var destSplit1 = splitData[2].split("%28");
var originSplit2 = originSplit1[1].split("%");
var destSplit2 = destSplit1[1].split("%");
var departSplit = splitData[3].split("&");
var depart = departSplit[0];
var returnDate = splitData[4];
console.log(returnDate);

var urlOne = "https://shy-river-a2c7.drake205.workers.dev/?https://api.flightapi.io/onewaytrip/60822a2145695c0519dce8db/"
var urlRound = "https://shy-river-a2c7.drake205.workers.dev/?https://api.flightapi.io/roundtrip/60822a2145695c0519dce8db/"
var urlex = "/1/0/0/Economy/USD"
var origin = originSplit2[0];
var dest = destSplit2[0];
var outbound = depart;

if(returnDate != null && returnDate != ""){
    var urlfinal = urlRound.concat(origin.concat("/".concat(dest.concat("/".concat(outbound.concat("/".concat(returnDate.concat(urlex))))))));
    console.log(urlfinal);
}
else{
    var urlfinal = urlOne.concat(origin.concat("/".concat(dest.concat("/".concat(outbound.concat(urlex))))));
    console.log(urlfinal);
}

//var urlfinal = url.concat(origin.concat("/".concat(dest.concat("/".concat(outbound.concat(urlex))))));
//"https://api.flightapi.io/onewaytrip/6049617d5ebe2705663733fd/PIT/LAX/2021-04-04/1/0/0/Economy/USD"
console.log(urlfinal);
fetch(urlfinal)
.then(response => response.json())
.then(response => {
    if(response.fares.length > 10){
	console.log(response);
    
    var airlineCount = response.airlines.length;
    
    var airlineArray = new Array(airlineCount);
    var priceArray = new Array(airlineCount);
    var linkArray = new Array(airlineCount);
    
    var idHold;
    var codeHold;
    var codeFinal;
    var airlineHold;
    var breakFlag;
    var tempCount = 0;
    
    //This section provides the 5 cheapest results
    for(var m = 0; m < 5; m++){
        idHold = response.fares[m].tripId;
        codeHold = idHold.split(':');
        codeFinal = codeHold[1].substring(0,2);
        //This loop finds the corresponding airline to airline code
        for(var n = 0; n < airlineCount; n++){
            if(codeFinal === response.airlines[n].code){
                airlineHold = response.airlines[n].name;
                //console.log(airlineHold);
            }
        }
        airlineArray[m] = airlineHold;
        priceArray[m] = "$" + response.fares[m].price.totalAmount;
        linkArray[m] = response.fares[m].handoffUrl;
    }
    
    //This section provides one flight result from every airline
    for(var i = 5; i < response.fares.length; i++){
        breakFlag = 0;
        idHold = response.fares[i].tripId;
        codeHold = idHold.split(':');
        codeFinal = codeHold[1].substring(0,2);
        //console.log(codeFinal);
        for(var k = 0; k < airlineCount; k++){
            if(codeFinal === response.airlines[k].code){
                airlineHold = response.airlines[k].name;
                //console.log(airlineHold);
            }
        }
        //Check if an airline already has a result
        for(var j = 0; j < airlineCount; j++){
            if(airlineHold === airlineArray[j+5]){
                breakFlag = 1;
                //console.log("Broken");
            }
        }
        if(breakFlag == 0){
            for(var l = 0; l < airlineCount; l++){
                if(airlineArray[l+5] == null){
                    //console.log("Assigned");
                    airlineArray[l+5] = airlineHold;
                    priceArray[l+5] = "$" + response.fares[i].price.totalAmount;
                    linkArray[l+5] = response.fares[i].handoffUrl;
                    break;
                }
            }
        }
        tempCount++;
        if(airlineArray[airlineCount+5] != null){
            break;
        }
    }
    console.log(airlineArray);
    console.log(priceArray);
    
    //These few lines removes empty slots from the arrays
    var airlinesFinal = airlineArray.filter(function(el){
        return el != null;
    });
    
    var pricesFinal = priceArray.filter(function(el){
        return el != null;
    });
    
    var linksFinal = linkArray.filter(function(el){
        return el != null;
    });
    
    console.log(airlinesFinal);
    console.log(pricesFinal);
    console.log(linksFinal);
    
    var temp1;
    var temp2;
    var temp3;
    var table = document.getElementById("flightTable");
    
    for(var n = 0; n < pricesFinal.length; n++){
        temp1 = airlinesFinal[n];
        temp2 = pricesFinal[n];
        temp3 = linksFinal[n];
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        var link = document.createElement("a");
        link.setAttribute("href", temp3);
        var linkText = document.createTextNode("Book Here");
        link.appendChild(linkText);
        
        
        cell1.innerHTML = temp1;
        cell2.innerHTML = temp2;
        cell3.appendChild(link);
        
        
    }
        document.getElementById("loader").width = 0;
        document.getElementById("loader").height = 0;
        return 1;
    }//endif
    else{
        console.log("Failed to Load Data");
        console.log(response);
        window.alert("Failed to Load Flights\nTry searching again or changing your airports.");
        return 0;
    }
    
    //console.log(flightsArray.length);
    
})
.catch(err => {
	console.error(err);
});
