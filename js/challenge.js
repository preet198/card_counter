let timer = $('.timer');
let showCard = $('.show-card');
let card = $('.card');
let cardValue = $('.show-value');
let cardSuit = $('.show-suit');
let countTracker = $('.count-tracker');
let count;
let start = 0;
let playHiLo = $('#hi-lo');
let hiOpt1 = $('#hi-opt-1');

function getTime() {
  count = prompt('Please enter a number from 0 to 60');
  while ((count > 60) || (count < 0)) {
    count = prompt('Please enter a number from 0 to 60');
  }
}


//var for building deck
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let suits = ['♠️', '♣️', '♥️', '♦️'];
let deck = [];
let hiLoDeck = [];
let deck2 = [];
let playArray = [];
let hiOptDeck = [];

//build deck for hilo
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


//adding rank for Hi-lo
function addRankHiLo() {
  for (let i = 0; i < deck.length; i++) {
    if (deck[i].value >= 2 && deck[i].value <= 6) {
      deck[i].rank = 1;
    } else if (deck[i].value >= 6 && deck[i].value <= 9) {
      deck[i].rank = 0;

    } else if (deck[i].value === 10 || deck[i].value === 'J' || deck[i].value === 'Q' || deck[i].value === 'K' || deck[i].value === 'A') {
      deck[i].rank = -1;
    }
  }
  return hiLoDeck;
}


// build deck for hiopt 1
function getDeck2() {

  for (let cardValue of values) {
    for (let cardSuit of suits) {

      deck2.push({
        suit: cardSuit,
        value: cardValue
      });
    }
  }
  return deck2;
}

//add rank to hioppt 1
function addRankHiOpt1() {
  for (let i = 0; i < deck2.length; i++) {
    if (deck2[i].value === 2) {
      deck2[i].rank = 0;
    } else if (deck2[i].value <= 6) {
      deck2[i].rank = 1;
    } else if (deck2[i].value <= 9) {
      deck2[i].rank = 0;
    } else if (deck2[i].value === 10 || deck2[i].value === 'J' || deck2[i].value === 'Q' || deck2[i].value === 'K') {
      deck2[i].rank = -1;
    } else if (deck2[i].value === 'A') {
      deck2[i].rank = 0;
    }
  }
  return hiOptDeck;
}

//running buid deck
function buildDeck() {
  getDeck();
  getDeck2();
  addRankHiLo();
  addRankHiOpt1();
}


//shuffle deck
// function shuffleDeck() {
//   for (i = deck.length; i > 0; i--) {
//     let getRandCard = Math.floor(Math.random() * 52);
//     // let getRandCard = Math.floor(getNum);
//     hiLoDeck.push(deck[getRandCard]);
//   }
// }

//shuffledeck for hiopt 1
// function shuffleDeck2() {
//   for (i = deck2.length; i > 0; i--) {
//     let getRandCard = Math.floor(Math.random() * 52);
//     // let getRandCard = Math.floor(getNum);
//     hiOptDeck.push(deck2[getRandCard]);
//   }
// }

//build deck with value and rank
buildDeck();
//shuffle deck
// shuffleDeck();
// shuffleDeck2();







// set timer for player.
let oneSec;

function time() {
  timer.html(count);
  count--;
  if (count === -1) {
    alert("Time is up!!");

    clearInterval(oneSec);
    count = 30;
    card.off("click");
  }
}

playHiLo.click(function () {
  playArray = deck.slice();
});

hiOpt1.click(() => {
  playArray = deck2.slice();
});


$('#start').click(function() {
  getTime();
  $(this).off('click');
  oneSec = setInterval(time, 1000);
  // show card on page
  card.on("click", function(e) {
    let getRandCard = Math.floor(Math.random() * 52);
    let x = playArray[getRandCard];
    cardValue.html(x.value);
    cardSuit.html(x.suit);
    start += x.rank;
    countTracker.html(start);
    console.log(x.rank);
  });
});



$('#button').click(function() {
  location.reload();
});

console.table(deck);
