var random = 0;
var plays = 1;
var number = 0;
generateRandom();

function play(){
    number = prompt(plays + "º Tentativa Adivinhe o Numero");
    checkResult();
}

function checkResult(){
    if(number == random){
        alert('Acertou');
        resetGame();
    }else if(plays >= 3){
        alert('Game Over');
        resetGame();
    }else{
        plays++;
        play();
    }
}

function generateRandom(){
    random = Math.floor(Math.random() * 10);
}

function resetGame(){
    plays = 1;
    generateRandom();
}