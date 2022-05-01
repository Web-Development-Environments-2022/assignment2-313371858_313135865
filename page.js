var divs = [
    ['Welcome', 'Register', 'Login', 'About'],
  ];
  
function alternateDivs(div) {
    if (div in divs){
    var x = document.getElementById(div);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        }
    }
}
