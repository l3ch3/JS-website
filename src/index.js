const hamburgerButton = document.getElementById("hamburger")//grabs the ID from HTML, teh name in JS is the Const
const navList = document.getElementById("nav-list")


function toggleButton(){ //toggle - action to show list when the hamburger button is clicked
    navList.classList.toggle("show") // "show" is written in the CSS file
}

//attach toggle to hamburger button
//when the hamburger is clciks, call the toggleButton function 
hamburgerButton.addEventListener("click",toggleButton)


