$name = $('.name');

let name = prompt("Please enter your name");
let timer = $('.timer');
let showCard = $('.show-card');
let card = $('.card');
let count = 5;



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
  for (let i = 0; i < deck.length; i++) {
    if (deck[i].value >= 2 && deck[i].value <= 6) {
      deck[i].rank = 1;
    } else if (deck[i].value >= 6 && deck[i].value <= 9) {
      deck[i].rank = 0;

    } else if (deck[i].value === 10 || deck[i].value === 'J' || deck[i].value === 'Q' || deck[i].value === 'K' || deck[i].value === 'A') {
      deck[i].rank = -1;
    }
  }
  return deck;
}



function buildDeck() {
  getDeck();
  addRank();
}
//build deck with value and rank
buildDeck();




//shuffle deck
function shuffleDeck() {
  for (i = deck.length; i > 0; i--) {
    let getRandCard = Math.floor(Math.random() * 52);
    // let getRandCard = Math.floor(getNum);
    newDeck.push(deck[getRandCard]);
  }
}
shuffleDeck();
// console.table(newDeck)
// console.table(newDeck).pop;

// show card on page
card.on("click", function(e){
  let x = newDeck.pop();
  card.append(x.value, x.suit);
});




//set timer for player.
// let oneSec = setInterval(time, 1000);
//
// function time() {
//   timer.html(count);
//   count--;
//   if (count === -1){
//     alert("Time is up!!");
//     clearInterval(oneSec);
//   }
// }


// time();
