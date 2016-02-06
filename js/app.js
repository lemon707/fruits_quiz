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

  value = '',

  options,

  counter = 0,

  i,

  changeCard,

  changeButtonColor,

  checkQuestion,

  checkAnswer;


//restart game;

document.getElementsByClassName('restart')[0].addEventListener('click', function () {
    
    var card = this.parentNode;

    changeCard(card);

    var feedback_correct = document.querySelector('.correct');

    //TODO- does not remove!

    feedback_correct.parentNode.removeChild(feedback_correct);

    options = document.querySelectorAll('input[type="radio"]');

    for (i = 0; i < options.length; i += 1) {
      
      options[i].checked = false;

    }

});


//start game;

options = document.querySelectorAll('input[type="radio"]');

for (i = 0; i < options.length; i += 1) {
  
  options[i].addEventListener('click', function () {
    
    var input = this;

    var formID = this.parentNode.parentNode.id;

    var card = this.parentNode.parentNode.parentNode;

    checkQuestion(formID, this.value, card);

  });

};

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

createFeedback = function(correct) {

    var container = document.querySelector('.fruit');

    var feedback = document.createElement('span');

    if(correct) {

      feedback.setAttribute('class', 'correct');

      feedback.innerHTML = 'Good job! Next card...';

      container.appendChild(feedback);
    
    } else {

        feedback.setAttribute('class', 'incorrect');
        
        feedback.innerHTML = 'Hmm... Try again!';

        container.appendChild(feedback);

    }

};

checkAnswer = function (question, value, currentCard) {

    var container = document.querySelector('.fruit');

    if(value === question.answer) {

      var feedback_incorrect = document.querySelector('.incorrect');

      if(feedback_incorrect) {

        feedback_incorrect.parentNode.removeChild(feedback_incorrect);

      }

      console.log('Woo-hoo!');

      createFeedback(true);

      //TODO - does not time out! (maybe only at the last question?)

      setTimeout(changeCard(currentCard), 5000);
      
    } else {

      if(document.querySelector('.incorrect')) {
      
        return;
      
      } else {

        console.log('Try again!');

        createFeedback(false);
        
      }

    }

};

