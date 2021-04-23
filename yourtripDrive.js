const duration = localStorage.getItem('driveTime');
const gasStops = localStorage.getItem('gasStopsE');
const driveCost = localStorage.getItem('driveCostE');

console.log(duration);
console.log(gasStops);
console.log(driveCost);

//document.getElementById("timeH").innerHTML = "Driving Time*: ";
//document.getElementById("gasH").innerHTML = "Gas Stops*: ";
//document.getElementById("costH").innerHTML = "Cost*: $";

document.getElementById("driveTime").innerHTML = duration;
document.getElementById("gasStops").innerHTML = gasStops;
document.getElementById("driveCost").innerHTML = driveCost;