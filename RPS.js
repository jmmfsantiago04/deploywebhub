const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultElement = document.getElementById('result');

    let result = '';

    if (playerChoice === computerChoice) {
        result = 'Draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        result = 'You Win!';
    } else {
        result = 'You Lose!';
    }

    resultElement.innerText = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
}