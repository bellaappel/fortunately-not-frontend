  function renderBalls(ball){
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

      const allBtn = document.getElementById("all-balls");
        allBtn.addEventListener("click", getBalls, {once:true})

    function getBalls(){
        return fetch(`${BASEURL}/eightballs`)
            .then(resp => resp.json())
            .then(balls => {
            balls.forEach(function(ball) {
            renderBalls(ball)
            });
        });
    }