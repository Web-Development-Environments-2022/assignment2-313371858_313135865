

function initSettings(){
    food_remain = document.getElementById("number_of_balls").value *2
    ghostNumFromUser = document.getElementById("number_of_ghosts").value;
    gameLength = document.getElementById("amount_of_time").value;
    // Colors.
    color5 = document.getElementById("5_color").value;
    color15 = document.getElementById("15_color").value;
    color25 = document.getElementById("25_color").value;
    startGame()
    alternateDivs('Game');
}

function randomSettings(){
    
    food_remain = randomIntFromInterval(50, 90) *2
    ghostNumFromUser = randomIntFromInterval(1, 4)
    gameLength = randomIntFromInterval(60,120)
    // Colors.
    color5 = "#" + Math.floor(Math.random()*16777215).toString(16);
    color15 = "#" +  Math.floor(Math.random()*16777215).toString(16);
    color25 = "#" +  Math.floor(Math.random()*16777215).toString(16);
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

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
 