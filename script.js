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

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

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
    
    // Since we have many divs inside the container, it would be more efficient to make the eventListener attached to the container, event bubblind will ensure that event reaches the container as well.
    
    container.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("grid-box")) {
            event.target.style.backgroundColor = generateRandomColor();
        }
    });
}

makeGrid(gridSize);







