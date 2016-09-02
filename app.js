// DONT FORGET THIS ONE OR IT WONT WORK!



//NEED TO CHANGE THIS TO A CLICK EVENT
//   - START PAGE (ABOUT GAME) - A DIV ELEMENT
//   - CLICK EVENT TO START GAME AND MAKE THAT DIV ELEMENT DISAPPEAR
window.onload = function() {
    let pNodes = document.querySelectorAll('.intro'); // I grabbed all DOM objects, they are now in an array-like structure
    pNodes.forEach((node) => {    // we are sending one element in as (node)
      removeParaFromDom(node);  // there is no comma in between brackets so this is argument 1
    });

    function removeParaFromDom(incomingNode) {
      incomingNode.addEventListener('click', function(e) {
          this.remove();   //you could ALSO do instead: e.target.remove();
      });
    };





  let questionView = document.getElementsByClassName('questions')[0],
      answerView = document.getElementsByClassName('answers')[0],

// scoreboard is where correct/false-div will be placed:
      scoreBoard = document.getElementsByClassName('score')[0],
// current is what question the user is on creates an object that will hold all questions and answers.
      current = 0,

// OBJECT that holds all the [questions and possible answers, last i value is correct answer]
    triviaQuestions = {
        'What is Elevens favorite Food?' : ['A.  Eggo Waffles', 'B.  Jello pudding', 'C.  French Fries', 0],
        'Where does the story take place?' : ['A.  Michigan', 'B.  Indiana' , 'C.  Nebraska', 1],
        'Who has a secret crush on Eleven?' : ['A.  Will', 'B.  Mike', 'C.  Lucas', 1]
  };

  function loadQuestion(curr) {
    let question = Object.keys(triviaQuestions)[curr];
    questionView.innerHTML = '';
    questionView.innerHTML = question;
  }

  function loadAnswers(curr) {
    let answers = triviaQuestions[Object.keys(triviaQuestions)[curr]];
    answerView.innerHTML = '';

    for (let i = 0; i < answers.length -1; i += 1) {
      let createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));

      answerView.appendChild(createDiv);
    }
  }

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

        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionView.innerHTML = 'Done';
        answerView.innerHTML = '';
      }

    };
  }

  function addscoreBoard(bool) {

    let createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);

    createDiv.appendChild(txt);

    if (bool) {

      createDiv.className += 'correct';
      scoreBoard.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      scoreBoard.appendChild(createDiv);
    }
  }

  loadQuestion(current);
  loadAnswers(current);

};
