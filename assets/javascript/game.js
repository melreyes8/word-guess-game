// words to guess
var movieTitles = ['salt', 'argo', 'thor', 'halloween', 'jumanji', 'cinderella'];

// all letters for random input
var alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// shows the number of wins
var winCount = 0;

// shows the number of losses
var lossCount = 0;

// drives the win counter
var rightGuessCounter = 0;

// shows the number of attempts left to input more letters to guess the word
var guessesRemaining = 10;

// placeholder for the chosen word
var chosenTitle = "";

// placeholders for letters in the word
var lettersInTitle = [];

// number of blanks in the word 
var numBlanks = 0;

// placeholder for blanks and successful guesses 
var blanksAndSuccesses = [];

// placeholder for the wrong guesses  
var wrongLetters = [];

// Below are functions for the word game
function reset(){
    chosenTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    lettersInTitle = chosenTitle.split('');
    numBlanks = lettersInTitle.length;

    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesRemaining: 10;
    wrongLetters = [];
    blanksAndSuccesses = [];
    alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    test=false;
    startGame();
}

function startGame(){
    chosenTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    lettersInTitle = chosenTitle.split('');
    numBlanks = lettersInTitle.length;

    rightGuessCounter = 0;
    guessesRemaining = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];    
    alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	for(var i = 0; i< numBlanks; i++){
        blanksAndSuccesses.push('_');
        document.querySelector('#titleToGuess').innerText = blanksAndSuccesses;
    }

    document.querySelector('#titleToGuess').innerText = blanksAndSuccesses.join(' ');
    document.querySelector('#numGuessesLeft').innerText = guessesRemaining;
    document.querySelector('#winCounter').innerText = winCount;
    document.querySelector('#lossCounter').innerText = lossCount;
    document.querySelector('#wrongGuesses').innerText = wrongLetters;

    console.log(chosenTitle);
    console.log(lettersInTitle);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function compareLetters (userKey){
    // console.log('WORKING!');
    if(chosenTitle.indexOf(userKey) > -1){
        for(var i = 0; i < numBlanks; i++){
            if(lettersInTitle[i] === userKey){
                rightGuessCounter++;
                blanksAndSuccesses[i] = userKey;
                document.querySelector('#titleToGuess').innerText = blanksAndSuccesses.join(' ');
            }
        }

        console.log(blanksAndSuccesses);
    }
    else{
        wrongLetters.push(userKey);
        guessesRemaining--;
        
        document.querySelector('#numGuessesLeft').innerText = guessesRemaining;
        document.querySelector('#wrongGuesses').innerText = wrongLetters;
        
        console.log('Wrong letters = ' + wrongLetters);
        console.log('Guesses remaining are ' + guessesRemaining);
    }
}

function winLose(){
    if(rightGuessCounter === numBlanks){
        winCount++;

        document.querySelector('#winCounter').innerText = winCount;
        //play video
        reset();
    }
    else if(guessesRemaining === 0){
        lossCount++;

        document.querySelector('#lossCounter').innerText = lossCount;
        reset();
    }
}

startGame();

document.onkeyup = function(event){
    test = true;
    var letterGuessed = event.key;
    for(var i = 0; i < alphabetArray.length; i++){
        if(letterGuessed === alphabetArray[i] && test === true){
            var spliceDword = alphabetArray.splice(i,1);
            
            console.log('Double word is = ' + alphabetArray[i]);
            console.log('Splice word is = ' + spliceDword);

            compareLetters(letterGuessed);
            winLose();
        }
    }
}

// Play video corresponding to word/movie title succesfully guessed
function playVideo(...){
    var salt = document.getElementById('filmVid');
    var 
    if(...)
}
