$( document ).ready(function() {
    
$('.main-body').hide();
$('.hero').show();
$('.hero-button').click(function () {
    $('.hero').fadeOut()
    $('.main-body').fadeIn()
    $('rock-hero').fadeIn('slower');
})
let userScore = 0;
let cpuScore = 0;
let compScore = $('.cpuScore');
let player = $('.playerScore');
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
}

function main () {
    $('.rock').click(function () {
        game('R');
    });
    $('.paper').click(function () {
        game('P');
    });
    $('.scissor').click(function () {
        game('S');
    });
}
main();

});
