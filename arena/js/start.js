const startmenu = document.querySelector('#start-menu')
const darkside = `<img src="./">`
const main = document.querySelector('main')
startmenu.addEventListener('click',(e)=>{
    e.preventDefault();
    let but = e.target.closest('button');
    if (but.getAttribute('id')=="start"){
        startmenu.style.display="none";
        let choosemenu = document.createElement('div');
        choosemenu.innerHTML=`
        <div class="random text-center items-center">
            <p> HERE WE GO</p>
            <div class="flex justify-between gap-40">
                <div>
                <span> Him</span>
                <img src="./assests/Eye.jpg" style="width: 150px;height: 250px;"> 
            </div>
            <div>
                <span> You</span>
                <img src="./assests/Elegant Fantasy Playing Card Background with Magic Border Design.jpg" style="width: 150px;height: 250px;">
            </div>
       </div>`
        main.appendChild(choosemenu)
       }

    }
)















function getRandomInt(min, max) { // random number function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}








