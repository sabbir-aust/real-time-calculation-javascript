
    //Add rows and column to the table
    function myFunction(tableID){
      var tb = document.getElementById("myTable");

      var tbodyRef = document.getElementById("myTable").getElementsByTagName("myTBody")[0];
      //console.log(tableBody);
      var rowCount = tb.tBodies.namedItem("myTBody").rows.length;
      console.log(rowCount);
      //var newRow = tbodyRef.insertRow(rowCount);
      var row = tb.tBodies.namedItem("myTBody").insertRow(rowCount);     
      var colCount = tb.tBodies.namedItem("myTBody").rows[0].cells.length;
      console.log(colCount);
      row.id = 'row_'+rowCount;
        for (var i = 0; i < colCount; i++) {
            var newcell = row.insertCell(i);
            //var newcell = newRow.insertCell(i);
            newcell.outerHTML = tb.tBodies.namedItem("myTBody").rows[0].cells[i].outerHTML;            
        }
      var listitems= row.getElementsByTagName("input")
            for (i=0; i<listitems.length; i++) {
              listitems[i].setAttribute("oninput", "calculate('"+row.id+"')");
            }
    }


  //Calculation by rows
    function calculate(elementID) {
    var mainRow = document.getElementById(elementID);
    var x = mainRow.querySelectorAll('[name=basic]')[0].value || 0;
    var y = mainRow.querySelectorAll('[name=allowance]')[0].value ||0;
    var total = mainRow.querySelectorAll('[name=total]')[0];
    var myResult1 =  parseInt(x) + ((parseInt(y) * parseInt(x))/100);
    total.value = myResult1;
     
    //document.getElementById("result").value = myResult1;
    var table = document.getElementById("myTable").tBodies.namedItem("myTBody");
    // var sumVal = 0;

    //   for(var i = 0; i < table.rows.length; i++)
        
    //         {
    //             let innerCell = table.rows[i].cells[4];
    //             let textBox = innerCell.getElementsByTagName("input")[0];
         
    //             sumVal = sumVal + parseFloat(textBox.value);
    //             document.getElementById("result").value = sumVal;
    //         }
            //console.log(sumVal);
   
            
    var checkbox = table.getElementsByClassName("myCheck");
    var checkVal = 0;
   
    for (var i = 0; i < checkbox.length; i++) {
      
      if (checkbox[i].checked) {
        
        let innerCell = table.rows[i].cells[4];
        var textBox = innerCell.getElementsByTagName("input")[0];
        var text = textBox.value;

        checkVal = checkVal + parseFloat(text);
        
        //selecteditem += checkbox[i].value;
      }
        document.getElementById("result").value = checkVal;

}

  }


  //Delete rows from the table
    function DeleteRows() 
    {
      
      var finalResult = document.getElementById('result').value;
      //console.log(finalResult);
      var table = document.getElementById('myTable');
      
      var rowCount = table.rows.length;
      let lastRow = table.rows[table.rows.length-1].cells[4];
       //console.log(lastRow);
      let lastCell = lastRow.getElementsByTagName("input")[0];
      let lastCellValue =(lastCell.value);
      console.log(lastCellValue);

        // if(rowCount == 2){
        //   // var gg = (lastCellValue);
        //   // console.log(gg);
        //   document.getElementById("result").value = 0;
        // } else{
        //     var gg = (finalResult) - (lastCellValue);
        //     console.log(gg);
        //     document.getElementById("result").value = gg;
        //   }

      if(rowCount > '2'){
        
        var row = table.deleteRow(rowCount-1);
        rowCount--; 
      }
      else{
        alert('There should be atleast one row');
        document.getElementById("result").value = 0;
        
      }
      

}
