document.getElementById('flightTable').addEventListener('click', function(item){
    console.log(item.path)
    var tableLength = document.getElementById("flightTable").rows.length;
    for(var i = 0; i < tableLength; i++){
        var rows = document.getElementById("flightTable").rows[i]
        //console.log(rows);
        if(rows.classList.contains('highlight'))
            rows.classList.remove;
    }
    
    var row = item.path[1];
  
    var row_value = "";
  
    for (var j = 0; j < row.cells.length; j++) {
  
        row_value += row.cells[j].innerHTML;
        row_value += "|";
    }
    document.getElementById("flightChoice").value = row_value;
    var presentValue = ""
    
    for (var k = 0; k < 2; k++) {
  
        presentValue += row.cells[k].innerHTML;
        presentValue += " ";
    }
    document.getElementById("flightChoice1").value = presentValue;
    //if (row.classList.contains('highlight'))
    //    row.classList.remove('highlight');
    //else
    //    row.classList.add('highlight');
    
})