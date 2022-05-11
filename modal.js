var modalOpen = false
function openModal(){
    var modal = document.getElementById("myModal")
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() {
  modal.style.display = "none";
}


}

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('#myModal').hide();
  }
});


$('body').click(function (event) {
  
  if (event.target.id != "modal-content" & modalOpen == true) {
     $("#myModal").hide();
     kmodalOpen = false
  }
  else{ modalOpen = true}
   
});



// $('body').click(function (event) {
//   window.alert("hi")
//    if(!$(event.target).closest('#myModal').length && !$(event.target).is('#myModal')) {
//      $("myModal").hide();
//    }     
// });

