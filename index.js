// Deepank Chinnam
// W1175796


 // variables
var select = false;
var correct = undefined;
var count=0;
var topic = [techQuestions,capitalQuestions,currencyQuestions];
var topic_string = ["Techno General Questions","Country Capitals","Country Currencies"];



//Date
var j = new Date();
var date_today = j.getMonth() + '/' + j.getDate() + '/' + j.getFullYear();
var m = j.getDate();
var n = m % (topic.length);
var quiz = topic[n];
$('#date').html("<p> Date:</p>"+ date_today);

var quiz_string = topic_string[n];
$('#subject').html("<p> Topic for today:</p>"+ quiz_string);

//Timer
var total_seconds = 60*3;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);
var counter=0;
function CheckTime1(){
	if(counter==1){
document.getElementById("timer").innerHTML
= 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ' ;
if(total_seconds <=0){
setTimeout('document.quiz.submit()',1);
} else {
total_seconds = total_seconds -1;
c_minutes = parseInt(total_seconds/60);
c_seconds = parseInt(total_seconds%60);
setTimeout("CheckTime()",1000);
	}
}
else{alert("You started the Quiz again!!");
total_seconds=60*3;
c_minutes = parseInt(total_seconds/60);
 c_seconds = parseInt(total_seconds%60);

	}
}

var wow;

function CheckTime(){
	document.getElementById("start").style.visibility = "hidden";

	clearInterval(wow);
 wow=window.setInterval(function(){


	if(counter==1){

document.getElementById("timer").innerHTML
= 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ' ;
if(total_seconds <=0){
setTimeout('document.quiz.submit()',1);
alert("Your quiz has ended!!");
clearInterval(wow);

} else {
total_seconds = total_seconds -1;
c_minutes = parseInt(total_seconds/60);
c_seconds = parseInt(total_seconds%60);
	}
}
else{alert("You started the Quiz again!!");
total_seconds=60*3;
counter=1;
c_minutes = parseInt(total_seconds/60);
 c_seconds = parseInt(total_seconds%60);

	}
}, 1000);

}
//Timer




// question
function randomnQuestionSelected(quiz) {
	var position = Math.ceil(Math.random() * quiz.length);
	question_info = quiz[position];
	switch (question_info.questionType) {
		case 1:
			$('#input_answer').html('');
			var answerChoices = '';
			question_info.choices.forEach(function(entity) {
				answerChoices += '<input type="radio" name="solution" value="' +
								entity + '">' + entity + '<br>';
			});
			var display = '<p>' +
							question_info.question + '</p>' +
							answerChoices;
 			$('#multiple_choice').html(display);
 			correct = question_info.correctChoice;
			break;
		case 2:
			$('#multiple_choice').html('');
			var display = '<p>' +
							question_info.question + '</p>' +
							'<input type="text" name="solution">' + '<br>';
			$('#input_answer').html(display);
			correct = question_info.correctAnswer;
			break;
		default:
	}
}

// control
$('#start').click(function() {counter++;
	setTimeout("CheckTime()",0000);
	if (select)  {
		return;
	}
	else{
	select = true;
	randomnQuestionSelected(quiz);
	count++;
}
});

$('#next').click(function() {
	if (!select) {
		return;
	}

	else if (count<=10){
	if (($('input[name="solution"]').val() === correct) || ($('input[name="solution"]:checked').val() === correct)) {
		$('#right').html(Number($('#right').text()) + 1);
		$("#right").animate({fontSize: '+=30px'}, 'slow', function () {
        	$("#right").animate({fontSize: '-=30px'}, 'fast');
        });
			}
	else {
		$('#wrong').html(Number($('#wrong').text()) + 1);
		$("#wrong").animate({fontSize: '+=30px'}, 'slow', function () {
			$("#wrong").animate({fontSize: '-=30px'}, 'fast');
		});
	}

	count++;
	randomnQuestionSelected(quiz);

}
});

$('#quit').click(function() {

	total_seconds =0;

	count=0;
	select = false;
	$('#right').html('0');
	$('#wrong').html('0');
	$('#input_answer').html('');
	$('#multiple_choice').html('');
	// $("#start").prop("disabled",false);
//	$("#").prop('disabled', false); //TO ENABLE
document.getElementById("start").style.visibility = "visible";



});
