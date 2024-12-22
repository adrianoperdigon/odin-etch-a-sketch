const containerEl = document.querySelector("#container");

function createGrid(squareAmount){

    for (let i = 1; i < squareAmount; i++) {

        //create a row to store the squares
        const rowEl = document.createElement("div")
        rowEl.classList.add("easRow");
        rowEl.id = (`easRow${i}`)
        containerEl.appendChild(rowEl)

        //create the elements inside the row
        for (let j = 1; j < squareAmount; j++) {
            const divEl = document.createElement("div");
            divEl.classList.add("easSquare")
            divEl.id = (`easSquare${j}`)
            rowEl.appendChild(divEl)
        }
    }
}
createGrid(48)

    const asignListeners = ()=>{
    const easSquares = document.querySelectorAll(".easSquare");
    easSquares.forEach(square => {
        square.addEventListener("mouseleave",()=>{
            square.style.backgroundColor = "black"
               // Incrementar la opacidad
               let currentOpacity = parseFloat(square.style.opacity) || 0; // Si no está definido, usar 0
               square.style.opacity = Math.min(currentOpacity + 0.1, 1); // Limitar la opacidad a 1
    })

    })}
    asignListeners()

const clearFuncionality = ()=>{
    containerEl.replaceChildren()
}

const resizeBtn = document.querySelector("#resize")
resizeBtn.addEventListener("click",()=>{
    clearFuncionality()
    let gridSize = prompt("Size?")
    if(gridSize > 64){
        let gridSize = prompt("Choose a number less than 100")
    }
    createGrid(gridSize)
    asignListeners()
})