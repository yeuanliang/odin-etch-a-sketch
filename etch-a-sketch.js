function createDiv(count=60){
    const container = document.querySelector(".container")
    const divCount = count*count
    for(let i=0;i<divCount;i++){
        const div = document.createElement("div")
        container.appendChild(div)
    }
}

createDiv()

function getRandomRGB(){
    const randomBetween = (min, max) => min + Math.floor(Math.random()*(max-min+1))
    const r = randomBetween(0,255)
    const g = randomBetween(0,255)
    const b = randomBetween(0,255)
    return `rgb(${r},${g},${b})`
}
let interactionCount=1
function generateSquares(){
    const count = prompt("Enter Number of Squares per Side: 1 - 100")
    if(!Number.isInteger(+count)||+count>100 || +count<1){
        alert("Invalid Input, Please Enter a Integer between 1 and 100")
        return
    }
    const container = document.querySelector(".container")
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    container.style.opacity = 0.1*interactionCount
    container.style.width = 16*count+"px"
    container.style.height= 16*count+"px"
    container.style["background-color"]=getRandomRGB()
    createDiv(count)
    if(interactionCount<10){
        interactionCount++
    }else{
        interactionCount=1
    }
}
