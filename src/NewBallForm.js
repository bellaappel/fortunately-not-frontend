
// const addBtn = document.querySelector("#new-ball-btn");
// addBtn.addEventListener("click", createBallForm)
   
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
                <button id="button">Create</button>
            </form>`;
        container.appendChild(form);
   }

    
// invoke method in constructor and also set this.formRendered to true then when button is added to close or submit to change boolean to false and display status at form button to hide if form is show is true 
