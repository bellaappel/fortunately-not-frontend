const BASEURL = 'http://localhost:3000'

function getBalls(eb) {
  return fetch(`${BASEURL}/eightballs`)
  .then(resp => resp.json())
  .then(resp => renderBalls(resp, eb))     
};

const allBtn = document.getElementById("all-balls");
allBtn.addEventListener("click", () => getBalls(eb), {once:true})

const eb = new EightBall()



    
function renderBalls(balls, eb) {
    const ballBag = document.querySelector("#ball-collection") 
    ballBag.innerHTML = ``
    balls.forEach((ball, eb) => {
        b = new BallListItem(ball, eb)
        b.renderBallListItem()
    })

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

