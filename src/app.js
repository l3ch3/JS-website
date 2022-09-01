document.addEventListener('DOMContentLoaded', () => {

    const collabSkill = document.querySelector(".collab-hover") //grab the grid element from HTML
    const commSkill = document.querySelector(".comm-hover")
    const proactiveSkill = document.querySelector (".proactive-hover")
    const innoSkill = document.querySelector (".inno-hover")
    const agileSkill = document.querySelector (".agile-hover")
    const rallySkill = document.querySelector (".rally-hover")
    const timeSkill = document.querySelector (".time-hover")
    const tbcSkill = document.querySelector (".tcb-hover")

    
    const experienceBox = document.querySelector(".experience-box p") 
   

   function commExperienceBox(){
      experienceBox.innerHTML = "this is the comms  box, I need to add styling from CSS this is the comms  box, I need to add styling from CSS this is the comms  box, I need to add styling from CSS  "
     }
   function collabExperienceBox(){
      experienceBox.innerHTML = "Collab"
     }
   function proactiveExperienceBox(){
      experienceBox.innerHTML = "proactive"
     }
   function innoExperienceBox(){
      experienceBox.innerHTML = "Innovative"
     }
   function agileExperienceBox(){
      experienceBox.innerHTML = "Agile"
     }
   function rallyExperienceBox(){
      experienceBox.innerHTML = "Rally"
     }
   function timeExperienceBox(){
      experienceBox.innerHTML = "Time"
     }
   function tbcExperienceBox(){
      experienceBox.innerHTML = "TCB"
     }

   
    
commSkill.addEventListener("mouseover",commExperienceBox)
collabSkill.addEventListener("mouseover",collabExperienceBox)
proactiveSkill.addEventListener("mouseover",proactiveExperienceBox)
innoSkill.addEventListener("mouseover",innoExperienceBox)
agileSkill.addEventListener("mouseover",agileExperienceBox)
rallySkill.addEventListener("mouseover",rallyExperienceBox)
timeSkill.addEventListener("mouseover",timeExperienceBox)
tbcSkill.addEventListener("mouseover",tbcExperienceBox)


const hamburgerButton = document.getElementById("hamburger")//grabs the ID from HTML, teh name in JS is the Const
const navList = document.getElementById("nav-list")


function toggleButton(){ //toggle - action to show list when the hamburger button is clicked
    navList.classList.toggle("show") // "show" is written in the CSS file
}

//attach toggle to hamburger button
//when the hamburger is clciks, call the toggleButton function 
hamburgerButton.addEventListener("click",toggleButton)

})