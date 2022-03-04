
//Blur du body au passage de la souris sur "work" :
let buttonWork = document.querySelector(".work-anim");

//la souris sur 'work' tout est flou:
buttonWork.addEventListener("mouseover", function() {
    document.querySelector(".blur").style.filter = "blur(10px)";
    document.querySelector(".header-title").style.filter = "blur(10px)";
    document.querySelector(".work-anim").style.filter = "none";
})
//la souris en-dehors de 'work', tout est net:
buttonWork.addEventListener("mouseout", function() {
    document.querySelector(".blur").style.filter = "none";
    document.querySelector(".header-title").style.filter = "none";
})
//garder le bouton "work" net avec le fond flouté:






//Création du fade au scroll :
const items = document.querySelectorAll('.appear2');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview2'); 
        }else{
            entry.target.classList.remove('inview2'); 
        }
    });
}

const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }

