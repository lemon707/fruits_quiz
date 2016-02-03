var questions = [],
  one = {
    id: 'Q1',
    answer: 'blueberries'
  },
  two = {
    id: 'Q2',
    answer: 'oranges'
  },
  three = {
    id: 'Q3',
    answer: 'grapes'
  },
  four = {
    id: 'Q4',
    answer: 'cranberries'
  },
  five = {
    id: 'Q5',
    answer: 'strawberries'
  },
  score = 0,
  value = '';

questions.push(one);
questions.push(two);
questions.push(three);
questions.push(four);
questions.push(five);


var options = document.querySelectorAll('input[type="radio"]');

for (var i = 0; i < options.length; i += 1) {
  
  options[i].addEventListener('click', function() {
    
    var formID = this.parentNode.parentNode.id;

    var input = this;

    checkQuestion(formID, this.value);
  
  });

}

var checkQuestion = function (id, value) {

    for (var j = 0; j < questions.length; j += 1) {

      if(questions[j].id === id) {

        checkAnswer(questions[j], value);

        return;

      }

    }

};

var checkAnswer = function (question, value) {

    var container = document.querySelector('.fruit');

    if(value === question.answer) {

      console.log('Woo-hoo!');

      var feedback_correct = document.createElement('span');

      feedback_correct.setAttribute('class', 'correct');
      
      feedback_correct.innerHTML = 'Good job!';

      container.appendChild(feedback_correct);
      
    } else {

      var feedback_incorrect = document.createElement('span');

      feedback_incorrect.setAttribute('class', 'incorrect');
      
      feedback_incorrect.innerHTML = 'Try again!';

      container.appendChild(feedback_incorrect);

      console.log('Try again!');

    }

};
