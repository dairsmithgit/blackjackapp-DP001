// player
let player = {
    name: 'dair',
    chips: 135
}

// array of card objects used in the game
let deck = [
    { Value: 'A', Suit: 'spades', Num: 1 },
    { Value: '2', Suit: 'spades', Num: 2 },
    { Value: '3', Suit: 'spades', Num: 3 },
    { Value: '4', Suit: 'spades', Num: 4 },
    { Value: '5', Suit: 'spades', Num: 5 },
    { Value: '6', Suit: 'spades', Num: 6 },
    { Value: '7', Suit: 'spades', Num: 7 },
    { Value: '8', Suit: 'spades', Num: 8 },
    { Value: '9', Suit: 'spades', Num: 9 },
    { Value: '10', Suit: 'spades', Num: 10 },
    { Value: 'J', Suit: 'spades', Num: 10 },
    { Value: 'Q', Suit: 'spades', Num: 10 },
    { Value: 'K', Suit: 'spades', Num: 10 },
    { Value: 'A', Suit: 'diamonds', Num: 1 },
    { Value: '2', Suit: 'diamonds', Num: 2 },
    { Value: '3', Suit: 'diamonds', Num: 3 },
    { Value: '4', Suit: 'diamonds', Num: 4 },
    { Value: '5', Suit: 'diamonds', Num: 5 },
    { Value: '6', Suit: 'diamonds', Num: 6 },
    { Value: '7', Suit: 'diamonds', Num: 7 },
    { Value: '8', Suit: 'diamonds', Num: 8 },
    { Value: '9', Suit: 'diamonds', Num: 9 },
    { Value: '10', Suit: 'diamonds', Num: 10 },
    { Value: 'J', Suit: 'diamonds', Num: 10 },
    { Value: 'Q', Suit: 'diamonds', Num: 10 },
    { Value: 'K', Suit: 'diamonds', Num: 10 },
    { Value: 'A', Suit: 'clubs', Num: 1 },
    { Value: '2', Suit: 'clubs', Num: 2 },
    { Value: '3', Suit: 'clubs', Num: 3 },
    { Value: '4', Suit: 'clubs', Num: 4 },
    { Value: '5', Suit: 'clubs', Num: 5 },
    { Value: '6', Suit: 'clubs', Num: 6 },
    { Value: '7', Suit: 'clubs', Num: 7 },
    { Value: '8', Suit: 'clubs', Num: 8 },
    { Value: '9', Suit: 'clubs', Num: 9 },
    { Value: '10', Suit: 'clubs', Num: 10 },
    { Value: 'J', Suit: 'clubs', Num: 10 },
    { Value: 'Q', Suit: 'clubs', Num: 10 },
    { Value: 'K', Suit: 'clubs', Num: 10 },
    { Value: 'A', Suit: 'hearts', Num: 1 },
    { Value: '2', Suit: 'hearts', Num: 2 },
    { Value: '3', Suit: 'hearts', Num: 3 },
    { Value: '4', Suit: 'hearts', Num: 4 },
    { Value: '5', Suit: 'hearts', Num: 5 },
    { Value: '6', Suit: 'hearts', Num: 6 },
    { Value: '7', Suit: 'hearts', Num: 7 },
    { Value: '8', Suit: 'hearts', Num: 8 },
    { Value: '9', Suit: 'hearts', Num: 9 },
    { Value: '10', Suit: 'hearts', Num: 10 },
    { Value: 'J', Suit: 'hearts', Num: 10 },
    { Value: 'Q', Suit: 'hearts', Num: 10 },
    { Value: 'K', Suit: 'hearts', Num: 10 }
];

// variables containing the values of the cards
let firstCard = getRandomCard();
let secondCard = getRandomCard();

let dealerFirst = getRandomCard();
let dealerSecond = getRandomCard();

// array for cards
let cards = [];
// dealer
let dealer = [];

// sum containing the sum of the 2 'card' values
let sum = 0;
let dealerSum = 0;

// conditionals for the game
let hasBlackjack = false;
let dealerBlackJack = false;
let isAlive = false;
let message = "";

// store ALL variables for html/DOM elements in this section
let messageEl = document.getElementById('message');
let sumEl = document.getElementById('sum');
let cardsEl = document.getElementById('cards');
let playerEl = document.getElementById('player');
let inputEl = document.getElementById('formInput');

// functions for... the game functions
function setName() {
    player.name = inputEl.value;
    console.log(player.name);
    inputEl.value = '';
}

function startGame() {
    playerEl.innerText = player.name + ': $' + player.chips;
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

function stay() {
    console.log("stay");
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


// FUNCTION TO CREATE DECK OF CARDS:
// *********************************

// var suits = ["spades", "diamonds", "clubs", "hearts"];
// var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// function getDeck() {
//     let deck = new Array();

//     for (let i = 0; i < suits.length; i++) {
//         for (let x = 0; x < values.length; x++) {
//             let card = { Value: values[x], Suit: suits[i], Num: nums[x] };
//             deck.push(card);
//         }
//     }

//     return deck;
// }

// console.log(getDeck());