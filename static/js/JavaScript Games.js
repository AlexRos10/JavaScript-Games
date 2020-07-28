 var codigo = Math.round(Math.random()*(9999-1000)+parseInt(1000)),
	intentos = 0,
    empate = 0,
    win = 0,
    lose = 0;

var button = document.getElementById("bt"),
    padre = button.parentNode;

var DeadHits = document.getElementById("a2"),
    GamesWons = document.getElementById("a1"),
    LostGames = document.getElementById("a"),
    button2 = document.getElementById("bt2");

console.log("Created By AlexRos");
console.log(codigo);

var startGame = function(){
	var promtp = prompt("Put some number of 4 digits");
   
   	var propuesta = "" + promtp,
        codigo1 = "" + codigo;

   	var aciertos = 0,
    	coincidencias = 0;

    if (propuesta.length < 4 || propuesta.length > 4){
        alert("Put a number of 4 digits");
    }
    
    if (propuesta.length == 4){
        if (propuesta != codigo) {
            intentos = intentos + 1;
            for (var i = 0; i <= 4; i++){
                if (propuesta.charAt(i) == codigo1.charAt(i)){
                    aciertos = aciertos + 1;
                }else if (propuesta.charAt(i) == codigo1.charAt(1) ||
                    propuesta.charAt(i) == codigo1.charAt(2)||
                    propuesta.charAt(i) == codigo1.charAt(3)||
                    propuesta.charAt(i) == codigo1.charAt(4)){
                        coincidencias = coincidencias + 1;
                }
            }
            console.log("You have " + intentos + " Attempts");
            aciertos = aciertos - 1;
            alert("Successes: " + aciertos + " Coincidences: " + coincidencias);
            alert("Propose another number");
            button.innerHTML = "Try Again";
        }
        if (propuesta == codigo) {
            intentos = intentos + 1;
            alert("Congarlutations, you guees the number in " + intentos + " Attempts");
            padre.removeChild(button);
        }
    }

    if (propuesta == "code"){
        alert(codigo1);
        intentos = intentos - 1;
    }

};

var startGame2 = function(){
    var elecccion = prompt("Choose beetween Rock, Paper and Scissors").toLowerCase(),
        opciones = new Array("rock", "paper", "scissors"),
        aleatorio = Math.floor(Math.random()*(opciones.length)),
        maquina = "" + opciones[aleatorio];

    console.log(maquina);

    if (elecccion == "rock") {
        if (maquina == "rock") {
            alert("dead hit");
            empate = empate + 1;
        }else if (maquina == "paper") {
            alert("You lose");
            lose = lose + 1;
        }else if (maquina == "scissors") {
            alert("You win");
            win = win + 1;
        }else{

        }
    }else if (elecccion == "paper") {
        if (maquina == "paper") {
            alert("dead hit");
            empate = empate + 1;
        }else if (maquina == "scissors") {
            alert("You lose");
            lose = lose + 1;
        }else if (maquina == "rock") {
            alert("You win");
            win = win + 1;
        }else{

        }
    }else if (elecccion == "scissors") {
        if (maquina == "scissors") {
            alert("dead hit");
            empate = empate + 1;
        }else if (maquina == "rock") {
            alert("You lose");
            lose = lose + 1;
        }else if (maquina == "paper") {
            alert("You win");
            win = win + 1;
        }else{

        }
    }else if (elecccion.includes(opciones) === false) {
        alert("Choose beetween the options please");
    }else{}

    DeadHits.innerHTML = empate;
    GamesWons.innerHTML = win;
    LostGames.innerHTML = lose;
    button2.innerHTML = "Play Again";
};