var context;
var pacman = new Object();
var board;
var score;
var pac_color = "yellow";
var start_time;
var time_elapsed;
var interval;
var upKey = 38
var downKey = 40
var leftKey = 37
var rightKey = 39
var color5;
var color15;
var color25;
var packmanLives;
let food_remain = 50;
let clock_remain = 5;
let medicine_remain = 5;
var gameLength = 60;
let board_wo_ghost;
var username;	
let key_pressed; 
var audio = new Audio('src/backgroundMusic.mp3');

function playSound(){
    audio.play();
}

document.body.style.zoom="80%"

let ghost1 = document.createElement('img');
ghost1.src = 'src/images/ghost1.png';

let ghost2 = document.createElement('img');
ghost2.src = 'src/images/ghost2.png';

let ghost3 = document.createElement('img');
ghost3.src = 'src/images/ghost3.png';

let ghost4 = document.createElement('img');
ghost4.src = 'src/images/ghost4.png';

let clock = document.createElement('img');
clock.src = 'src/images/clock.png';

let medicine = document.createElement('img');
medicine.src = 'src/images/medicine.png';


let ghostList = [ghost1, ghost2,ghost3,ghost4]
let corners = [[0,0],[0,14],[14,0],[14,14]]
let ghostNumFromUser;
let countGhost = 0;
let ghostPosition;
let ghostInterval;

// $(document).ready(function() {
// 	context = canvas.getContext("2d");
// 	Start();
// });

function startGame(){
	context = canvas.getContext("2d");
	Start();
}

function Start() {

	audio.play();
	food_5 = food_remain*0.6
	food_15 = food_remain*0.3
	food_25 = food_remain*0.1
	window.clearInterval(ghostInterval);
	packmanLives = 5;
	ghostInterval = 350;
	let ghost_remain = ghostNumFromUser;
	
	clockPosition = [];
	medicinePosition = [];
	
	countGhost = 0;
	ghostPosition = [];
	change_pacman_lives_img();
  
	board = new Array();
	board_wo_ghost = new Array();
	score = 0;
	var cnt = 400;
	var pacman_remain = 1;
	key_pressed = 0;
  
	start_time = new Date();
	for (var i = 0; i < 15; i++) {
	  board[i] = new Array();
	  board_wo_ghost[i] = new Array();
	  //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
	  for (var j = 0; j < 15; j++) {
  
		if (
		  (i == 2 && j == 2) || (i == 3 && j == 2) || (i == 4 && j == 2) || (i == 2 && j == 3) || (i == 3 && j == 3) || (i == 4 && j == 3) ||
		  (i == 2 && j == 5) || (i == 2 && j == 7) || (i == 3 && j == 5) || (i == 3 && j == 7) || (i == 4 && j == 5) || (i == 4 && j == 7) ||
		  (i == 6 && j == 2) || (i == 7 && j == 2) || (i == 8 && j == 2) || (i == 6 && j == 3) || (i == 7 && j == 3) || (i == 8 && j == 3) ||
		  (i == 2 && j == 12) || (i == 3 && j == 12) || (i == 2 && j == 14) || (i == 3 && j == 14) || (i == 4 && j == 12) || (i == 4 && j == 14) ||
		  (i == 12 && j == 2) || (i == 13 && j == 2) || (i == 14 && j == 2) || (i == 12 && j == 3) || (i == 13 && j == 3) || (i == 14 && j == 3) ||
		  (i == 1 && j == 9) || (i == 1 && j == 10) || (i == 2 && j == 9) || (i == 2 && j == 10) || (i == 3 && j == 9) || (i == 3 && j == 10) || (i == 4 && j == 9) || (i == 4 && j == 10) || (i == 5 && j == 9) || (i == 5 && j == 10) ||
		  (i == 14 && j == 9) || (i == 14 && j == 10) || (i == 15 && j == 9) || (i == 15 && j == 10) ||
		  (i == 10 && j == 2) || (i == 10 && j == 3) ||
		  (i == 6 && j == 5) || (i == 6 && j == 6) || (i == 6 && j == 7) || (i == 6 && j == 12) || (i == 6 && j == 13) || (i == 6 && j == 14) ||
		  (i == 14 && j == 5) || (i == 14 && j == 6) || (i == 14 && j == 7) || (i == 14 && j == 12) || (i == 14 && j == 13) || (i == 14 && j == 14) ||
		  (i == 8 && j == 5) || (i == 9 && j == 5) || (i == 10 && j == 5) || (i == 11 && j == 5) || (i == 12 && j == 5) ||
		  (i == 8 && j == 10) || (i == 9 && j == 10) || (i == 10 && j == 10) || (i == 11 && j == 10) || (i == 12 && j == 10) ||
		  (i == 8 && j == 14) || (i == 9 && j == 14) || (i == 10 && j == 14) || (i == 11 && j == 14) || (i == 12 && j == 14) ||
		  (i == 10 && j == 6) || (i == 10 && j == 7) || (i == 10 && j == 12) || (i == 10 && j == 13) ||
		  (i == 8 && j == 9) || (i == 12 && j == 9) || (i == 8 && j == 11) || (i == 12 && j == 11) 
		 
		) {
		  board[i][j] = 4;
		} else {
		  var randomNum = getRandomInt(3)
		
		   if (getRandomInt(2) == 1 & board[i][j] != 4 & randomNum == 2 & food_25 > 0 ){
			food_25--;
			
			board[i][j] = 25;
		  }
  
		  else if (getRandomInt(2) == 1 & board[i][j] != 4 & randomNum == 0 & food_5 > 0 ){
			food_5--;
			
			board[i][j] = 5;
		  }
	  
		  else if (getRandomInt(2) == 1 & board[i][j] != 4 & randomNum == 1 & food_15 > 0 ){
			food_15--;
			
			board[i][j] = 15;
		  }
  
		  else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt & pacman_remain == 1) {
			pacman.i = i;
			pacman.j = j;
			pacman_remain--;
			board[i][j] = 2;
		  }
		  else if (board[i][j] != 4 & board[i][j] != 5 & board[i][j] != 15 & board[i][j] != 25){
			board[i][j] = 0;
		  }
		  cnt--;
		}
		board_wo_ghost[i][j] = board[i][j]
	  }
	}

	// while (food_remain > 0) {
	// 	var emptyCell = findRandomEmptyCell(board);
	// 	board[emptyCell[0]][emptyCell[1]] = 1;
	// 	food_remain--;
	// }
	//board_wo_ghost = board;

	while (food_5 > 0){
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 5;
		board_wo_ghost[emptyCell[0]][emptyCell[1]] = 5 ;
		food_5--;
	  }
	
	  while (food_25 > 0){
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 25;
		board_wo_ghost[emptyCell[0]][emptyCell[1]] = 25 ;
		food_25--;
	  }
	
	  while (food_15 > 0){
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 15;
		board_wo_ghost[emptyCell[0]][emptyCell[1]] = 15 ;
		food_15--;
	  }

	while (ghost_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 7 ;
		ghostPosition.push(emptyCell)
		ghost_remain--;
	}
	ghost_interval = setInterval(UpdateGhost,350);
	repositionGhost();

	while (clock_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 8 ;
		board_wo_ghost[emptyCell[0]][emptyCell[1]] = 8 ;
		clockPosition.push(emptyCell)
		clock_remain--;
	}

	while (medicine_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 10 ;
		board_wo_ghost[emptyCell[0]][emptyCell[1]] = 10 ;
		medicinePosition.push(emptyCell)
		medicine_remain--;
	}
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 300);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 9 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	// while (board[i][j] != 4) {
	// 	i = Math.floor(Math.random() * 9 + 1);
	// 	j = Math.floor(Math.random() * 9 + 1);
	// }
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[upKey]) {
		return 1;
	}
	if (keysDown[downKey]) {
		return 2;
	}
	if (keysDown[leftKey]) {
		return 3;
	}
	if (keysDown[rightKey]) {
		return 4;
	}
	else{
		return key_pressed;
	}
}

function Draw() {
	/*
	1 - FOOD
	2 - PACMAN
	3 - 
	4 - WALL
	5 -
	6 -  
	7 - GHOST
	*/
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	
	lblTime.value = time_elapsed;
	for (var i = 0; i < 15; i++) {
		for (var j = 0; j < 15; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) {
				draw_packman(center)
			} else if (board[i][j] == 5) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = color5; //color
				context.fill();
			}
			else if (board[i][j] == 15) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = color15; //color
				context.fill();
			}
			else if (board[i][j] == 25) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = color25; //color
				context.fill();
			}
			else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
			else if (board[i][j] == 7) {
				draw_ghost(center)
			}

			else if (board[i][j] == 8){	
				let rand_int = Math.random();
				if (rand_int > 0.99 && time_elapsed > parseInt(gameLength)*0.2){
					board[i][j] = 9
				}
				else if (rand_int > 0.999 && time_elapsed > parseInt(gameLength)*0.5){
					board[i][j] = 9
				}
				else if (rand_int > 0.9 && time_elapsed > parseInt(gameLength)*0.8){
					board[i][j] = 9
				}
				board_wo_ghost[i][j] = board[i][j]
			}
			else if (board[i][j] == 9){
				draw_clock(center)
			}
			else if (board[i][j] == 10 && packmanLives < 5){	
				let rand_int = Math.random();
				if (rand_int > 0.99 && time_elapsed > parseInt(gameLength)*0.2){
					board[i][j] = 11
				}
				else if (rand_int > 0.999 && time_elapsed > parseInt(gameLength)*0.5){
					board[i][j] = 11
				}
				else if (rand_int > 0.9 && time_elapsed > parseInt(gameLength)*0.8){
					board[i][j] = 11
				}
				board_wo_ghost[i][j] = board[i][j]
			}
			else if (board[i][j] == 11){
				draw_medicine(center)
			}
		}
	}
}

function draw_packman(center)  {
	context.beginPath();
	if (key_pressed == 1){ // UP
		context.arc(center.x, center.y, 30, 1.65 * Math.PI, 1.35 * Math.PI);
	}
	else if (key_pressed == 2){ // DOWN
		context.arc(center.x, center.y, 30, 0.65 * Math.PI, 0.35 * Math.PI);
	}
	else if (key_pressed == 3){ // LEFT
		context.arc(center.x, center.y, 30, 1.15 * Math.PI,  0.85 * Math.PI);
	}
	else if (key_pressed == 4 || key_pressed == 0){ // RIGHT
		context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI);
	}
	context.lineTo(center.x, center.y);
	context.fillStyle = pac_color; //color
	context.fill();
	context.beginPath();
	if (key_pressed == 1){ // UP
		context.arc(center.x + 15, center.y + 2, 5, 0, 2 * Math.PI);
	}
	else if (key_pressed == 2){ // DOWN
		context.arc(center.x - 15, center.y + 2, 5, 0, 2 * Math.PI);
	}
	else if (key_pressed == 3){ // LEFT
		context.arc(center.x - 5, center.y - 15, 5, 0, 2 * Math.PI);
	}
	else if (key_pressed == 4 || key_pressed == 0){ // RIGHT
		context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI);
	}
	context.fillStyle = "black"; //color
	context.fill();

}

function draw_ghost(center) {
	context.beginPath();
	context.drawImage(ghost2, center.x-20 , center.y-20 , 50, 50);
	context.fill();

	// TODO: WTF
	if (countGhost == ghostNumFromUser-1){
		countGhost = 0
	}
	else {
		countGhost++
	}
}

function draw_clock(center) {
	context.beginPath();
	context.drawImage(clock, center.x-20 , center.y-20 , 50, 50);
	context.fill();
}

function draw_medicine(center) {
	context.beginPath();
	context.drawImage(medicine, center.x-20 , center.y-20 , 50, 50);
	context.fill();
}



function UpdatePosition() {

	board[pacman.i][pacman.j] = 0;
	board_wo_ghost[pacman.i][pacman.j] = 0;
	key_pressed = GetKeyPressed();
	if (key_pressed == 1) {
		if (pacman.j > 0 && board[pacman.i][pacman.j - 1] != 4) {
			pacman.j--;
		}
	}
	if (key_pressed == 2) {
		if (pacman.j < 14 && board[pacman.i][pacman.j + 1] != 4) {
			pacman.j++;
		}
	}
	if (key_pressed == 3) {
		if (pacman.i > 0 && board[pacman.i - 1][pacman.j] != 4) {
			pacman.i--;
		}
	}
	if (key_pressed == 4) {
		if (pacman.i < 14 && board[pacman.i + 1][pacman.j] != 4) {
			pacman.i++;
		}
	}
	if (board[pacman.i][pacman.j] == 5) {
		score+= 5;
	}
	else if (board[pacman.i][pacman.j] == 15) {
		score+=15;
	}
	else if (board[pacman.i][pacman.j] == 25) {
		score+=25;
	}
	else if (board[pacman.i][pacman.j] == 9) {
		start_time.setSeconds(start_time.getSeconds() + 10)
	}
	else if (board[pacman.i][pacman.j] == 11) {
		packmanLives = packmanLives + 1
		change_pacman_lives_img();
	}
	var cell_value = board[pacman.i][pacman.j];

	board[pacman.i][pacman.j] = 2;
	board_wo_ghost[pacman.i][pacman.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;

	// if (score >= 20 && time_elapsed <= 10) {
	// 	pac_color = "green";
	// }
	if (cell_value == 7) {
		GhostEatPacman();
	}
	// TODO: draw happens twice if cell value == 7?
	Draw();
	if (time_elapsed >= gameLength || packmanLives == 0) {
		window.clearInterval(interval);
		// window.clearInterval(ghostInterval);
		if (score >= 100){
			window.alert("Winner!!!");
			alternateConfetti()
			startConfetti()
		}
		else{
			window.alert("You are better than " + score + " points!");
			alternateConfetti()
			startConfetti()
		}
		// stopConfetti()
		alternateDivs('Restart')
		audio.pause();
	}
}


function repositionGhost(){
	let i = 0
	for (i = 0; i < ghostNumFromUser; i++){
		board[ghostPosition[i][0]][ghostPosition[i][1]] = 0
		ghostPosition[i][0] = corners[i][0]
		ghostPosition[i][1] = corners[i][1]

		board[corners[i][0]][corners[i][1]] = 7
	}
	var emptyCell = findRandomEmptyCell(board);
	board[pacman.i][pacman.j] = 0
	board_wo_ghost[pacman.i][pacman.j] = 0
	pacman.i = emptyCell[0]
	pacman.j = emptyCell[1]
	board[pacman.i][pacman.j] = 2
	board_wo_ghost[pacman.i][pacman.j] = 2
	Draw();
}



function UpdateGhost() {

	var i;
	for (i = 0; i < ghostNumFromUser; i++){
		if (board[ghostPosition[i][0]][ghostPosition[i][1]] == 2 ) {
			GhostEatPacman();
			break;
		}
		let GhostX = ghostPosition[i][0];
		let GhostY = ghostPosition[i][1];
		
		let direction = chooseDirection(GhostX , GhostY);

		// TODO: not sure what this is
		if (board_wo_ghost[ghostPosition[i][0]][ghostPosition[i][1]] != 7){
			board[ghostPosition[i][0]][ghostPosition[i][1]] = board_wo_ghost[ghostPosition[i][0]][ghostPosition[i][1]];
		}
		else{
			board[ghostPosition[i][0]][ghostPosition[i][1]] = 0;
		}

		if (direction == "up") {
			ghostPosition[i][1] = ghostPosition[i][1] - 1;
		}
		if (direction == "down") {
			ghostPosition[i][1] = ghostPosition[i][1] + 1;
		}
		if (direction == "left") {
			ghostPosition[i][0] = ghostPosition[i][0] - 1;
		}
		if (direction == "right") {
			ghostPosition[i][0] = ghostPosition[i][0] + 1;
		}

		board[ghostPosition[i][0]][ghostPosition[i][1]] = 7;
	}

	Draw();
	
}


function isPossibleStep(ghostX, ghostY){
	if (ghostX < 0 || ghostX > 14 || ghostY < 0  || ghostY > 14){
		return false;
	}

	board_value = board[ghostX][ghostY]

	if (board_value == 4 || board_value == 7){
		return false
	}

	return true
}


function calcDistance(ghostX, ghostY){
	return Math.abs(pacman.i - ghostX) + Math.abs(pacman.j - ghostY)
}


function chooseDirection(ghostX, ghostY){
		let distance;
		let minimalDistance = 100;
		let direction;
		let randPos = Math.random();
		let validSteps = []

		// up
		if (isPossibleStep(ghostX, ghostY-1)){
			validSteps.push("up");
			distance = calcDistance(ghostX, ghostY-1);

			if (distance < minimalDistance){
				minimalDistance = distance;
				direction = "up"
			}
		}
		// down
		if (isPossibleStep(ghostX, ghostY+1)){
			validSteps.push("down");
			distance = calcDistance(ghostX, ghostY+1);

			if (distance < minimalDistance){
				minimalDistance = distance;
				direction = "down"
			}
		}
		// left
		if (isPossibleStep(ghostX-1, ghostY)){
			validSteps.push("left");
			distance = calcDistance(ghostX-1, ghostY);

			if (distance < minimalDistance){
				minimalDistance = distance;
				direction = "left"
			}
		}
		// right
		if (isPossibleStep(ghostX+1, ghostY)){
			validSteps.push("right");
			distance = calcDistance(ghostX+1, ghostY);

			if (distance < minimalDistance){
				minimalDistance = distance;
				direction = "right"
			}
		}

		if (randPos > 0.75){
			direction = validSteps[Math.floor(Math.random() * validSteps.length)]
		}

		return direction
}

function change_pacman_lives_img(){
	let lives_img = document.getElementById("pac_lives_img");

	if (packmanLives == 5) {
		lives_img.src="src/images/5lives.png";
	}
	else if (packmanLives == 4) {
		lives_img.src="src/images/4lives.png";
	}
	else if (packmanLives == 3) {
		lives_img.src="src/images/3lives.png";
	}
	else if (packmanLives == 2) {
		lives_img.src="src/images/2lives.png";
	}
	else {
		lives_img.src="src/images/1lives.png";
	}

}

function GhostEatPacman(){
	score = score -10
	packmanLives = packmanLives - 1
	change_pacman_lives_img();
	repositionGhost();
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
	}