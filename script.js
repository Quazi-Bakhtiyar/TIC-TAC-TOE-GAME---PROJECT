boxes = document.querySelectorAll(".btn")
const winnerMessage = document.getElementById("win");
turnO = true;

board = ["","","","","","","","","",];

boxes.forEach((box,index)=>{
    console.log(box)
    box.addEventListener("click",()=>{
        
        console.log(box , "is pressed ")
        if(turnO){
            box.textContent = "x"
            turnO =false;
        }
        else{
            box.textContent="y"
            turnO=true
        }
        
        board[index] = box.textContent
        
        checkWin(box)
        box.disabled = true
        
    })
})

winning_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


function checkWin(box){
    
    for(let pattern of winning_patterns){
        console.log(pattern[0],pattern[1],pattern[2])
        if(board[pattern[0]]!="" && board[pattern[0]]==board[pattern[1]] && board[pattern[1]]==board[pattern[2]]){
            console.log(box.textContent,"win")
            showWinner(box.textContent)
        }
    }
    
}

function showWinner(winner){
    winnerMessage.innerText = `${winner} win`
    winnerMessage.classList.remove("hide")
    
}