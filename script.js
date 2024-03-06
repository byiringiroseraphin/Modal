'use strict';
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const openModal =document.querySelectorAll('.show-modal');
const overLay = document.querySelector('.overlay');
console.log(openModal);

for(let i=0; i< openModal.length; i++){
    openModal[i].addEventListener('click', function(){
       // modal.classList.remove('hidden');
        modal.style.display='block';
        overLay.classList.remove('hidden');
    })
}
closeModal.addEventListener('click',function(){
    // modal.classList.add('hidden');
    modal.style.display='none';
    overLay.classList.add('hidden');
        
});
overLay.addEventListener('click',function(){
    // modal.classList.add('hidden');
    modal.style.display='none';
    overLay.classList.add('hidden'); 
});
document.addEventListener('keydown', function(ev){
    console.log(ev)
    if (ev.key==="Escape"){
        // modal.classList.add('hidden');
    modal.style.display='none';
    overLay.classList.add('hidden');
    }
})

