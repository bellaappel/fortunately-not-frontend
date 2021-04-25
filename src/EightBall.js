class EightBall{
  constructor() {
    this.answers = [["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely","You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes","Don't count on it", "My reply is no","My sources say no", "Outlook not so good","Very doubtful", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again"]] 
    this.eight = document.getElementById("eight");
    this.answer = document.getElementById("answer");
    this.eightball = document.getElementById("eight-ball");
    this.question = document.getElementById("question");
    this.eightball.addEventListener("click", () => {this.handleShake()})
  
  }

  readyEightBall(answersArray){
   this.answers = answersArray
   console.log(this.answers)
  }
  
 
  
  handleShake() {
    console.log("test")
    if (this.question.value.length < 1) {
      alert('Enter a valid question!');
    } else {
      this.eight.innerText = "";
      let num = Math.floor(Math.random() * Math.floor(this.answers.length));
      this.answer.innerText = this.answers[num];
    }
  }    
}
 
 


  
// refactor to class. then make a method for replacing answers with selected eightball 

