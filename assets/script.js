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

var questionList=["1+1","What is my name?","3+3"];
var answerList=[[2,4,5,6],
                ["howard","jackie","Howard","Jackie"],
                [3,6,5,10]];
var correctList=[0,2,1];

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
            console.log("wrong");
            count++
            changeQuestion();
            
        }
    //         console.log("nice");
    //         question.textContent= questionList[i];
    //         answer1.textContent=answerList[i][0];
    //         answer2.textContent=answerList[i][1];
    //         answer3.textContent=answerList[i][2];
    //         answer4.textContent=answerList[i][3];
    //         i++;
    //     }else{
    //         console.log("wrong")
    //         question.textContent= questionList[i];
    //         answer1.textContent=answerList[i][0];
    //         answer2.textContent=answerList[i][1];
    //         answer3.textContent=answerList[i][2];
    //         answer4.textContent=answerList[i][3];
    //         i++;
    //     }
    }


    // if(element.matches(".box") )   
    //     clickBtn = element.getAttribute("data-number");
    //     console.log(element);
    //     console.log(clickBtn);
    //     if(event.target.getAttribute("data-number")==correctList[0]){
    //         console.log("cool");
    //         changeQuestion();
    //         // container.addEventListener("click",question2);
    //     }else{  Timeleft--;
    //         console.log("wrong");
    //         changeQuestion();
    //         // container.addEventListener("click",question2);
    //     }   



function changeQuestion(){
    // question.textContent= questionList[1];
    // answer1.textContent=answerList[1][0];
    // answer2.textContent=answerList[1][1];
    // answer3.textContent=answerList[1][2];
    // answer4.textContent=answerList[1][3];
    question.textContent= questionList[count];
   answer1.textContent=answerList[count][0];
   answer2.textContent=answerList[count][1];
   answer3.textContent=answerList[count][2];
   answer4.textContent=answerList[count][3];
    
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




// event.stopPropagation();

//   container.addEventListener("click", function(){
//         for(i=0, i < questionList.length, i++) {
//             question.textContent= questionList[i];
//             answer1.textContent=answerList[i][0];
//             answer2.textContent=answerList[i][1];
//             answer3.textContent=answerList[i][2];
//             answer4.textContent=answerList[i][3];
//             var element = event.target;
//             howard = element.getAttribute("data-number");
//             console.log(howard)
//             console.log(element)


//__________________________________________________________________________________
// function question2(event){
//     question.textContent= questionList[1];
//     answer1.textContent=answerList[1][0];
//     answer2.textContent=answerList[1][1];
//     answer3.textContent=answerList[1][2];
//     answer4.textContent=answerList[1][3];
//     var element = event.target;
//     if(element.matches(".box"))   
//         clickBtn = element.getAttribute("data-number");
//         console.log(clickBtn);
//         if(clickBtn==correctList[1]){
//             console.log("nice"); 
//             // container.addEventListener("click", question3(event));    
//         }
// }


// function question3(event){
//     question.textContent= questionList[2];
//     answer1.textContent=answerList[2][0];
//     answer2.textContent=answerList[2][1];
//     answer3.textContent=answerList[2][2];
//     answer4.textContent=answerList[2][3];
//     var element = event.target;
//     console.log(element);
//     if(element.matches(".box"))   
//         howard = element.getAttribute("data-number");
//         console.log(howard);
//         if(howard==correctList[2]){
//             console.log("nice");     
//         }
// }