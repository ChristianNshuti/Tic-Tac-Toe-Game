let result;
let compMove;
let userMove;
const score=JSON.parse(localStorage.getItem('gameScore')) || {Wins:0,Losses:0,Tie:0};
 function conditions() {
    randomNum=Math.random();
    if(randomNum >= 0 && randomNum < 1/3) {
        compMove='rock';
    }    
    else if(randomNum >= 1/3 && randomNum < 2/3) {
        compMove='paper';
    }
    else if(randomNum >= 2/3 && randomNum < 1){  
        compMove='scissor';
    }
}
function rock() {
    userMove ='rock';
    if(compMove=='rock') {      
        result = 'Tie';
    }
    else if(compMove=='paper') {      
    result='You lose';
    }
    else if(compMove=='scissor') {
        result='You win';
    }
}
function paper() {
    userMove = 'paper';
    if(compMove=='rock') {
    result='You win';
    }
    else if(compMove=='paper') {
        result='Tie';
    }
    else if(compMove=='scissor') {
    result='You lose';
    }
}
function scissor() {
    userMove='scissor';
    if(compMove=='rock') {
        result='You lose';
    }
    else if(compMove=='paper') {
        result= 'You win';
    }
    else if(compMove=='scissor') { 
        result='Tie';
    }
}
function results() {
    if(result == 'You win') {
        score.Wins+=1;
    }
    else if(result == 'You lose') {
        score.Losses+=1;
    }
    else if(result == 'Tie') {
        score.Tie+=1;
    }
    document.querySelector('.js-results').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `Computer: ${compMove} - You: ${userMove}`;
    document.querySelector('.js-score').innerHTML=` Wins:${score.Wins}  Loses:${score.Losses}  Ties:${score.Tie}`;
    localStorage.setItem('gameScore',JSON.stringify(score)); 
}
function reset() {
    score.Wins = 0;
    score.Losses = 0;
    score.Tie = 0;
    localStorage.setItem('gameScore',JSON.stringify(score));
    document.querySelector('.js-results').innerHTML = "";
    document.querySelector('.js-moves').innerHTML = "";
    document.querySelector('.js-score').innerHTML=`Wins:${score.Wins} , Loses:${score.Losses} , Ties:${score.Tie}`;
}
document.querySelector('.js-results').innerHTML = "";
    document.querySelector('.js-moves').innerHTML = "";
    document.querySelector('.js-score').innerHTML=`Wins:${score.Wins} , Loses:${score.Losses} , Ties:${score.Tie}`;
