'use strict';

var correctCount = 0;
var incorrectCount = 0;

alert( 'Hello!' );
var name = prompt( 'What is your name?' );
console.log( name );

alert( 'Hi ' + name + ', I would like to see how well you know me.' );

var state = prompt( 'What state am I from?' ).toLowerCase();
console.log( state);

if (state === 'california'){
  alert( 'Yes! I was bred and born in the Golden State!' );
  correctCount++;
} 
else{
  alert( 'Not even close. I\'m from sunny California.' );
  incorrectCount++;
}

var sports = prompt( 'Do I like sports?' ).toLowerCase();
console.log( sports );

if (sports === 'yes'){
  alert( 'Of course! I love sports!' );
  correctCount++;
} 
else {
  alert( 'Of course! I love sports!' );
  incorrectCount++;
}

var sportsII = prompt( 'Can you guess my favorite sport?' ).toLowerCase();
console.log( sportsII );

if (sportsII == 'football'){
  alert( 'Right on! Let\'s go Raiders!'  );
  correctCount++;
} 
else {
  alert( 'Nope. Die hard for Raiders football.' );
  incorrectCount++;
}


var food = prompt( 'If I had to choose between burgers or tacos, what would I choose?' ).toLowerCase();
console.log( food );

if (food == 'tacos'){
  alert( 'Yes! I love me some tacos.' );
  correctCount++;
} 
else {
  alert( 'Taco Guy. Tortillas are agruably the greatest culinary creation of all time!' );
  incorrectCount++;
}

do {
  var guess = parseInt( prompt( 'How many years have I lived in Oregon?' ) );
  if(guess < 2){ 
    alert( 'Too low. Try again.');
    incorrectCount++;
  }
  else if(guess > 2){
    alert( 'Too high. Try again.');
    incorrectCount++;
  }
  else if (guess === 2){
    alert( 'Correctomundo!!' );
    correctCount++;
  }
  else {
    alert( 'Please enter integer.');
  }
  console.log( guess );
} while (guess !== 2 );

for ( var i = 0; i < 6; i ++ ){
  var states = ['texas', 'hawaii','mississippi'];
  var guess = prompt( 'Can you guess another state that I\'ve lived besides California and Oregon?' ).toLowerCase();
  if ( guess === 'texas' || guess === 'hawaii' || guess === 'mississippi'){
    alert( 'That\'s correct. I have lived in ' + guess);
    correctCount ++;
    break;
  }
  else if ( guess === 'california' || guess === 'oregon'){
    alert( 'Yes, I have lived in ' + guess + ' but can you guess another state? You have ' + (6-i) + ' guesses remaining.');
    incorrectCount++;
  }
  else {
    alert ('No, I have never lived in ' + guess + '.' + ' You have ' + (6-i) + ' guesses remaining.');
    incorrectCount++;
}  
}

alert( name + ' You had ' + correctCount + ' correct answers out of ' + (correctCount + incorrectCount) + ' attempts!');




// var states = ['texas', 'hawaii','mississippi'];
// do {
//   var guess = prompt( 'Can you guess another state that I\'ve lived besides California and Oregon?' ).toLowerCase();
//   if ( guess === 'texas' || guess === 'hawaii' || guess === 'mississippi'){
//     alert( 'That\'s correct. I have lived in ' + guess);
//   }
//   else if ( guess === 'california' || guess === 'oregon'){
//     alert( 'Yes, I have lived in ' + guess + ' but can you guess another state?');
//   }
//   else {
//     alert ('No, I have never lived in ' + guess);
//   }  
//   console.log( guess, states );
// } while ( states.indexOf( guess ) === -1 );

