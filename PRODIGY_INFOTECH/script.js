const MenuOpenbtn = document.querySelector('#menu-open-button');
const MenuClosebtn = document.querySelector('#menu-close-button');


MenuOpenbtn.addEventListener('click', ()=>{
    document.body.classList.add("mobile-menu");
});
MenuClosebtn.addEventListener('click', ()=>{
    document.body.classList.remove("mobile-menu");
});