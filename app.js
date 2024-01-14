let boxes = document.querySelectorAll(".box")
let msgBox= document.querySelector(".msgBox")
let msg = document.querySelectorAll(".msg")

let turn = true

let winningPattren = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 8, 7],
    [2, 5, 8],
    [1, 4, 7]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O"
            turn = false

        } else {
            box.innerText = "X"
            turn = true
        }
        box.disabled = true;
        checkWinner()

    })
});
const showmsg = (winner)=>{
    msgBox.innerText = (`the winner is "${winner}"`)
    msgBox.classList.remove("hide")
}

const checkWinner = () => {
    for (const pattren of winningPattren) {
        let posval0 = boxes[pattren[0]].innerText
        let posval1 = boxes[pattren[1]].innerText
        let posval2 = boxes[pattren[2]].innerText
        
        if(posval0 != "" && posval1 != "" && posval2 != ""){
            if(posval0 === posval1 && posval1 === posval2){
                console.log("winner "+ posval0)
                showmsg(posval0)
            }
        }    
    }
}
