
function validate_login(){
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;
    if (username in localStorage){ // TODO: change to search in local storage
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
