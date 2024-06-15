const ul = document.querySelector(".ul");
const hambugBtn = document.querySelector(".fa-bars");

hambugBtn.addEventListener("click", ()=>{
    if(hambugBtn.classList.contains("fa-bars")){
        hambugBtn.classList.remove("fa-bars");
        hambugBtn.classList.add("fa-angle-double-up");
    }
    else{
        hambugBtn.classList.remove("fa-angle-double-up");
        hambugBtn.classList.add("fa-bars");
    }
    ul.classList.toggle("links");
   
})