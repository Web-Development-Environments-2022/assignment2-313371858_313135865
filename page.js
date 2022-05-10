var divs = 
    ['Welcome', 'Register', 'Login', 'Settings','Game','Restart'] ;
  
function alternateDivs(div_id) {
    if (div_id != 'Game'){
        audio.pause();
    }
    if (div_id != 'Restart'){
        stopConfetti()
    }

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

function alternateConfetti(){
    for (var index = 0; index < divs.length; index++){
            var y = document.getElementById(divs[index]);
            y.style.display = "none";
    }
}




