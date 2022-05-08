function initSettings(){
    numberOfBalls = document.getElementById("number_of_balls").value;
    ghostNumFromUser = document.getElementById("number_of_ghosts").value;
    // Colors.
    color1 = document.getElementById("5_color").value;
    color2 = document.getElementById("15_color").value;
    color3 = document.getElementById("25_color").value;
    // Buttons
    // upKey = document.getElementById("up_button").value;
    // downKey = document.getElementById("down_button").value;
    // leftKey = document.getElementById("left_button").value;
    // rightKey = document.getElementById("right_button").value;
    startGame()
    alternateDivs('Game');
}


function chooseKey(key){
    $(document).keydown(function(event){
        key_pressed = event.keyCode;
        switch (key){
            case "up":
                chosen_key_up=  DisplaychosenKey(key_pressed);
                chosen_key_code_up = key_pressed;
                document.getElementById("buttonUp").value = chosen_key_up;
                upKey = chosen_key_code_up;
                downKey = 40;
                leftKey = 37;
                rightKey = 39;
            }
        });
}

   
// let chosen_key_code_up = 38;
// let downKey = 40;
// let leftKey = 37;
// let rightKey = 39;
let chosen_keys = {}


function DisplaychosenKey(key_pressed)
{
	if(key_pressed == 38) return "⇧";
	else if(key_pressed == 40) return "⇩";
	else if(key_pressed == 39) return "➪";
	else if(key_pressed == 37) return "⇦";
	return String.fromCharCode(event.keyCode);
}
