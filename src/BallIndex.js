
    
      function renderBalls(balls) {
        const ballBag = document.querySelector("#ball-collection") 
        ballBag.innerHTML = ``
        balls.forEach(ball => {
            
            let ballName = document.createElement("h3")
            ballName.innerText = ball.name

            let creatorName = document.createElement("h3")
            creatorName.innerText = ball.creator.name

            let useBtn = document.createElement('button')
            useBtn.setAttribute('class', 'use-ball-btn')
            useBtn.setAttribute('id', ball.id)
            useBtn.innerText = "Select This Ball"
            useBtn.addEventListener("click", playBall, {once:true})
            // ADD EVENT LISTENER ON THIS BUTTON  

            let deleteBtn = document.createElement('button')
            deleteBtn.setAttribute('class', 'delete-ball-button')
            deleteBtn.setAttribute('id', ball.id)
            deleteBtn.innerText = "X"
            deleteBtn.addEventListener("click", function(e) {
                deleteBallById(e.target.id)

            }, {once:true})

            let divCard = document.createElement("div")
            divCard.setAttribute('class', 'card')
            divCard.append(ballName, creatorName, useBtn, deleteBtn)
            ballBag.append(divCard)
        });
    }
        
    function deleteBallById(id){
        fetch(`http://localhost:3000/eightballs/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(resp => renderBalls(resp)) 
    }

    function playBall(){

    }
  