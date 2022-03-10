// player
let player = {
    name: 'Dair',
    chips: 135
}

// variables containing the values of the cards
let firstCard = getRandomCard();
let secondCard = getRandomCard();

// array for cards
let cards = [];

// sum containing the sum of the 2 'card' values
let sum = 0;

// conditionals for the game
let hasBlackjack = false;
let isAlive = false;
let message = "";

// store ALL variables for html/DOM elements in this section
let messageEl = document.getElementById('messageElement');
let sumEl = document.getElementById('sumElement');
let cardsEl = document.getElementById('cardsElement');
let playerEl = document.getElementById('playerElement');

playerEl.textContent = player.name + ': $' + player.chips;

// functions for... the game functions
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: `;

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
    }

    if (sum <= 20) {
        message = 'Do you want to draw another card?';
    } else if (sum === 21) {
        message = 'You got Blackjack!';
        hasBlackjack = true;
    } else {
        message = 'Out of luck, you lost.';
        isAlive = false;
    }
    messageEl.textContent = message;
    console.log(message);
}

function hit() {
    if (isAlive && !hasBlackjack) {
        console.log('drawing a new card from the deck');
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

// stretch goals for blackjack game:
    // create deck array with card values
        // typically, it is 6 52-card decks shuffled together
    // create function to shuffle the deck of cards
    // player cards and hit() card randomly pulled from deck array
    // make the the player name come from an input before the game starts
    // require the name input before the game can be started
    // chips should start at zero and accrue as the game plays out
        // maybe: player starts with minimum bid: 40 chips, and can bet more/less as game goes on
    // create feature for player to double down their bid

// general upkeep:
    // rethink naming conventions
    // change all logical evaluations to shorthand
        // instead of === true/false use if (thisVariable) or if (!thisVariable)