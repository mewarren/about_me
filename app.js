'use strict';

var correctCount = 0;
var incorrectCount = 0;


// alert( 'Hello!' );

// var name = prompt( 'What is your name?' );
// console.log( name );

// alert( 'Hi ' + name + ', I would like to see how well you know me.' );

// geography(); // prompts q n' a

function geography() {
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
}

// var sports = prompt( 'Do I like sports?' ).toLowerCase();
// console.log( sports );

// if (sports === 'yes'){
//   alert( 'Of course! I love sports!' );
//   correctCount++;
// } 
// else {
//   alert( 'Of course! I love sports!' );
//   incorrectCount++;
// }



// var sportsII = prompt( 'Can you guess my favorite sport?' ).toLowerCase();
// console.log( sportsII );

// if (sportsII == 'football'){
//   alert( 'Right on! Let\'s go Raiders!'  );
//   correctCount++;
// } 
// else {
//   alert( 'Nope. Die hard for Raiders football.' );
//   incorrectCount++;
// }



// var food = prompt( 'If I had to choose between burgers or tacos, what would I choose?' ).toLowerCase();
// console.log( food );

// if (food == 'tacos'){
//   alert( 'Yes! I love me some tacos.' );
//   correctCount++;
// } 
// else {
//   alert( 'Taco Guy. Tortillas are agruably the greatest culinary creation of all time!' );
//   incorrectCount++;
// }


var questions = [ 'What state am I from?',
                  'Do I like sports?', 
                  'Can you guess my favorite sport?',
                  'If I had to choose between burgers or tacos, what would I choose?' ];
var correctResponses = [ 'california',
                         'yes',
                         'football',
                         'tacos',
                         '2' ];
var ifGoodAnswers = [ 'Yes! I was bred and born in                       the Golden State!',
                      'Of course! I love sports!',
                      'Right on! Let\'s go Raiders!',
                      'Yes! I love me some tacos.',
                       ];
var ifBadAnswers = [ 'Not even close. I\'m from                         sunny California.',
                     'Of course! I love sports!',
                     'Nope. Die hard for Raiders football.',
                     'Taco Guy. Tortillas are agruably the greatest culinary creation of all time!'];

//singleAnswer("fave color", "blue", "sweet", "not sweet"); //test
firstQuestion(questions, correctResponses, ifGoodAnswers, ifBadAnswers);


function firstQuestion(questionsF, correctResponsesF, ifGoodAnswersF, ifBadAnswersF) {  // all parameters arrays
  for(var i = 0; i < questionsF.length; i++) {
    singleAnswer(questionsF[i], correctResponsesF[i], ifGoodAnswersF[i], ifBadAnswersF[i]);
  }
}

function singleAnswer(question, correctResponse, ifGoodAnswer, ifBadAnswer) { // all parameters strings
  var answer = prompt(question).toLocaleLowerCase();
  console.log(answer);

  if (answer === correctResponse) {
    alert(ifGoodAnswer);
    correctCount++;
  }
  else {
    alert(ifBadAnswer);
    incorrectCount++;
  }
}

// var singleAnswer = function(parameters:optional) {
//   what's happening
//   CODE BLOCK

// };


function oregon() {
  var correctGuess = 2;
  do {
    var guess = parseInt( prompt( 'How many years have I lived in Oregon?' ) );
    if(guess < correctGuess){ 
      alert( 'Too low. Try again.');
      incorrectCount++;
    }
    else if(guess > correctGuess){
      alert( 'Too high. Try again.');
      incorrectCount++;
    }
    else if (guess === correctGuess){
      alert( 'Correctomundo!!' );
      correctCount++;
    }
    else {
      alert( 'Please enter integer.');
    }
    console.log( guess );
  } while (guess !== correctGuess );
}

oregon();


// for ( var i = 0; i < 6; i ++ ){
//   var states = ['texas', 'hawaii','mississippi'];
//   var guess = prompt( 'Can you guess another state that I\'ve lived besides California and Oregon?' ).toLowerCase();
//   if ( guess === 'texas' || guess === 'hawaii' || guess === 'mississippi'){
//     alert( 'That\'s correct. I have lived in ' + guess);
//     correctCount ++;
//     break;
//   }
//   else if ( guess === 'california' || guess === 'oregon'){
//     alert( 'Yes, I have lived in ' + guess + ' but can you guess another state? You have ' + (6-i) + ' guesses remaining.');
//     incorrectCount++;
//   }
//   else {
//     alert ('No, I have never lived in ' + guess + '.' + ' You have ' + (6-i) + ' guesses remaining.');
//     incorrectCount++;
// }  
// }

// alert( name + ' You had ' + correctCount + ' correct answers out of ' + (correctCount + incorrectCount) + ' attempts!');




var varStates = ['texas', 'hawaii','mississippi'];
var varStatesII = ['california', "oregon"];


function pastStates(states, statesII) {  // both parameters arrays
  do {
    var guess = prompt( 'Can you guess another state that I\'ve lived besides California and Oregon?' ).toLowerCase();
    //if ( guess === 'texas' || guess === 'hawaii' || guess === 'mississippi'){
    if ( states.includes(guess) ){
      alert( 'That\'s correct. I have lived in ' + guess);
      correctCount++;
    }
    else if (statesII.includes(guess)){
      alert( 'Yes, I have lived in ' + guess + ' but can you guess another state?');
    }
    else {
      alert ('No, I have never lived in ' + guess);
      incorrectCount++;
    }  
    console.log( guess, states );
  } while ( states.indexOf( guess ) === -1 ); 
}

pastStates(varStates, varStatesII);
alert( name + ' You had ' + correctCount + ' correct answers out of ' + (correctCount + incorrectCount) + ' attempts!');
