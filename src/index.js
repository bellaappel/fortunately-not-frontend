const BASEURL = 'http://localhost:3000'

 function getBalls() {
    return fetch(`${BASEURL}/eightballs`)
    .then(resp => resp.json())
    .then(resp => BallIndex.renderBalls(resp))     
  };

   const allBtn = document.getElementById("all-balls");
    allBtn.addEventListener("click", getBalls, {once:true})
