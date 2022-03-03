/*function backgroundBlur(filter) {
    document.body.style.background = filter; 
}

document.getElementsByClassName('work-anim').addEventListener('mouseover', function() {
    backgroundBlur(`filter=blur(${10}px)`);
})*/


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