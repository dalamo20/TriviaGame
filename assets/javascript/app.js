//Captains log: I would have liked to get the results fixed as well as a button to end the game and submit the 
//quiz if finished early. I feel like I need to work on the jquery a bit seeing that my code could have 
//been shorter. I wanted a different type of timer but did not have the time...no pun intended. There is more
//I would like to do such as style it and make a better quiz. 

$(document).ready(function () {
    //array of answers
    var answers = ["d", "b", "a", "a", "b", "c", "d", "d", "a", "c"];
    var clickStart = $("#click-to-start");
    var gameDiv = $("#game-area");
    var quiz = $("#questions");

    gameDiv.hide();

    //Hide all of my game and only display "start button"
    //"on click",start trivia games shows
    clickStart.on("click", function () {
        $(this).hide();
        gameDiv.show();
    });
    //Timer
    var number = 100;
    var intervalid;
    function run() {
        clearInterval(intervalid);
        intervalId = setInterval(decrement, 1000);
    }
    //Decrement time
    function decrement() {
        number--;
        $("#timer").html("<h2>" + number + "</h2>");

        //timer reaches 0, end game and give results
        //or alert time is up and give results
        if (number === 0) {
            stop();
            alert("Times Up!");
        }
    }
    //stoping function
    function stop() {
        clearInterval(intervalId);
    }
    //make timer run
    run();
    //Submit Answers
    function myAnswers() {
        var total = 10;
        var score = 0;

        //Get user input
        var q1 = document.forms("quizForm")("q1").value;
        var q2 = document.forms("quizForm")("q2").value;
        var q3 = document.forms("quizForm")("q3").value;
        var q4 = document.forms("quizForm")("q4").value;
        var q5 = document.forms("quizForm")("q5").value;
        var q6 = document.forms("quizForm")("q6").value;
        var q7 = document.forms("quizForm")("q7").value;
        var q8 = document.forms("quizForm")("q8").value;
        var q9 = document.forms("quizForm")("q9").value;
        var q10 = document.forms("quizForm")("q10").value;


        //Validation
        for (i = 1; i <= total; i++) {
            if (eval("q" + i) === null || eval("q" + i) === '') {
                alert("You missed question " + i);
                return false;
            }
        }


        //Check Answers
        for (i = 1; i <= total; i++) {
            if (eval('q' + i) === answers[i - 1]) {
                score++;
            }
        }

        //Display Results
        $("#results")
    }



});



//get questions on window using .html
//timer starts 
//timer set 30-0
//when timer is 0, move to next question
//computer generates questions and answers
//player clicks answer
//if correct, correct++
// if (userAnswer === currentQuestion.correctAnswer) {
//     numCorrect++;
//     //if else, wrong++
// } else {

// }