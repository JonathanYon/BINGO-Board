window.onload = function(){
    displayNum()
}

const displayNum = function(){
    let boards = document.getElementById("board")
    for (let i = 1; i < 77; i++){
        let newNumbers = document.createElement("div")
        newNumbers.classList.add("num")
        newNumbers.innerText = i
        boards.appendChild(newNumbers)
        
    }
}

const startPlay = function(){
    let clickPlay = document.getElementsByTagName("button")
    
    
        let randomNumGenerator = Math.floor(Math.random() * 77) + 1
        console.log(randomNumGenerator)
        // console.log(typeof(clickPlay)) 
}


