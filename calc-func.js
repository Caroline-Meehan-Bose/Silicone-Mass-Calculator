function myFunction() {
  var x = document.getElementById("frm1");
    
  if (x.elements[0].value == "") { 
        window.alert("Please enter the part volume."); 
        x.elements[0].focus(); 
  }
  else if (x.elements[1].value == "") { 
        window.alert("Please enter the number of parts you'd like molded."); 
        x.elements[1].focus(); 
  }
  else {

    //specific volume of silicone: 1.1-1.5 g/cm^3
    var mass = x.elements[0].value * 0.0013;
    var numparts = x.elements[1].value;
  
    var text = 
        "<br>" +
        "Mass per part: " + 
        mass.toFixed(2) + 
        " grams" +
        "<br>" +
        "Total mass: " +
        (mass * numparts).toFixed(2) + 
        " grams";
        
    document.getElementById("demo").innerHTML = text;
    }
  }