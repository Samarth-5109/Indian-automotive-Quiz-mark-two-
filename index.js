var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");
console.log("Welcome, " + userName + " to my quiz on Indian Automotive Scene  :-)");

var score = 0;

var quizQuestions = [

  questionOne = {
    question : `Which is the first car manufactured in India?
                a: Maruti 800
                b: Hindustan Ambassdor
                c: Tata Indica
                d: Premier Padmini`,

    answer :   "b"            
         
  },

   questionTwo = {
     question : `Which is the first most modern car by an Indian manufacturer?
                a: Maruti 800
                b: Hindustan Ambassdor
                c: Tata Indica
                d: Premier Padmini`,
     
     answer :  "c"

   },

   questionThree = {
     question : `Which is the most sold car in India?
                a: Maruti 800
                b: Maruti Alto
                c: Maruti Swift
                d: Maruti WagonR`,

     answer : "c"           
   } ,

   questionFour = {
     question : `Harrier is produced by which company?
                a: Maruti Suzuki
                b: Ford
                c: Mahindra
                d: Tata Motors`,
    
     answer : "d"
   }
]

var highScores = [
  scoreOne = {
    name : "Dakshesh",
    score :  "3"
  },

  scoreTwo = {
    name : "GTO",
    score : "4"
  },

  scoreThree = {
    name : "Piyush",
    score : "4"
  }

]


 function playQuiz(question, answer){
   userAnswer = readlineSync.question(question + "\n");

   if(userAnswer === answer){
     console.log("Right answer");
     score = score + 1;
     console.log("Current Score is: " + score);
   }else{
     console.log("Wrong Answer");
     console.log("Correct Answer is : " + answer);
   }
   console.log("---------------");
 }

 for(var i = 0; i < quizQuestions.length; i++){

   playQuiz(quizQuestions[i].question, quizQuestions[i].answer);

  }

console.log("Voila!, your final score is: " + score);
console.log("High Scores are as Follows: " );

for(var i = 0; i < highScores.length; i++){
  
  console.log(highScores[i].name + ":" + highScores[i].score);

}

console.log("----------------");
console.log("If you also have beaten the high score, send me a screenshot and I will update the list :-)");