var movieTitles = ['Salt', 'Argo', 'Thor', 'Halloween', 'Jumanji', 'Cinderella'];

var alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var chosenTitle = "";

var lettersInTitle = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongLetters = [];

var guessesRemaining = 9;

var rightGuessCounter = 0;

var winCount = 0;

var lossCount = 0;

// var alphabet = getAlphabetArray();

// var underScores = [];

// var userGuesses = [];

// var randomWord;

function reset(){
    chosenTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    lettersInTitle = chosenTitle.split('');
    numBlanks = lettersInTitle.length;

    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesRemaining: 9;
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
    guessesRemaining = 9;
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
    console.log('WORKING!');
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
        guessesLeft--;
        
        document.querySelector('#numGuessesLeft').innerText = guessesRemaining;
        document.querySelector('#wrongGuesses').innerText = wrongLetters;
        
        console.log('Wrong Letters = ' + wrongLetters);
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
            var spliceDword = alphabetArray.splice(i.1);
            
            console.log('Double word is = ' + alphabetArray[i]);
            console.log('Splice word is = ' + spliceDword);

            compareLetters(letterGuessed);
            winLose();
        }
    }
}

