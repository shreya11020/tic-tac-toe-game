let boxes= document.querySelectorAll(".box");
//boxes becomes a static node list representing a collection of elements
let resetBtn = document.querySelector("#reset-btn");
//resetButton variable will contain a reference to the HTML element with the ID reset-btn.
let turn0= true;

let newGameBtn= document.querySelector("#new-btn");//variables
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

//A 2d arrays of patterns
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];
//arrow functions
const resetGame = () => {
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if (turn0){
            box.innerText = "X";
            turn0=false;
        }
        else{
            box.innerText = "O";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
}
);

const gameDraw = () =>{
    msg.innerText= `Game was a draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showWinner = (winner) => {
    
    msg.innerText =  `Congralulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// arrow function in javascript : 
const checkWinner = () => {
    for(pattern of winPatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val !="" && pos3val !=""){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("winner" , pos1val );
                showWinner(pos1val);
                return true;
            }
        }
            
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


