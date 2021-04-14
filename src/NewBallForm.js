
    const addBtn = document.querySelector("#new-ball-btn");
    addBtn.addEventListener("click", createBallForm, {once: true});

   
    function createBallForm() {
        
       const container = document.getElementById("new-form-container");
       const form = document.createElement("div");
       
           form.innerHTML =`
            <form class= "add-ball-form">
                <h3>Create your own Magic8ball!</h3>
                <input type="text" name="author" value="" placeholder="Enter your name..." class="input-text" />
                <input type="text" name="name" value="" placeholder="Name of 8 ball..." class="input-text" />
                <br/>
                <p> Positive Answers:</p>
                <input type="text" name="ans1" value="" class="input-text" />
                <input type="text" name="ans2" value="" class="input-text" />
                <input type="text" name="ans3" value="" class="input-text" />
                <input type="text" name="ans4" value="" class="input-text" />
                <input type="text" name="ans5" value="" class="input-text" />
                <input type="text" name="ans6" value="" class="input-text" />
                <input type="text" name="ans7" value="" class="input-text" />
                <input type="text" name="ans8" value="" class="input-text" />
                <input type="text" name="ans9" value="" class="input-text" />
                <input type="text" name="ans10" value="" class="input-text" />
                <br/>
                <p>Negative Answers:</p>
                <input type="text" name="ans11" value="" class="input-text" />
                <input type="text" name="ans12" value="" class="input-text" />
                <input type="text" name="ans13" value="" class="input-text" />
                <input type="text" name="ans14" value="" class="input-text" />
                <input type="text" name="ans15" value="" class="input-text" />
                <br/>
                <p>Vague Answers:</p>
                <input type="text" name="ans16" value="" class="input-text" />
                <input type="text" name="ans17" value="" class="input-text" />
                <input type="text" name="ans18" value="" class="input-text" />
                <input type="text" name="ans19" value="" class="input-text" />
                <input type="text" name="ans20" value="" class="input-text" />
                <button id="create-ball-button">Create</button>
            </form>`;
        container.appendChild(form);
        
        const createBtn = document.getElementById("create-ball-button");
        createBtn.addEventListener("click", postBall => postBall.preventDefault(), {once:true});
        // build override default to not allow answer to be entered before all fields are completed 
    }
    
    

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
        let authorName = document.createElement("h2")
        authorName.innerText = author.name
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
                "author": ball_data.author.value,
                "ans1": ball_data.ans1.value,
                "ans2": ball_data.ans2.value,
                "ans3": ball_data.ans3.value,
                "ans4": ball_data.ans4.value,
                "ans5": ball_data.ans5.value,
                "ans6": ball_data.ans6.value,
                "ans7": ball_data.ans7.value,
                "ans8": ball_data.ans8.value,
                "ans9": ball_data.ans9.value,
                "ans10": ball_data.ans10.value,
                "ans11": ball_data.ans11.value,
                "ans12": ball_data.ans12.value,
                "ans13": ball_data.ans13.value,
                "ans14": ball_data.ans14.value,
                "ans15": ball_data.ans15.value,
                "ans16": ball_data.ans16.value,
                "ans17": ball_data.ans17.value,
                "ans18": ball_data.ans18.value,
                "ans19": ball_data.ans19.value,
                "ans20": ball_data.ans20.value
            })
        })
        .then(res => res.json())
        .then(obj_ball => renderBalls(obj_ball))
    };

   
    
// invoke method in constructor and also set this.formRendered to true then when button is added to close or submit to change boolean to false and display status at form button to hide if form is show is true 
