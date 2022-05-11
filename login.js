
function validate_login(){
    username = document.getElementById("usernameLogin").value;
    password = document.getElementById("passwordLogin").value;
    if (username in localStorage){
        if (localStorage.getItem(username)==password){
            alternateDivs("Settings")
        }
        else{
        alert("Wrong password");
        }
    }
    else{
        alert("User name not exist");
    }
    document.getElementById("login_form").reset();
}
