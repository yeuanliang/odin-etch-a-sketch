const grid = document.querySelector(".container")

function init(){
    createGrid(80)
    setColor('black')
}

init()

function createGrid(count){
    const cellCount = count*count
    for(let i=0;i<cellCount;i++){
        const cell = document.createElement("div")
        cell.setAttribute("class", "cell")
        cell.style.width=960/count +"px"
        cell.style.height=cell.style.width
        grid.appendChild(cell)
    }
}

function setColor(color){
    let gridCells = document.querySelectorAll(".cell")
    for(let i=0; i<gridCells.length;i++){
        gridCells[i].addEventListener("mouseenter", function(){
            gridCells[i].style.backgroundColor=color
        })
    }
}

function clearGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
}

function reset(){
    clearGrid()
    init()
}

function newGrid(){
    let gridSize = prompt("Enter Number of Squares per Side: 1 - 100")
    if(!Number.isInteger(+gridSize)||+gridSize>100 || +gridSize<1){
        alert("Invalid Input, Please Enter a Integer between 1 and 100")
        return
    }
    clearGrid()
    createGrid(+gridSize)
    setColor('black')
}

function eraseCell(){
    let gridCells = document.querySelectorAll(".cell")
    for(let i=0; i<gridCells.length;i++){
        gridCells[i].addEventListener("mouseenter", function(){
            gridCells[i].style.backgroundColor=null
        })
    }
}

function getRandomRGB(){
    const randomBetween = (min, max) => min + Math.floor(Math.random()*(max-min+1))
    const r = randomBetween(0,255)
    const g = randomBetween(0,255)
    const b = randomBetween(0,255)
    return `rgb(${r},${g},${b})`
}

function setRandom(){
    const rgb = getRandomRGB()
    setColor(rgb)
}

function setShade(){
    let gridCells = document.querySelectorAll(".cell")
    for(let i=0; i<gridCells.length;i++){
        gridCells[i].addEventListener("mouseenter", function(){
            let j=0
            if(j<10){j++}
            gridCells[i].style.opacity= Number(gridCells[i].style.opacity)+0.1
        })
    }
}
