var userData = window.location.search;
//This section parses the userdata string to pull out origin and destination
var splitNames = userData.split("=");
//console.log(splitNames);
var originSplit = splitNames[3].split("&");
var destSplit = splitNames[4].split("&");

//These variables are now user defined and sent to the API
var origin = originSplit[0];
var destination = destSplit[0];
