

const displayNum = function(){
    let boards = document.getElementById("board")
    for (let i = 1; i < 77; i++){
        let newNumbers = document.createElement("div")
        newNumbers.classList.add("num")
        newNumbers.innerText = i
        boards.appendChild(newNumbers)
        
    }
}