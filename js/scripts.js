const albutton = document.querySelector("#alert");


function buttonPressed ()
{
    
    alert("Button Pressed");
    document.body.classList.toggle("pinkBG");
    

}
albutton.addEventListener("click",buttonPressed, {once:true});



function changeText(event)
{
    console.log(event)
    if (albutton.textContent == "Click Me!") 
    {
        albutton.textContent = "CLICKED!"
    }
    else
    {   
        albutton.addEventListener("click",buttonPressed, {once:true});
        albutton.textContent = "Click Me!";
    }
}




albutton.addEventListener("click", changeText);


const buttonContainer = document.querySelector(".button-container")

function changeBGGREEN(event)
{
    console.log(event.target)
    if (event.target.tagName == "BUTTON")
    {
        event.target.classList.toggle("greenBG")
    }

}

function changeTextcolor(event)
{
    if (event.target.textContent == "Red")
    {
        event.target.classList.toggle("redText")
    }
    else if (event.target.textContent == "Blue")
    {
        event.target.classList.toggle("blueText")
    }
    else if (event.target.textContent == "White")
    {
        event.target.classList.toggle("whiteText")
    }
    else if (event.target.textContent == "Yellow")
    {
        event.target.classList.toggle("yellowText")
    }
    else if (event.target.textContent == "Purple")
    {
        event.target.classList.toggle == ("purpleText")
    }
    
}

buttonContainer.addEventListener("click", changeBGGREEN);
buttonContainer.addEventListener("click", changeTextcolor);


function createPara ()
{
    
    const newPara = document.createElement("p");
    document.body.appendChild(newPara);
    newPara.textContent = "New para"

    const newButton = document.createElement("button");
    buttonContainer.appendChild(newButton)
    newButton.textContent = "Purple"


}

albutton.addEventListener("click",createPara)