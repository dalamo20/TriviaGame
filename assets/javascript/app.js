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
$(document).ready(function () {
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

    function showQuiz() {
        var theRightAnswer = [];
        

    }

});
//timer starts 
//timer set 30-0
//when timer is 0, move to next question
//computer generates questions and answers
//player clicks answer
//if correct, correct++
//if else, wrong++