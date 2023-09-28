//camelcase variable and function name
//meaningful variable name and function name
//remove unused code
//maintain proper code flow
//proper documentation,use const
//

let questionTracker = 0;

let hiddens = document.querySelectorAll(".hidden");
// let pageheightnone = document.getElementById("button_container");
let hideAllQuestion = document.querySelectorAll(".hideQuestion");
// let options_of_first_question = document.querySelectorAll(".option1");
let answerKey = [0, 1, 0, 0, 3, 2, 1, 0, 0, 1];

hideAllQuestion.forEach(function (hideQuestion) {
  hideQuestion.style.display = "none";
});

function displayAndHideQuestion() {
  console.log("questionTracker", questionTracker);
  //0
  hideAllQuestion[questionTracker].style.display = "block";
  hideAllQuestion[questionTracker].classList.add(
    "animate__animated",
    "animate__fadeInRight"
  );
  optioncomparison(questionTracker);

  if (questionTracker > 0) {
    //
    hideAllQuestion[questionTracker - 1].style.display = "none";
  }
}

//this function will use all opetion
function optionStyling(commonanimation) {
  commonanimation.style.backgroundColor = "yellowgreen";
  commonanimation.style.color = "white";
  var audio = new Audio("applluse.wav");
  audio.play();
  setTimeout(function () {
    commonanimation.classList.add("animate__animated", "animate__backOutLeft");
  }, 9000);
}
function optioncomparison(questionIndex) {
  let question = hideAllQuestion[questionIndex];
  console.log("question variable", question);
  let options = question.querySelectorAll(".option");
  console.log("options variable", options);
  options.forEach(function (
    option,
    index //quary
  ) {
    option.addEventListener("click", function () {
      if (index == answerKey[questionIndex]) {
        optionStyling(option);

        setTimeout(function () {
          questionTracker++; //1
          displayAndHideQuestion();
        }, 11000);
      } else {
        option.classList.add("animate__animated", "animate__wobble");
      }
    });
  });
}

let buttonHide = document.querySelector(".hidden");
buttonHide.addEventListener("click", function (e) {
  buttonHide.classList.add("animate__animated", "animate__backOutUp");
  setTimeout(function () {
    buttonHide.style.display = "none";
    displayAndHideQuestion();
  }, 1000);
});
