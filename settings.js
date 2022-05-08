function initSettings(){
    numberOfBalls = document.getElementById("number_of_balls").value;
    ghostNumFromUser = document.getElementById("number_of_ghosts").value;
    // Colors.
    color1 = document.getElementById("5_color").value;
    color2 = document.getElementById("15_color").value;
    color3 = document.getElementById("25_color").value;
    startGame()
    alternateDivs('Game');
}


keys = [];

function chooseKeyUp(){
    $(document).on('keydown',function(event){
        key_pressed = event.keyCode;
        document.getElementById("buttonUp").value = displayKey(key_pressed);
        upKey = key_pressed;
        $(document).off('keydown'); 
        })

}

function chooseKeyDown(){
    $(document).on('keydown',function(event){
        key_pressed = event.keyCode;
        document.getElementById("buttonDown").value =  displayKey(key_pressed);
        downKey = key_pressed;
        $(document).off('keydown');
        })

}

function chooseKeyLeft(){
    $(document).on('keydown',function(event){
        key_pressed = event.keyCode;
        document.getElementById("buttonLeft").value =  displayKey(key_pressed);
        leftKey = key_pressed;
        $(document).off('keydown');
        })

}

function chooseKeyRight(){
    $(document).on('keydown',function(event){
        key_pressed = event.keyCode;
        document.getElementById("buttonRight").value =  displayKey(key_pressed);
        rightKey = key_pressed;
        $(document).off('keydown');
        })

}


function displayKey(key_pressed)
{
    switch(key_pressed){
        case 38:
            return "⇧";
        case 40:
            return "⇩";
        case 39:
            return "➪";
        case 37:
            return "⇦";
        default:
            return String.fromCharCode(event.keyCode);
    }
}
