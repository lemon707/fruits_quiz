var questions = [{
    id: 'Q1',
    answer: 'blueberries'
  },
  {
    id: 'Q2',
    answer: 'oranges'
  },
  {
    id: 'Q3',
    answer: 'grapes'
  },
  {
    id: 'Q4',
    answer: 'cranberries'
  },
  {
    id: 'Q5',
    answer: 'strawberries'
  }],

  container,

  counter = 0,

  i,

  changeCard,

  checkQuestion,

  checkAnswer,

  getCard,

  optins,

  restartGame,

  startGame,

  toggleRadio,

  value = '';


//restart game;

restartGame = function() {

  document.getElementsByClassName('restart')[0].addEventListener('click', function () {
      
      var card = this.parentNode;

      changeCard(card);

      var feedback_correct = document.querySelectorAll('.correct');

      for(var k = 0; k < feedback_correct.length; k += 1) {

        feedback_correct[k].parentNode.removeChild(feedback_correct[k]);
      
      }

      options = document.querySelectorAll('input[type="radio"]');

      for (i = 0; i < options.length; i += 1) {
        
        options[i].checked = false;

        options[i].disabled = false;

      }


  });

};

restartGame();

//start game;

startGame = function() {

  options = document.querySelectorAll('input[type="radio"]');

  for (i = 0; i < options.length; i += 1) {
    
    options[i].addEventListener('click', function () {
      
      var input = this;

      var formID = this.parentNode.parentNode.id;

      var card = this.parentNode.parentNode.parentNode;

      checkQuestion(formID, this.value, card);

    });

  };
  
};

startGame();

changeCard = function (currentCard) {

  var allCards = currentCard.parentNode.children;

  currentCard.style.display = "none";

  if(counter < allCards.length - 1) {

    counter += 1;

  } else {

    counter = 0;
    
  }

  allCards[counter].style.display = "block";

};

checkQuestion = function (id, value, currentCard) {

  var j;

    for (j = 0; j < questions.length; j += 1) {

      if(questions[j].id === id) {

        checkAnswer(questions[j], value, currentCard);

        return;

      }

    }

};

createFeedback = function(correct, cardNum) {

    container = document.querySelectorAll('.fruit')[cardNum];

    var feedback = document.createElement('span');

    if(correct) {

      feedback.setAttribute('class', 'correct');

      feedback.innerHTML = 'Good job! Next card coming up...';

      container.appendChild(feedback);
    
    } else {

        feedback.setAttribute('class', 'incorrect');
        
        feedback.innerHTML = 'Hmm... Try again!';

        container.appendChild(feedback);

    }

};

checkAnswer = function (question, value, currentCard) {

    function getCard (currentCard) {

      var fruitClass = currentCard.classList[1];

      console.log('fruitClass',fruitClass);

      cardNum = parseInt(fruitClass[fruitClass.length-1]) - 1;

      console.log('cardNum',cardNum);

      container = document.querySelectorAll('.fruit')[cardNum];

      console.log('container',container)
      
    }

    getCard(currentCard);

    if(value === question.answer) {

      var feedback_incorrect = document.querySelector('.incorrect');

      if(feedback_incorrect) {

        feedback_incorrect.parentNode.removeChild(feedback_incorrect);

      }

      console.log('Woo-hoo!');

      createFeedback(true, cardNum);

      toggleRadio(container);

      window.setTimeout(function(){

        changeCard(currentCard)

      }, 2000);
      
    } else {

      if(document.querySelector('.incorrect')) {
      
        return;
      
      } else {

        console.log('Try again!');

        createFeedback(false, cardNum);
        
      }

    }

};

toggleRadio = function (container) {

  var radios = container.querySelectorAll('input[type=radio]');

  console.log('radios', radios)

  for(var r = 0; r < radios.length; r += 1) {

    if(!radios[r].disabled) {

      radios[r].disabled = true;

    } else {

      radios[r].disabled = false;
    }

  }

};

getCard = function (currentCard) {

  var fruitClass = currentCard.classList[1];

  console.log('fruitClass',fruitClass);

  cardNum = parseInt(fruitClass[fruitClass.length-1]) - 1;

  console.log('cardNum',cardNum);

  container = document.querySelectorAll('.fruit')[cardNum];

  console.log('container',container)

};