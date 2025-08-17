
const items=document.querySelectorAll(".question-item")

items.forEach((item)=>{

const icon=item.querySelector(".icon");
const content=item.querySelector(".question-content");
const header=item.querySelector(".question-header");

header.addEventListener("click", ()=>{
    let isActive=content.classList.toggle("active");
    if(isActive){
        icon.innerHTML="-";
    }
    else{
        icon.innerHTML="+";

    }
});


});

