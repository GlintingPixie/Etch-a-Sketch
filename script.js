container = document.querySelector(".container");
let gridSize = 16;

button = document.querySelector("button");
button.addEventListener('click',()=>{
    let userInput = Number(prompt("Please enter the number of boxes per row"));

    // To remove the existing grid if present
    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }

    userInput = (userInput>100) ? 100: userInput;
    makeGrid(userInput);
});

function makeGrid(gridSize)
{
    for(let i = 0;i < gridSize*gridSize;i++)
        {
            const newDiv = document.createElement('div');
            newDiv.classList.add("grid-box");

            // To ensure that each of the div is square in shape
            newDiv.style.minWidth = `calc(100% / ${gridSize})`;

            container.appendChild(newDiv);
        }
    
    visited = document.querySelectorAll('.grid-box');

    visited.forEach((box)=>{
        box.addEventListener("mouseover",(event) => {
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            event.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')' ;
        });
    });
}

makeGrid(gridSize);







