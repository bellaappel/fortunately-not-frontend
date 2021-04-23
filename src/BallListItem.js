class BallListItem {
    constructor(obj) {
        this.name = obj.name
        this.id = obj.id
        this.creator = obj.creator
        this.pos = obj.pos
        this.neg = obj.neg
        this.vague = obj.vague
    }
    renderBallListItem() {
        const ballBag = document.querySelector("#ball-collection") 
        let ballName = document.createElement("h3")
        ballName.innerText = this.name

        let creatorName = document.createElement("h3")
        creatorName.innerText = this.creator.name

        let useBtn = document.createElement('button')
        useBtn.setAttribute('class', 'use-ball-btn')
        useBtn.setAttribute('id', this.id)
        useBtn.innerText = "Select This Ball"
        useBtn.addEventListener("click", function(e){
            playBallById(e.target.id)
        }, {once:true})
            

        let deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('class', 'delete-ball-button')
        deleteBtn.setAttribute('id', this.id)
        deleteBtn.innerText = "X"
        deleteBtn.addEventListener("click", function(e) {
            deleteBallById(e.target.id)

        }, {once:true})

        let divCard = document.createElement("div")
        divCard.setAttribute('class', 'card')
        divCard.append(ballName, creatorName, useBtn, deleteBtn)
        ballBag.append(divCard)
    }

}