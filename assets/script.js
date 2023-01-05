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
var highButton = document.getElementById('highscore');
var form = document.getElementById('form');
var inputVal = document.getElementById('get-value');
var submButton= document.getElementById('submitbutton');
var highscoreDisplay= document.getElementById('highscore-display');
var mainE1=document.querySelector("main");

var finalList=[];
var score=0;
var Timeleft=100;
// var clickBtn ="";
var count = 0;


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





//Change Text to Display Gameover
function gameOver(){
    container.style.display="none";
    form.style.display="inline";
    Timeleft=0;
}

// Checks to see if the select answer is right or wrong and Add to score if correct and subtract time if incorrect
function questions(event){
    var element = event.target;
    clickBtn= element.getAttribute("data-number");
        if(clickBtn==null){
            return;
        }else if(clickBtn==correctList[count]){
            count++
            score++;
            score1.textContent=score;
            indicator.textContent="correct";
            changeQuestion();
            
        }else{
            Timeleft= Timeleft - 10;
            count++
            indicator.textContent="Wrong"
            changeQuestion(); 
        }
}

//Changes the question to the next
function changeQuestion(){
    if(count>=questionList.length){
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
    var timerInterval = setInterval(function(){
        if(Timeleft < 0){
            timer.textContent = "Time: 0";
            clearInterval(timerInterval);
            if(container.style.display==="inline");
                gameOver();
            }else{timer.textContent = "Time: " + Timeleft;}
        Timeleft--;  
    }, 1000);
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
    count=0;
    if(container.style.display==="none"){
        container.style.display="inline";
        highscoreDisplay.textContent="";
        mainE1.removeChild(createButton);
    }
    container.addEventListener("click", questions);
}

var highbool = false

var createButton=document.createElement("Button");
// show high score
function showHighscore(){
    highscoreDisplay.textContent="";
    // var createButton=document.createElement("Button");
    createButton.setAttribute("class","button2");
    createButton.textContent="restart";
    mainE1.appendChild(createButton);

    // createButton.addEventListener('click', startquiz());
    if(!highbool){
        form.style.display="none";
        container.style.display="none";
        startButton.style.display="none";
        highbool=true;
        for(i=0;i<finalList.length; i++){
        var li = document.createElement("li");
        li.textContent=((finalList[i].Name)+": \xa0\xa0\xa0\xa0"+(finalList[i].scoreCount));
        highscoreDisplay.appendChild(li);
        }
    }else if(count>=questionList.length){
        container.style.display="none";
        startButton.style.display="inline";
      
        highbool=false;
        mainE1.removeChild(createButton);
    
    }else{
        container.style.display="inline";
        startButton.style.display="inline";
     
        highbool=false;
        mainE1.removeChild(createButton);
    }
}

// Submit highscore
function submitbutton(){
    var saveScore = {
        Name: inputVal.value,
        scoreCount: score
    }
    finalList.push(saveScore);
    inputVal.value="";
    container.style.display="inline";
    form.style.display="none";
    showHighscore();
};








submButton.addEventListener('click', submitbutton);



highButton.addEventListener("click", showHighscore);



//event listener for the start button
startButton.addEventListener("click", clickStart);

createButton.addEventListener("click", startquiz);











