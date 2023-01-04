var timer = document.getElementById("time");
var question= document.getElementById('question1');
var answer1= document.getElementById('answer1');
var answer2= document.getElementById('answer2');
var answer3= document.getElementById('answer3');
var answer4= document.getElementById('answer4');
var startButton = document.querySelector("#startbtn");
var container = document.querySelector(".container");
var score1= document.getElementById('Score');
var indicator=document.getElementById('indicator');


var score=0;
var Timeleft=100;
var questionList=["1+1",
                "What is my name?",
                "3+3",
                "What is my Last Name?",
                "What state am I from?",
                "What State is biggest in Size?",
                "How Many States are there in America?",
                "What is cynophobia?",
                "What is the Rarest M&M color?",
                "What was the first soft drink in space?",
                "Which is the only edible food that never goes bad?",
                "Which Country Invent Ice Cream?"];
var answerList=[[2,4,5,6],
                ["howard","jackie","Howard","Jackie"],
                [3,6,5,10],
                ["Lee","le","li","ly"],
                ["Texas","California","Oregon","Washington"],
                ["Texas","Alaska","California","Washington"],
                [50,51,49,52],
                ["Fear of Birds","Fear of Insects","Fear of Dogs","Fear of Cats"],
                ["Blue","Purple","Brown","White"],
                ["Coca Cola","Pepsi","Fanta","RootBeer"],
                ["Crackers","Caramel","Honey","Raisins"],
                ["France","America","China","Japan"]];
var correctList=[0,2,1,0,3,1,0,2,2,0,2,2];


//Starts a Timer 
function setTime()
{
    var timerInterval = setInterval(function(){
        Timeleft--;
        timer.textContent = "Time: " + Timeleft;
        if(Timeleft <= 0){
            clearInterval(timerInterval);
           gameOver();
        }
    }, 1000);
}

var clickBtn ="";
var count = 0;


//Change Text to Display Gameover
function gameOver(){
    question.textContent= "Game Over";
    answer1.textContent="";
    answer2.textContent="";
    answer3.textContent="";
    answer4.textContent="";
}

// Checks to see if the select answer is right or wrong and Add to score if correct and subtract time if incorrect
function questions(event){
    var element = event.target;
    clickBtn= element.getAttribute("data-number");
        if(clickBtn==null){
            return;
        }else if(clickBtn==correctList[count]){
            console.log("correct");
            count++
            score++;
            score1.textContent=score;
            indicator.textContent="correct";
            console.log(count);
            changeQuestion();
            
        }else{
            Timeleft= Timeleft - 10;
            console.log("wrong");
            count++
            indicator.textContent="Wrong"
            changeQuestion(); 
        }
    }


//Changes the question to the next
function changeQuestion(){
    if(count>=questionList.length){
        console.log("end");
        gameOver();
    }else{
        question.textContent= questionList[count];
        answer1.textContent=answerList[count][0];
        answer2.textContent=answerList[count][1];
        answer3.textContent=answerList[count][2];
        answer4.textContent=answerList[count][3]; 
    }
}


//When button is pressed it removes the button and calls the startquiz function
function clickStart(event){
    startButton.parentNode.removeChild(startButton);
    setTime();
    startquiz();
}

// Adds the flex box and changes to first question
function startquiz(){
    question.classList.add("box");
    answer1.classList.add("box");
    answer2.classList.add("box");
    answer3.classList.add("box");
    answer4.classList.add("box");
    question.textContent= questionList[0];
    answer1.textContent=answerList[0][0];
    answer2.textContent=answerList[0][1];
    answer3.textContent=answerList[0][2];
    answer4.textContent=answerList[0][3];
    container.addEventListener("click", questions);
}


//event listener for the start button
startButton.addEventListener("click", clickStart);


