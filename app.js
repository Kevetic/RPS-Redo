$( document ).ready(function() {
    $('.main-body').hide();
    $('.rock-hero').hide();
    $('.paper-hero').hide();
    $('.sci-hero').hide();
    $('.rock-img').hide();
    $('.paper-img').hide();
    $('.sci-img').hide();
    $('.hero-button').hide()
    $('.choice-transition').hide();
    // $('.hero-transition').hide()

$(document).ready(function() { 
    $('.hero-button').fadeIn(5000)
    $('.rock-hero').fadeIn(5000).removeClass('hidden');
    $('.paper-hero').fadeIn(7000).removeClass('hidden');
    $('.sci-hero').fadeIn(9000).removeClass('hidden');

    $('.rock-img').fadeIn(5000).removeClass('hidden');
    $('.paper-img').fadeIn(8000).removeClass('hidden');
    $('.sci-img').fadeIn(9000).removeClass('hidden');
}) 

    
$('.hero').show();

$('.hero-button').click(function () {
    $('.hero').hide();
    $('.hero').fadeOut(10000);

    rpsShoot()
})

$('.hero-button').click(function () {
    $('.hero-transition').fadeIn(1000)
    // gameStart()
})
function rpsShoot() {
    $(".rock-img-transition").effect( "shake", { direction: "up", times: 3, distance: 50}, 1000 );
    $(".rock-img-transition-two").effect( "shake", { direction: "up", times: 3, distance: 50}, 1000 );
    setTimeout(function(){ gameStart(); }, 1000);
}

function rpsChosen() {
    $("#player-choice").effect( "shake", { direction: "up", times: 3, distance: 50}, 1000 );
    $("#cpu-choice").effect( "shake", { direction: "up", times: 3, distance: 50}, 1000 );
    cpuChange()
}

function cpuChange(){
    const cpuChoice = computerChoice()
    console.log(cpuChoice)
    if (cpuChoice =='P') {
        setTimeout(function(){
            $("#cpu-choice").attr("src", "/assets/Paper.png")
        }, 1000)
    }
    if (cpuChoice =='R') {
        setTimeout(function(){
            $("#cpu-choice").attr("src", "/assets/Rock.png")
        }, 1000)    
    }
    if (cpuChoice =='S') {
        setTimeout(function(){
            $("#cpu-choice").attr("src", "/assets/sci.png")
        }, 1000)    
    }
}

function playerChange(playerChosen){
    if (playerChosen =='P') {
        setTimeout(function(){
            $("#player-choice").attr("src", "/assets/Paper.png")
        }, 1000)
    }
    if (playerChosen =='R') {
        setTimeout(function(){
            $("#player-choice").attr("src", "/assets/Rock.png")
        }, 1000)    
    }
    if (playerChosen =='S') {
        setTimeout(function(){
            $("#player-choice").attr("src", "/assets/sci.png")
        }, 1000)    
    }
}

function gameStart() {
    $('.hero').fadeOut()
    $('.hero-transition').fadeOut();
    $('.main-body').fadeIn(4000)
}

let userScore = 0;
let cpuScore = 0;
let compScore = $('.cpuScore span');
let player = $('.playerScore span');
let context = $('.context');

function computerChoice () {
    const cpuChoice = Math.floor(Math.random(main) * 3);
    const choice = ['R', 'P', 'S']  ;
    return choice[cpuChoice];
}

function win() {
    userScore++;
    player.html(userScore);
    context.html('You won')
}

function lose() {
    cpuScore++;
    compScore.html(cpuScore);
    context.html('You Lost')

}
function draw() {
    context.html('Its a draw')
}

function game(playerChoice) {
    $('.choice-transition').show()
    const cpuChoice = computerChoice();
    switch (playerChoice + cpuChoice) {
      case 'RS':
      case 'SP':
      case 'PR':
        win(playerChoice, cpuChoice);
        break;
      case 'SR':
      case 'PS':
      case 'RP':
        lose(playerChoice, cpuChoice);
        break;
      case 'RR':
      case 'PP':
      case 'SS':
        draw(playerChoice, cpuChoice);
        break;
    }
    console.log(playerChoice + cpuChoice)
}

function main () {
    $('.rock').click(function () {
        game('R');
        playerChange('R')
        rpsChosen();

    });
    $('.paper').click(function () {
        game('P');
        playerChange('P')
        rpsChosen();

    });
    $('.scissor').click(function () {
        game('S');
        playerChange('S')
        rpsChosen();

    });
}
main();
});
