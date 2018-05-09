$name = $('.name');

let name = prompt("Please enter your name");

if (name) {
  $('.name').html(name);
} else {
  prompt("Please enter your name");
}


let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let suits = ['♠️', '♣️', '♥️', '♦️'];
let deck = [];
let newDeck = [];

function getDeck() {

  for (let cardValue of values) {
  for (let cardSuit of suits) {

      deck.push({
        suit: cardSuit,
        value: cardValue
      });
    }
  }
  return deck;
}

function addRank() {
  for(let i = 0; i< deck.length; i++) {
    if (deck[i].value >=2 && deck[i].value <= 6) {
      deck[i].rank = 1;
    } else if (deck[i].value >= 6 && deck[i].value <= 9) {
      deck[i].rank = 0;

    } else if (deck[i].value === 10 || deck[i].value === 'J' || deck[i].value === 'Q' || deck[i].value === 'K' || deck[i].value === 'A') {
      deck[i].rank = -1;
    }
  }
  return deck;
}



function buildDeck () {
  getDeck();
  addRank();
}

buildDeck();
console.table(deck);



//
// function shuffleDeck() {
//   for (i = deck.length; i > 0; i--) {
//     let getNum = Math.random() * 52;
//     let getRandCard = Math.floor(getNum);
//     newDeck.push(deck[getRandCard]);
//   }
//
//   console.log(newDeck);
// }
