'use strict';

alert( 'Hello!' );
var name = prompt( 'What is your name?' );
console.log( name );

alert( 'Hi ' + name + ', I would like to see how well you know me.' );
var state = prompt( 'What state am I from?' ).toLowerCase();
console.log( state);

if (state == 'california'){
alert( 'Yes! I was bred and born in the Golden State!' );
} 
else{
alert( 'Not even close. Think warmer..' );
}

var sports = prompt( 'Do I like sports?' ).toLowerCase();
console.log( sports );

if (sports == 'yes'){
alert( 'Of course! I love sports!' );
} 
else {
alert( 'Of course! I love sports!' );
}

var sportsII = prompt( 'Can you guess my favorite sport?' ).toLowerCase();
console.log( sportsII );

if (sportsII == 'football'){
alert( 'Right on! Let\'s go Raiders!'  );
} 
else {
alert( 'Nope. Die hard for Raiders football.' );
}


var food = prompt( 'If I had to choose between burgers or tacos, what would I choose?' ).toLowerCase();
console.log( food );

if (food == 'tacos'){
alert( 'Yes! I love me some tacos.' );
} 
else {
alert( 'Taco Guy. Tortillas are agruably the greatest culinary creation of all time!' );
}
