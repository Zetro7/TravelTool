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
var arrive = splitData[4];

var url = "https://snowy-dream-918a.drake205.workers.dev/?https://api.flightapi.io/onewaytrip/6049617d5ebe2705663733fd/"
var urlex = "/1/0/0/Economy/USD"
var origin = originSplit2[0];
var dest = destSplit2[0];
var outbound = depart;

var urlfinal = url.concat(origin.concat("/".concat(dest.concat("/".concat(outbound.concat(urlex))))));
//"https://api.flightapi.io/onewaytrip/6049617d5ebe2705663733fd/PIT/LAX/2021-04-04/1/0/0/Economy/USD"
console.log(urlfinal);
fetch(urlfinal)
.then(response => response.json())
.then(response => {
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
    
    for(var i = 0; i < response.fares.length; i++){
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
        for(var j = 0; j < airlineCount; j++){
            if(airlineHold === airlineArray[j]){
                breakFlag = 1;
                //console.log("Broken");
            }
        }
        if(breakFlag == 0){
            for(var l = 0; l < airlineCount; l++){
                if(airlineArray[l] == null){
                    //console.log("Assigned");
                    airlineArray[l] = airlineHold;
                    priceArray[l] = "$" + response.fares[i].price.totalAmount;
                    linkArray[l] = response.fares[i].handoffUrl;
                    break;
                }
            }
        }
        tempCount++;
        if(airlineArray[airlineCount] != null){
            break;
        }
    }
    console.log(airlineArray);
    console.log(priceArray);
    
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
        
        cell3.appendChild(link);
        
        cell1.innerHTML = temp1;
        cell2.innerHTML = temp2;
        
        
    }
    
    //console.log(flightsArray.length);
    
    /*var test = response.fares;
    var priceOne = response.fares[0].price.totalAmount;
    var priceTwo = response.fares[1].price.totalAmount;
    var priceThree = response.fares[2].price.totalAmount;
    
    var idOne = response.fares[0].tripId;
    console.log(idOne);
    var idTwo = response.fares[1].tripId;
    var idThree = response.fares[2].tripId;
    
    var code1T = idOne.split(':');
    console.log(code1T);
    var code1 = code1T[1].substring(0,2);
    console.log(code1);
    var code2T = idTwo.split(':');
    var code2 = code2T[1].substring(0,2);
    var code3T = idThree.split(':');
    var code3 = code3T[1].substring(0,2);
    
    //var airline1 = response.airlines[0].name;
    //var airline2 = response.airlines[1].name;
    //var airline3 = response.airlines[2].name;
    
    for (var i = 0; i < response.airlines.length; i++){
        if(code1 === response.airlines[i].code){
            var airline1 = response.airlines[i].name;
            console.log(airline1);
        }
        if(code2 === response.airlines[i].code){
            var airline2 = response.airlines[i].name;
        }
        if(code3 === response.airlines[i].code){
            var airline3 = response.airlines[i].name;
        }
    }
    
    document.getElementById("price1").innerHTML = priceOne;
    document.getElementById("airline1").innerHTML = airline1;
    document.getElementById("price2").innerHTML = priceTwo;
    document.getElementById("airline2").innerHTML = airline2;
    document.getElementById("price3").innerHTML = priceThree;
    document.getElementById("airline3").innerHTML = airline3;*/
})
.catch(err => {
	console.error(err);
});