var correctAnswer = 0;

var wrongAnswer = 1;

var unAnswered = 0;

var number = 120;

var intervalId;

$("#B1").on("click", function(){
    $("#start").css("display", "none");
    $("#questions").css("visibility", "visible");
});

$("#B1").on("click", run);

// run();
function run() {
clearInterval(intervalId);
intervalId = setInterval(decrement, 1000);
}

function decrement() {
number--;

$("#timeRem").html(number);

if (number === 0) {
    $("#questions").css("display", "none");
    $("#results").css("visibility", "visible");
    let answer1 = $( ".q1:checked" ).val();
console.log(answer1);
if(answer1 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

}
else if (answer1 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
}
else{
    unAnswered++;
    $("#UA").html(unAnswered);
}


let answer2 = $( ".q2:checked" ).val();
if(answer2 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer2 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }

let answer3 = $( ".q3:checked" ).val();
if(answer3 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer3 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer4 = $( ".q4:checked" ).val();
if(answer4 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer4 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer5 = $( ".q5:checked" ).val();
if(answer5 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer5 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer6 = $( ".q6:checked" ).val();
if(answer6 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer6 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer7 = $( ".q7:checked" ).val();
if(answer7 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer7 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer8 = $( ".q8:checked" ).val();
if(answer8 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer8 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer9 = $( ".q9:checked" ).val();
if(answer9 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer9 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer10 = $( ".q10:checked" ).val();
if(answer10 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer10 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }

if(correctAnswer > 5) {
$("#pass").html("You Passed");

    }
else{
$("#pass").html("You Failed");
$("#pass").css("color", "red");
}
  }
}




$("#B2").on("click", function(){
let answer1 = $( ".q1:checked" ).val();
console.log(answer1);
if(answer1 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

}
else if (answer1 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
}
else{
    unAnswered++;
    $("#UA").html(unAnswered);
}


let answer2 = $( ".q2:checked" ).val();
if(answer2 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer2 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }

let answer3 = $( ".q3:checked" ).val();
if(answer3 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer3 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer4 = $( ".q4:checked" ).val();
if(answer4 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer4 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer5 = $( ".q5:checked" ).val();
if(answer5 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer5 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer6 = $( ".q6:checked" ).val();
if(answer6 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer6 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer7 = $( ".q7:checked" ).val();
if(answer7 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer7 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer8 = $( ".q8:checked" ).val();
if(answer8 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer8 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer9 = $( ".q9:checked" ).val();
if(answer9 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer9 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }
let answer10 = $( ".q10:checked" ).val();
if(answer10 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer10 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    }

if(correctAnswer > 5) {
$("#pass").html("You Passed");

    }
else{
$("#pass").html("You Failed");
$("#pass").css("color", "red");
}

$("#questions").css("display", "none");
$("#results").css("visibility", "visible");


});