import { GenerateCards,getRandomInt} from './cards.js'
import { monsters } from '../../data.js';
import {spells} from '../../data.js';
import { AddCarte,BotAddCarte  } from './game.js';
const body          = document.querySelector('body')
const startmenu     = document.querySelector('#start-menu')
const main          = document.querySelector('main')
const game          = document.querySelector('#game')
const dragcon       = document.querySelector('#drag-con')
const p1            = document.querySelector('#p1 img')
const p2            = document.querySelector('#p2 img')
const currentCards  = []
const mycards       = JSON.parse(localStorage.getItem('myCards')) || []
const favcards      = JSON.parse(localStorage.getItem('favoriteCards')) || []
const botcards      = []
const playerone     = document.querySelector('#player1')
const playertwo     = document.querySelector('#player2')
const playerside    = document.querySelectorAll('#player1 li')
const bootside      = document.querySelectorAll('#player2 li')
const playercards   = document.querySelector('#p1-cards')
const playerAttack  = [null,null,null,null,null]
const playerDefence = [null,null,null,null,null]
const botAttack     = [null,null,null,null,null]
const botDiffence   = [null,null,null,null,null]
const p1Cards       = document.querySelectorAll(".p1-cards")
const dragp1        = document.querySelector('#drag-p1')
game.style.display = "none";
startmenu.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!e.target.closest('button')) return;
    let but = e.target.closest('button')
    if (but.getAttribute('id')=="start"){
        startmenu.style.display="none";
        let choosemenu = document.createElement('div');
        let pick = getRandomInt(1,2)
        localStorage.setItem('side',JSON.stringify(pick))
        if(pick==1){
        choosemenu.innerHTML=`
        <div class="flex flex-col random text-center items-center gap-10" style="border:solid black;padding:20px;background: rgba(213, 187, 187, 0.29);border-style:hidden;border-radius:20px" id="side-m">
            <div class="flex flex-col gap-10">
                <p> HERE WE GO</p>
                <div class="flex justify-between gap-40">
                    <div class="flex flex-col gap-5">
                    <span> Him</span>
                    <img src="./assests/Eye.jpg" style="width: 150px;height: 250px;">
                    <span> LIGHT SIDE </span> 
                    </div>
                    <div class="flex flex-col gap-5">
                    <span> You</span>
                    <img src="./assests/Elegant Fantasy Playing Card Background with Magic Border Design.jpg" style="width: 150px;height: 250px;" id="drag-p1">
                    <span> DARK SIDE </span>
                    </div>

                </div>
            </div>
            <button style="border:solid white;background-color:rgba(50, 29, 29, 0.47)" id="side-start"> start </button>
            
       </div>`
        p1.src=`./assests/darkside.png`
        p2.src=`./assests/lightside.png`

    }
       else if(pick==2){
        choosemenu.innerHTML=`
        <div class="flex flex-col random text-center items-center gap-10" style="border:solid black;padding:20px;background: rgba(213, 187, 187, 0.29);border-style:hidden;border-radius:20px" id="side-m">
            <div class="flex flex-col gap-10 ">
                <p> HERE WE GO</p>
                <div class="flex justify-between gap-40">
                    <div>
                    <span> Him</span>
                    <img src="./assests/Elegant Fantasy Playing Card Background with Magic Border Design.jpg" style="width: 150px;height: 250px;">
                    <span> DARK SIDE </span> 
                    </div>
                    <div>
                    <span> You</span>
                    <img src="./assests/Eye.jpg" style="width: 150px;height: 250px;" id="drag-p1">
                    <span> LIGHT SIDE </span>
                    </div>
                </div>
            </div>
            <button style="border:solid white;background-color:rgba(50, 29, 29, 0.47)" id="side-start"> start </button>
            
       </div>`

        p1.src=`./assests/lightside.png`
        p2.src=`./assests/darkside.png`
       }
        main.appendChild(choosemenu)
        const sidemenu = document.getElementById('side-m')
        sidemenu.addEventListener('click',(e)=>{
            e.preventDefault()
            const but = document.querySelector("#side-start")
            if(!but) return;
            but.addEventListener('click', (e)=>{
                sidemenu.remove()
                game.style.display="";
                // player generate card


            if(favcards.length<5){
                if(mycards.length<5){
                    alert("sorry you need more then 5 cards")
                    }
                else{
                    GenerateCards(mycards,currentCards,5)
                    }
                }
                else{
                    GenerateCards(favcards,currentCards,5)
                }
                
                GenerateCards(monsters,botcards,5)
                currentCards.forEach((element)=>{
                    let li = document.createElement('li')
                    li.innerHTML = `<li>
                                        <img src="../.${element.img}" id="card-${element.id}" class="p1-cards">
                                    </li>`
                    console.log(li)
                    playerone.appendChild(li)
                })
                botcards.forEach((element)=>{
                    let li = document.createElement('li')
                    li.innerHTML = `<li>
                                        <img src="../.${element.img}" id="card-${element.id}" class="bot-cards"
                                    </li>`
                                    console.log(li)
                    playertwo.appendChild(li)
                })
                console.log(currentCards,botcards)
            })
           


        }
    )
       }

    }
)

playerone.addEventListener('click',(e)=>{
    AddCarte(e,playerAttack,playerDefence,monsters,body)
    BotAddCarte(botAttack,botDiffence,monsters,getRandomInt)
    
})
dragp1.addEventListener('click',(e)=>{
    if(currentCards.length>=5){
        return
    }
    
})























