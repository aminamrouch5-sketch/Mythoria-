const startmenu = document.getElementById('start-menu')
const darkside = `<img src="./">`
startmenu.addEventListener('click',e=>{
    e.preventDefault();
    let but = e.target.closest();
    if (but.getAttribute('id')=="start"){
        startmenu.style.display="none";
        

    }else{
        
    }

})















function getRandomInt(min, max) { // random number function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}








