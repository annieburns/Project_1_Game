window.onload = function() {
    let pNodes = document.querySelectorAll('.intro'); // I grabbed all DOM objects, they are now in an array-like structure
    pNodes.forEach((node) => {    // we are sending one element in as (node)
      removeParaFromDom(node);  // there is no comma in between brackets so this is argument 1
    });

    function removeParaFromDom(incomingNode) {
      incomingNode.addEventListener('click', function(e) {
          this.remove();

      });
  };


// let startGame = document.getElementsByClassName("start").onclick
//     showQuestion(current);
//     showAnswers(current);
//   }

/// NEED TO INSERT AN EVENT LISTENER TO BASICALLY SAY WHEN ABOVE IS EXECUTED BELOW CAN BE SEEN
/// OR IN OTHER WORDS THE GAME BEGINS
//create a function that renders the questions AND you do not want it to load until then
// these two need to happen:
//  showQuestion(current);
//   showAnswers(current);

// scoreboard is where correct/false-div will be placed:
// current is what question the user is on creates an object that will hold all questions and answers.
  let questionView = document.getElementsByClassName('questions')[0],
      answerView = document.getElementsByClassName('answers')[0],
      scoreBoard = document.getElementsByClassName('score')[0],
      current = 0,

// OBJECT that holds all the [questions and possible answers, last i value is correct answer]
// the TriviaQuestions object is setup to be an array-like object with KEY indecies
    triviaQuestions = {
        'What is Elevens favorite Food?' : ['A.  Eggo Waffles', 'B.  Jello pudding', 'C.  French Fries', 0],
        'Where does the story take place?' : ['A.  Michigan', 'B.  Indiana' , 'C.  Nebraska', 1],
        'Who has a secret crush on Eleven?' : ['A.  Will', 'B.  Mike', 'C.  Lucas', 1],
        'Who disappeared at party at Steve Harringtons house?' : ['A.  Nancy', 'B.  Joyce', 'C.  Barb', 2],
        'Who is the evil antagonist responsible for the top secret experiments that lead to the diappearances and opening up this dark underworld?' : ['A.  Dr. Fairchild', 'B.  Dr. Burns', 'C.  Dr. Brenner', 2],
        'What game were Will, Mike, Dustin and Lucas playing the night Will disapperared?': ['A.  Ouija', 'B.  Dungeons and Dragons', 'C.  Vampire Underground', 1],
        'Eleven can use her telepathic powers to locate people, and she must do this to find Will in the end of the season. What did they make in the high school gym to help connect Eleven to the Upside Down world?' : ['A.  Sensory Deprivation pool', 'B.  Time Machine', 'C. Worm hole', 0]
  };

// function showQuestion(curr) loads all the question into the questionView.  It shows the current question based on the 'current'-variable. the 'current'-variable was already set to 0 above to start
 // let question = Object.keys(triviaQuestions)[curr]; variable grabs all the keys of an object and put it in an array. [curr] at the end will give us the current question
 // questionView.innerHTML = ''; remove everything inside the questionView  (empties it)
 // questionView.innerHTML = question; adds the current question
  function showQuestion(curr) {  // HERE
    let question = Object.keys(triviaQuestions)[curr];
    questionView.innerHTML = '';
    questionView.innerHTML = question;
  }

// function showAnswers(curr) loads all the possible answers of the given question and grabs the needed answer-array with the help of the current-variable
// Every answer is added with an 'onclick'-function
// let answers = triviaQuestions[Object.keys(triviaQuestions)[curr]]; gets all possible answers from the current question
// AnswerView.innerHTML = ''; removes everything from AnswerView (empties it)
  function showAnswers(curr) {  // HERE
    let answers = triviaQuestions[Object.keys(triviaQuestions)[curr]];
    answerView.innerHTML = '';
// for loop adds all the possible answers to the answerView
// createDiv.addEventListener("click", checkAnswer(i, answers)); adds an onclick-function on the answer. Click will execute a function to check if the answer was correct
    for (let i = 0; i < answers.length -1; i += 1) {
      let createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));

      answerView.appendChild(createDiv);
    }
  }

// function checkAnswer(i, arr) { is the function that will run, when player clicks on one of the answers
// Checks if givenAnswer matches the correct one.
// Then check if it's the last question. If it is: empty the answerView and let them know it's done.
//  addscoreBoard(); function is executed when the answer is correct or false. It will create a div, add a textNode with the current question number and adds a css-class (correct or false).
  function checkAnswer(i, arr) {
    return function () {
      let givenAnswer = i,
          correctAnswer = arr[arr.length-1];

      if (givenAnswer === correctAnswer) {
        addscoreBoard(true);
      } else {
        addscoreBoard(false);
      }

      if (current < Object.keys(triviaQuestions).length -1) {
        current += 1;

        showQuestion(current);
        showAnswers(current);
      } else {
        questionView.innerHTML = 'Done';
        answerView.innerHTML = '';
      }

    };
  }

 //   function addScoreBoard(bool) { adds a div element to the page which is used to see if it was correct or false
  function addscoreBoard(bool) {
    let createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);

    createDiv.appendChild(txt);

// if correct it adds a div class that connects to CSS to show a red (false) or green (correct) on the scoreboard. NEED TO CONNNECT THIS TO THE ANIMATION OF CORRECT/ FALSE AS WELL
    if (bool) {
      createDiv.className += 'correct';
      scoreBoard.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      scoreBoard.appendChild(createDiv);
    }
  }

  showQuestion(current);
  showAnswers(current);

};

