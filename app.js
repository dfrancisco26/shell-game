// import functions and grab DOM elements
const butt1 = document.getElementById('bOne');
const butt2 = document.getElementById('bTwo');
const butt3 = document.getElementById('bThree');

const ball1 = document.getElementById('ballOne');
const ball2 = document.getElementById('ballTwo');
const ball3 = document.getElementById('ballThree');

const winSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

let wins = 0;
let total = 0;

function resetBalls() {
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
}

function displayResults() {
    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossesSpan.textContent = total - wins;
}

butt1.addEventListener('click', () => {
    total++;
    resetBalls();
    const ballLocation = Math.ceil(Math.random() * 3);
    if (ballLocation === 1) {
        ball1.classList.add('reveal');
        wins++;
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
    }
    displayResults();
});

butt2.addEventListener('click', () => {
    total++;
    resetBalls();
    const ballLocation = Math.ceil(Math.random() * 3);
    if (ballLocation === 1) {
        ball1.classList.add('reveal');
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
        wins++;
    } else {
        ball3.classList.add('reveal');
    }
    displayResults();
});

butt3.addEventListener('click', () => {
    total++;
    resetBalls();
    const ballLocation = Math.ceil(Math.random() * 3);
    if (ballLocation === 1) {
        ball1.classList.add('reveal');
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
        wins++;
    }
    displayResults();    
});


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
