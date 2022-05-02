var divs = 
    ['Welcome', 'Register', 'Login', 'About'] ;
  
function alternateDivs(div_id) {
    
    var x = document.getElementById(div_id);
    if (x.style.display === "none") {
        x.style.display = "block";
        
        }
    else {
        x.style.display = "none";
        }
    for (var index = 0; index < divs.length; index++){
        if (div_id != divs[index]){
            var y = document.getElementById(divs[index]);
            y.style.display = "none";
        }
    }
}




