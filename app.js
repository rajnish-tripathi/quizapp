function populate(){
	setTimeout(showScores, 30000);
	if(quiz.isEnded()){
	showScores();
	}
	else{
	// show question;
	var element = document.getElementById("question");
	element.innerHTML = quiz.getQuestionIndex().text;
	// show choices
	var choices = quiz.getQuestionIndex().choices; 
	for(var i = 0; i< choices.length; i++){
		var element = document.getElementById("choice" + i);
		element.innerHTML = choices[i];
		guess("btn" + i, choices[i]);
	}
	}		
};

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
	quiz.guess(guess);
	populate();
	}
}
function showScores(){
	var gameOverHtml = "<h1>Result</h1>";
	switch(quiz.score)
	{
	case 0 :
		gameOverHtml += "<h2 id='score'>You scores: " + quiz.score + " out of 5.You have very poor general knowledge" + "</h2>";
		break;
	case 1 :
		gameOverHtml += "<h2 id='score'>You scores: " + quiz.score + " out of 5. You have poor general knowledge" + "</h2>";
		break;
	case 2 :
		gameOverHtml += "<h2 id='score'>You scores: " + quiz.score + " out of 5. You have bad general knowledge" + "</h2>";
		break; 
	case 3 : 	
		gameOverHtml += "<h2 id='score'>You scores: " + quiz.score + " out of 5. You have good general knowledge" + "</h2>";
		break;
	case 4 : 
		gameOverHtml += "<h2 id='score'>You scores: " + quiz.score + " out of 5. You have strong general knowledge" + "</h2>";
		break;
	default: 
		gameOverHtml += "<h2 id='score'>You scores: " + quiz.score + " out of 5. You have very strong general knowledge" + "</h2>";
	}
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
}

var questions = [
	new Question("What falling object is said to have inspired Isaac Newton's theories about gravity?", ["Pineapple","Orange","Mango","Apple"], "Apple"),
	new Question("Which logo on a flag identifies a ship's crew as pirates?",["Hammer and sickle","Bull","Lion","Skull and crossbones"], "Skull and crossbones"),
	new Question("Which one is not an object oriented programming language?", ["Java","C","C#","C++"], "C"),
	new Question("Who is the winner of FIFA World Cup 2018?", ["France","Croatia","Brazil","Argentina"], "France"),
	new Question("Which one of the following is nearest planet to the earth?", ["Saturn","Mars","Mercury","Jupiter"], "Mercury")
];

var quiz = new Quiz(questions);
populate();
