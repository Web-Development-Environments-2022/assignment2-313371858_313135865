

$(document).ready(function(){
  localStorage.setItem('k','k')
$(function() {
    $("form[name='registration']").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        }, password: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },  
        email: "Please enter a valid email address"
      },
      submitHandler: function() {
        submit()
        document.getElementById('Register').style.display = "none"
      }
    });
  });

  function submit(){
    let username = document.getElementById('firstname')
    let password = document.getElementById('password')
    if (!localStorage.getItem(username.value)){
      console.log(username.value)
      localStorage.setItem(username,password)
      window.alert("Successful registration")
      
    }
    else{
      window.alert("Already signed in")
    }
  }
})