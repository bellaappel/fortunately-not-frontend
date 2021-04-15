
    const addBtn = document.querySelector("#new-ball-btn");
    addBtn.addEventListener("click", createBallForm, {once: true});

   
    function createBallForm() {
        
       const container = document.getElementById("new-form-container");
       const form = document.createElement("div");
       
           form.innerHTML =`
            <form id="form" class= "add-ball-form">
                <h3>Create your own Magic8ball!</h3>
                <input type="text" name="creator" value="" placeholder="Enter your name..." class="input-text" />
                <input type="text" name="name" value="" placeholder="Name of 8 ball..." class="input-text" />
                <br/>
                <p> Positive Answers:</p>
                <input type="text" name="ans1" value="" class="input-text" />
                <input type="text" name="ans2" value="" class="input-text" />
                <input type="text" name="ans3" value="" class="input-text" />
                
                <br/>
                <p>Negative Answers:</p>
                <input type="text" name="ans4" value="" class="input-text" />
                <input type="text" name="ans5" value="" class="input-text" />
                <input type="text" name="ans6" value="" class="input-text" />
        
                <br/>
                <p>Vague Answers:</p>
                <input type="text" name="ans7" value="" class="input-text" />
                <input type="text" name="ans8" value="" class="input-text" />
                <input type="text" name="ans9" value="" class="input-text" />
                <button type="submit" id="create-ball-button">Create</button>
            </form>`;
        container.appendChild(form)

        
        
        const createBtn = document.getElementById("create-ball-button");
        createBtn.addEventListener("click", function(e) {
            e.preventDefault()
            const ballForm = document.getElementById("form")
            postBall(ballForm)
        })
    }
        
        
        // {once:true});
        // build override default to not allow answer to be entered before all fields are completed 
    
    
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
    
    
    function renderBalls(ball){
        let ballName = document.createElement("h2")
        ballName.innerText = ball.name

        let creatorName = document.createElement("h2")
        creatorName.innerText = ball.creator_name

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
    
    function postBall(ball_data){
        fetch(`${BASEURL}/eightballs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },
            body: JSON.stringify({
                "name": ball_data.name.value,
                "creator_name": ball_data.creator.value,
                "pos": [ball_data.ans1.value, ball_data.ans2.value, ball_data.ans3.value],
                "neg": [ball_data.ans4.value, ball_data.ans5.value, ball_data.ans6.value],
                "vague": [ball_data.ans7.value, ball_data.ans8.value, ball_data.ans9.value]
            })
        })
        .then(res => res.json())
        .then(obj_ball => console.log(obj_ball))
    };
    
   
    
// invoke method in constructor and also set this.formRendered to true then when button is added to close or submit to change boolean to false and display status at form button to hide if form is show is true
