let myQuestions = [
    {
      question: "What is 10/2?",
      answers: {
        a: "3",
        b: "5",
        c: "115",
      },
      correctAnswer: "b",
    },
    {
      question: "What is 30/3?",
      answers: {
        a: "3",
        b: "5",
        c: "10",
      },
      correctAnswer: "c",
    },
    {
      question: "What is 30/3?",
      answers: {
        a: "3",
        b: "5",
        c: "10",
      },
      correctAnswer: "c",
    },
    {
      question: "What is 30/3?",
      answers: {
        a: "3",
        b: "5",
        c: "10",
      },
      correctAnswer: "c",
    },
    {
      question: "What is 30/3?",
      answers: {
        a: "3",
        b: "5",
        c: "10",
      },
      correctAnswer: "c",
    },
  ];
  
  let quizContainer = document.getElementById("quiz");
  let resultsContainer = document.getElementById("results");
  let submitButton = document.getElementById("submit");
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(
    questions,
    quizContainer,
    resultsContainer,
    submitButton
  ) {
    function showQuestions(questions, quizContainer) {
      // we'll need a place to store the output and the answer choices
      let output = [];
      let answers;
  
      // for each question...
      for (let i = 0; i < questions.length; i++) {
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for (letter in questions[i].answers) {
          // ...add an html radio button
          answers.push(
            "<label>" +
              '<input type="radio" class="check" name="question' +
              i +
              '" value="' +
              letter +
              '">' +
              letter +
              ": " +
              questions[i].answers[letter] +
              "</label></br>"
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' +
            questions[i].question +
            "</div>" +
            '<div class="answers">' +
            answers.join("") +
            "</div>"
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults(questions, quizContainer, resultsContainer) {
      // gather answer containers from our quiz
      let answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let userAnswer = "";
      let numCorrect = 0;
  
      // for each question...
      for (let i = 0; i < questions.length; i++) {
        // find selected answer
        userAnswer = (
          answerContainers[i].querySelector(
            "input[name=question" + i + "]:checked"
          ) || {}
        ).value;
  
        // if answer is correct
        if (userAnswer === questions[i].correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[i].style.color = "#66ff66";
        }
        // if answer is wrong or blank
        else {
          // color the answers red
          answerContainers[i].style.color = "#ff4d4d";
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
  
    // on submit, show results
    submitButton.onclick = function () {
      showResults(questions, quizContainer, resultsContainer);
    };
  }
  