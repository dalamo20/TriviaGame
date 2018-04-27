$(document).ready(function () {
    //an array 
    var myQuestions = [{
        question: "Which is a cranial nerve?",
        answers: {
            a: "Hypoglossal",
            b: "Facial",
            c: "Trigeminal",
            d: "All of the above"
        },
        correctAnswer: "d"
    }, {
        question: "Which type of bond is weakest?",
        answers: {
            a: "sp3 orbital",
            b: "sp1 orbital",
            c: "sp2 orbital",
            d: "best friends forever"
        },
        correctAnswer: "b"
    }, {
        question: "Which boy band was the most popular?",
        answers: {
            a: "Backstreet Boys",
            b: "N'Sync",
            c: "The Hansons",
            d: "One Direction"
        },
        correctAnswer: "a"
    }, {
        question: "How many questions are in this game?",
        answers: {
            a: 10,
            b: 8,
            c: 12,
            d: 15
        },
        correctAnswer: "a"
    }, {
        question: "Which coffee is more popular?",
        answers: {
            a: "Starbucks",
            b: "Dunkin Donuts",
            c: "Dark Matter",
            d: "Einstein"
        },
        correctAnswer: "b"
    }, {
        question: "Most dangerous animal?",
        answers: {
            a: "Gold fish",
            b: "Turtle",
            c: "Monkey",
            d: "Sting Ray"
        },
        correctAnswer: "c"
    }, {
        question: "Tallest building in Chicago?",
        answers: {
            a: "Trump Tower",
            b: "John Hancock",
            c: "Aon Center",
            d: "Willis Tower"
        },
        correctAnswer: "d"
    }, {
        question: "Which name is not a human in the tv show Frasier?",
        answers: {
            a: "Niles",
            b: "Martin",
            c: "Daphne",
            d: "Eddie"
        },
        correctAnswer: "d"
    }, {
        question: "Which muscle closes the lips?",
        answers: {
            a: "Orbicularis Oris",
            b: "Orbicularis oculi",
            c: "Masseter",
            d: "Sternocleidomastoid"
        },
        correctAnswer: "a"
    }, {
        question: "What is the life span of a taste receptor cell?",
        answers: {
            a: "One day",
            b: "One week",
            c: "Two weeks",
            d: "Three days"
        },
        correctAnswer: "c"
    }];
    var clickStart = $("#click-to-start");
    var gameDiv = $("#game-area");
    var quiz = $("#questions");
    var answer = $("#answers");
    var stopWatch = $("#time");

    gameDiv.hide();

    //Hide all of my game and only display "start button"
    //"on click",start trivia games shows
    clickStart.on("click", function () {
        $(this).hide();
        gameDiv.show();
    });

    //Submitting Answers
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
        for (i = 1; i < total; i++) {
            if (q1 === null || q1 === "") {
                alert("You missed question 1");
                return false;
            }
        }
    }

    //Validation
    for (i = 1; i <= total; i++) {
        if (eval("q" + i) === null || eval("q" + i) === '') {
            alert("You missed question " + i);
            return false;
        }
    }

    //Set Correct Answers
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) === answers[i - 1]) {
            score++;
        }
    }

    //Display Results
    var results = $("#results");


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