var questions = [],
  one = {
    id: 1,
    answer: 'blueberries'
  },
  two = {
    id: 2,
    answer: 'oranges'
  },
  three = {
    id: 3,
    answer: 'grapes'
  },
  four = {
    id: 4,
    answer: 'cranberries'
  },
  five = {
    id: 5,
    answer: 'strawberries'
  },
  score = 0,
  value = '';

questions.push(one);
questions.push(two);
questions.push(three);
questions.push(four);
questions.push(five);

var value1 = document.querySelector('input[name="Q1_answer"]:checked').value;

var value2 = document.querySelector('input[name="Q2_answer"]:checked').value;

var value3 = document.querySelector('input[name="Q3_answer"]:checked').value;

var value4 = document.querySelector('input[name="Q4_answer"]:checked').value;

var value5 = document.querySelector('input[name="Q5_answer"]:checked').value;

var valueFunc = function (value, question) {

    console.log('question.answer',question.answer);

    if(value === question.answer) {

      console.log('Correct!');

      var feedback_correct = '<span class="correct">Correct!</span>'
      
      score += 1;

    } else {

      console.log('Try again!');

      var feedback_incorrect = '<span class="incorrect">Try again!</span>'

    }

};

valueFunc(value1, questions[0]);

var total = score;

//display ID 1/5
//display score at the end