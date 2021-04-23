
    
function renderBalls(balls) {
    const ballBag = document.querySelector("#ball-collection") 
    ballBag.innerHTML = ``
    balls.forEach(ball => {
        b = new BallListItem(ball)
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

function playBallById(id){
    fetch(`${BASEURL}/eightballs/${id}`)
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    }
