var timer = document.getElementById("time");
// var main = document.getElementById("main");
var Timeleft=100;
var question= document.getElementById('question1');
var answer1= document.getElementById('answer1');
var answer2= document.getElementById('answer2');
var answer3= document.getElementById('answer3');
var answer4= document.getElementById('answer4');
var startButton = document.querySelector("#startbtn");
var container = document.querySelector(".container");
var score1= document.getElementById('score');
var score2= 0;



var questionList=["1+1","2+2","3+3"];
var answerList=[[2,4,5,6],
            [1,3,4,8],
            [3,6,5,10]];

var correctList=[0,2,1];
// container.addEventListener("click", function(event){
//     var element = event.target;
//     console.log(element);
//     if(element.matches("#answer4")){
//         console.log("matches");
//         question2();
//     }
//     else{
//         console.log("wrong");
//         question2();
//     }
// })



function setTime(){
    var timerInterval = setInterval(function(){
        Timeleft--;
        timer.textContent = "Time: " + Timeleft;

        if(Timeleft === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
}



// var question= document.getElementById('question1');
// var answer1= document.getElementById('answer1');
// var answer2= document.getElementById('answer2');
// var answer3= document.getElementById('answer3');
// var answer4= document.getElementById('answer4');
// var startButton = document.querySelector("#startbtn");


function question1(event){
    // question.textContent= questionList[0];
    // answer1.textContent=answerList[0][0];
    // answer2.textContent=answerList[0][1];
    // answer3.textContent=answerList[0][2];
    // answer4.textContent=answerList[0][3];
    var element = event.target;
    console.log(element);
    if(element.matches(".box"))   
        howard = element.getAttribute("data-number");
        console.log(howard);
        if(howard==correctList[0]){
            console.log("cool");
            question2();
        }else{
            
        }
      
}

function question2(){
    question.textContent="Question 2";
    answer1.textContent="goodbye";
    answer2.textContent="goodbye";
    answer3.textContent="goodbye";
    answer4.textContent="goodbye";
}

function clickStart(event){
    startButton.parentNode.removeChild(startButton);
    event.stopPropagation();
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
    console.log("you clicked me");
    score1.textContent="Score " + score2;
    setTime();
    container.addEventListener("click", question1);

}


// function question01(event){
    
//     var element = event.target;


//     console.log(element);
//         if(element.matches('data-number=answerList[correctList[0]]')){
//         console.log("matches");
//         score2++;
//         score1.textContent="Score " + score2;
//         event.stopPropagation();
//         question2();
//         }
//          else{
//         console.log("wrong");
//         event.stopPropagation();
//         question2();
        
//         }
       
// }








startButton.addEventListener("click", clickStart);







