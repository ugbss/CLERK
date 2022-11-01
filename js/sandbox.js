const menuBtn = document.querySelector('.menu__btn');
const hamburger = document.querySelector('.menu__btn__burger');
const navMenu =  document.querySelector('.nav__menu')
const modalBtn = document.querySelector('.get-modal-btn')
const toggleBtn = document.querySelector('.btn-toggle')
const closeBtn = document.querySelector('.close-btn')
const toggleBt = document.querySelector('.btn-toggl')
const closeBt = document.querySelector('.close-bt')
const modalBt = document.querySelector('.get-modal-bt')



function toggleMenu(){
    hamburger.classList.toggle('open')
    navMenu.classList.toggle('show-menu')
 
}
menuBtn.addEventListener('click', toggleMenu)


if(toggleBtn){
    toggleBtn.addEventListener('click', () => {
        modalBtn.classList.add('active-modal')
    })
  
}


if(closeBtn){
    closeBtn.addEventListener('click', () => {
            modalBtn.classList.remove('active-modal')
        })
        
}


if(toggleBt){
    toggleBt.addEventListener('click', () => {
        modalBt.classList.add('active-modal')
    })
  
}


if(closeBt){
    closeBt.addEventListener('click', () => {
            modalBt.classList.remove('active-modal')
        })
        
}




// function openBtn(){
//     if (modalBtn.classList.contains('active-modal')){
//     modalBtn.classList.remove('active-modal')
// }
// else{
//     modalBtn.classList.add('active-modal')
// }

// }


// toggleBtn.addEventListener('click', openBtn)



// function toggleModal(){
//     let active = false
// if (!active){
//     modalBtn.classList.add('active-modal')
//     active = true
// }
// else {
//     modalBtn.classList.remove('active-modal')
//     active = false
// }
// }
// toggleBtn.addEventListener('click', toggleModal)





// let showMe= false;

// function toggleMenu(){
// if (!showMe){
//     hamburger.classList.add('open')
//     showMe=true;
// }
// else
// {
//     hamburger.classList.remove('open')
//     // showMe=false;
// }
// }
// let showMe= false;

// function toggleMenu(){
// if (hamburger.classList.contains('open')){
//     hamburger.classList.remove('open')
  
// }
// else
// {
//     hamburger.classList.add('open')
//     // showMe=false;
// }
// }
