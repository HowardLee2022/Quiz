var timer = document.getElementById("time");
var Timeleft=100;
var question= document.getElementById('question1');
var answer1= document.getElementById('answer1');
var answer2= document.getElementById('answer2');
var answer3= document.getElementById('answer3');
var answer4= document.getElementById('answer4');
var startButton = document.querySelector("#startbtn");
var container = document.querySelector(".container");
// var score1= document.getElementById('score');
// var score2= 0;

var questionList=["1+1","What is my name?","3+3","What is my Last Name?","What state am I from?"];
var answerList=[[2,4,5,6],
                ["howard","jackie","Howard","Jackie"],
                [3,6,5,10],
                ["Lee","le","li","ly"],
                ["Texas","California","Oregon","Washington"]];
var correctList=[0,2,1,0,3];

function setTime(){
    var timerInterval = setInterval(function(){
        Timeleft--;
        timer.textContent = "Time: " + Timeleft;

        if(Timeleft === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
}

var clickBtn ="";
var count = 0;
function question1(event){
    var element = event.target;
    clickBtn= element.getAttribute("data-number");
    console.log(clickBtn);

    // for(i=1; i<questionList.length-1; i++){
        if(clickBtn==correctList[count]){
            console.log("correct");
            console.log(count);
            count++
            changeQuestion();
            
            console.log(count);
        }else{
            Timeleft= Timeleft - 10;
            console.log("wrong");
            count++
            changeQuestion();
            
        }
    }




function changeQuestion(){
    if(count>questionList.length){
        console.log("end");
    }else{
        question.textContent= questionList[count];
        answer1.textContent=answerList[count][0];
        answer2.textContent=answerList[count][1];
        answer3.textContent=answerList[count][2];
        answer4.textContent=answerList[count][3]; 
    }
}



function clickStart(event){
    startButton.parentNode.removeChild(startButton);
    setTime();
    startquiz();
}


startButton.addEventListener("click", clickStart);



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
    // score1.textContent="Score " + score2;
    container.addEventListener("click", question1);
}




