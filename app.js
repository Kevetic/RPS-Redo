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

function rpsChosen(cpuChoice, selectedImage) {
    playerChange(selectedImage)
    $("#player-choice").effect( "shake", { direction: "up", times: 3, distance: 50}, 1000 );
    $("#cpu-choice").effect( "shake", { direction: "up", times: 3, distance: 50}, 1000 );
    cpuChange(cpuChoice)
}

function cpuChange(cpuChoice){
    // console.log(cpuChoice)
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

function playerChange(selectedImage){
    setTimeout(function(){
        $("#player-choice").attr("src", selectedImage)
    }, 1000, selectedImage)
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
    setTimeout(function(){
        userScore++;
        player.html(userScore).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        context.html('YOU WON')
    }, 1500)
    contextReset()
}


function lose() {
    setTimeout(function(){
        cpuScore++;
        compScore.html(cpuScore).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        context.html('YOU LOST')
    }, 1500)
    contextReset()
}
function draw() {
    setTimeout(function(){
        context.html('ITS A DRAW')
    }, 1500)
    contextReset()
}

function contextReset() {
    setTimeout(function(){
        context.html('')
    }, 3000)
}

function game(playerChoice, selectedImage) {
    $('.choice-transition').show()
    const cpuChoice = computerChoice();
    // console.log(playerChoice + cpuChoice) 
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
    rpsChosen(cpuChoice, selectedImage)
    console.log(cpuChoice, playerChoice)
}

function main () {
    $('.RPSbutton').click(function () {
        let selectedChoice = $(this).data('selected')
        let selectedImage = $(this).data('select_img')
        game(selectedChoice, selectedImage)
    });
}
main();
});
