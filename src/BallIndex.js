    class BallIndex {
        constructor(listBallObj) {
            this.listBallObj = listBallObj;
        }
    
       static renderBalls = (ball) => {
        let ballName = document.createElement("h3")
        ballName.innerText = ball.name

        let creatorName = document.createElement("h3")
        creatorName.innerText = ball.creator.name

        let useBtn = document.createElement('button')
        useBtn.setAttribute('class', 'use-ball-btn')
        useBtn.setAttribute('id', ball.id)
        useBtn.innerText = "Select This Ball"
        // ADD EVENT LISTENER ON THIS BUTTON

        let divCard = document.createElement("div")
        divCard.setAttribute('class', 'card')
        divCard.append(ballName, creatorName, useBtn)
        document.querySelector("#ball-collection").append(divCard)

        }
    }
   