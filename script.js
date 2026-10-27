import { monsters } from './data.js';
import {spells} from './data.js';
import { boosterpacks } from './data.js';
const body = document.querySelector('body')
const boostermenu = document.querySelector('#booster') // from booster page
const basket = document.querySelector('#umenu') // from basket page
const deleteButton = document.querySelectorAll('.delete')
let totalpurashed = 0
const tickets = document.querySelector('#ticket-vendu')
const myCards = JSON.parse(localStorage.getItem("myCards")) || []
const statusCards = {
            "bronze":0,
            "epic":0,
            "legendary":0,
            "spells":0
}

function createPackRes(res){
                let temp = document.createElement('div')
                temp.innerHTML=`<div class="font-['Cinzel_Decorative'] text-3xl fixed flex flex-col  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-[500px] h-[500px] text-center items-center justify-between" style="background: rgba(95, 108, 77, 0.682)">
                                 <span>Congralutions</span>
                                 <img src="${res.img}">
                                 <p> you got a ${res.isLegendary} pack !!! </p>
                                 <div class="flex text-lg">
                                 <span>Attack   : ${res.Properties.attack}</li>
                                 <span>Deffence : ${res.Properties.def}</li>
                                 </div>
                                <button class="exit"> PICK </button>
                                 </div>`
                body.appendChild(temp)
                temp.addEventListener('click',(e)=>{
                        e.preventDefault()
                        let bt = e.target.closest('button')
                        if(bt.getAttribute('class')=="exit"){
                            temp.remove()
                            totalpurashed--

                        }
                }
            ) }
function spellPack(res){
                let temp = document.createElement('div')
                temp.innerHTML=`<div class="font-['Cinzel_Decorative'] text-3xl fixed flex flex-col  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-[500px] h-[500px] text-center items-center justify-between" style="background: rgba(95, 108, 77, 0.682)">
                                 <span>Congralutions</span>
                                 <img src="${res.img}">
                                 <p> you got a spells pack !!! </p>
                                 <div class="flex text-lg">
                                 <span>Name   : ${res.name}</li>
                                 </div>
                                <button class="exit"> PICK </button>
                                 </div>`
                body.appendChild(temp)
                temp.addEventListener('click',(e)=>{
                        e.preventDefault()
                        let bt = e.target.closest('button')
                        if(bt.getAttribute('class')=="exit"){
                            temp.remove()
                            totalpurashed--
                        }
                }
            )
}
function RemovePack(menu){
            menu.remove()
            
}
function CounterCards(arr,arr2){
    arr.forEach(element => {
        if ( element.isLegendary=="bronze"){
            statusCards.bronze++
        }else if(element.isLegendary=="epic"){
            statusCards.epic++
        }else if (element.isLegendary=="legendary"){
            statusCards.legendary++
        }
    })
    arr2.forEach(element => {
        statusCards.spells++
    })
}
CounterCards(monsters,spells)

function getRandomInt(min, max) { // random number function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}









let bronzecards = []
let epiccards = []
let legendarycards = []
let spellcards = []
let pusshedPacks = []

monsters.forEach(element => {
    if (element.isLegendary=="bronze"){
        bronzecards.push(element)
    }
    else if(element.isLegendary=="epic"){
        epiccards.push(element)
    }
    else if(element.isLegendary=="legendary"){
        legendarycards.push(element)
    }
    
    })
spells.forEach(element => {
    spellcards.push(element)
})        











boostermenu.addEventListener('click',(e)=>{                    // AJOUTE UN BOUSTER SCRIPT 
    e.preventDefault()
    e.stopPropagation()
    let but=e.target.closest("button").getAttribute('id')
    
    if( but=="bronze"){
        let il = document.createElement('li')
        il.innerHTML = `<li class="flex flex-col justify-between" style="background: rgba(92, 94, 26, 0.5)">
                            <span class="font-['Cinzel_Decorative'] text-3xl"> BRONZE</span>
                            <div class="flex flex-col justify-between">
                            <button class="font-['Cinzel_Decorative'] text-3xl add" id="bronze"> PICK </button>
                            <button class="font-['Cinzel_Decorative'] text-3xl delete" id="bronze"> SUPPREMIER </button>
                            </div>

                        </li> `
        basket.appendChild(il)
        totalpurashed++
        tickets.textContent=` Tickets Vendu : ${totalpurashed}`
        
    }
    else if(but=="epic"){
        let il = document.createElement('li')
        il.innerHTML=`<li class="flex flex-col justify-between" style="background: rgba(195, 195, 204, 0.5)">
                        <span class="font-['Cinzel_Decorative'] text-3xl"> EPIC PACK </span>
                        <div class="flex flex-col justify-between">
                        <button class="font-['Cinzel_Decorative'] text-3xl add" id="epic"> PICK </button>
                        <button class="font-['Cinzel_Decorative'] text-3xl delete" name="bronze" id="cart-${totalpurashed}"> SUPPREMIER </button>
                        </div>
                      </li>`
        basket.appendChild(il)
        totalpurashed++
        tickets.textContent=` Tickets Vendu : ${totalpurashed}`
    }
    else if(but=="legendary"){
        let il = document.createElement('li')
            il.innerHTML=`<li class="flex flex-col justify-between text-amber-400 border-transparent " style="background:rgba(95, 108, 77, 0.682)">
                        <span class="font-['Cinzel_Decorative'] text-3xl"> LEGENDARY PACK </span>
                        <div class="flex flex-col justify-between">
                        <button class="font-['Cinzel_Decorative'] text-3xl add" id="legendary"> PICK </button>
                        <button class="font-['Cinzel_Decorative'] text-3xl delete" name="legend" id="cart-${totalpurashed}"> SUPPREMIER </button>
                        </div>
                        
                      </li>`

        basket.appendChild(il)
        totalpurashed++
        tickets.textContent=` Tickets Vendu : ${totalpurashed}`

    }
    else if(but=="spells"){

        let il = document.createElement('li')
            il.innerHTML=`<li class="flex flex-col justify-between" style="background-color: rgba(22, 22, 173, 0.322);">
                        <span class="font-['Cinzel_Decorative'] text-3xl"> SPELLS PACK </span>
                        <div class="flex flex-col justify-between">
                            <button class="font-['Cinzel_Decorative'] text-3xl add" id="spell"> PICK </button>
                            <button class="font-['Cinzel_Decorative'] text-3xl delete" name="spells" id="cart-${totalpurashed}"> SUPPREMIER </button>
                        </div>

                      </li>`

        basket.appendChild(il)
        totalpurashed++
        tickets.textContent=` Tickets Vendu : ${totalpurashed}`


    }
})                                                                          // SUPRIMIER UN BOOSTER


                                                                                                        // BUYING CARD + SEPERATES CARD TO CREATE RANDOM GENERATE CARD
basket.addEventListener('click',(e)=>{
    
    let but = e.target.closest('button');let menu = ((but.parentElement).parentNode).parentElement;
     if (but.classList.contains("delete")){
            menu.remove()
            totalpurashed--
            tickets.textContent=` Tickets Vendu : ${totalpurashed}`

    }
    else{
         let but = e.target.closest("button").getAttribute('id');
            if (but=="bronze"){
                let pack = []
                let duplicated = [];
                for(let i=0;i<10;i++){
                    while(true){
                    let s = getRandomInt(1,statusCards.bronze-1)
                    if (!duplicated.includes(s))
                    duplicated.push(s)
                    pack.push(bronzecards[s])
                    break
                    }
                }
                pack.push(epiccards[getRandomInt(1,statusCards.epic-1)])
                let res = pack[getRandomInt(0,10)];
                myCards.push(res)
                RemovePack(menu)
                totalpurashed--
                tickets.textContent=` Tickets Vendu : ${totalpurashed}`
                duplicated.length=0;
                createPackRes(res)  
                localStorage.setItem('myCards', JSON.stringify(myCards));
               
            }
            else if(but=="legendary"){
                let pack = [];
                let duplicated = [];
                for(let i=0;i<3;i++){
                    while(true){
                        let s = getRandomInt(1,statusCards.bronze-1)
                        if (!duplicated.includes(s))
                            duplicated.push(s)
                            pack.push(bronzecards[s])
                            break
                    }
                }
                for(let i=0;i<5;i++){
                    while(true){
                        let s = getRandomInt(1,statusCards.epic-1)
                        if(!duplicated.includes[s])
                            duplicated.push(s)
                            pack.push(epiccards[s])
                            break
                    }
                }
                for(let i=0;i<3;i++){
                    while(true){
                        let s = getRandomInt(1,statusCards.legendary-1)
                            if(!duplicated.includes[s])
                                duplicated.push(s)
                                pack.push(legendarycards[s])
                                break
                    }
                }



                let res = pack[getRandomInt(0,10)]
                RemovePack(menu)
                totalpurashed--
                tickets.textContent=` Tickets Vendu : ${totalpurashed}`
                myCards.push(res)
                createPackRes(res)  
                localStorage.setItem('myCards', JSON.stringify(myCards));
            }
            else if(but=="epic"){
                let pack = [];
                let duplicated = [];
                for(let i=0;i<5;i++){
                    while(true){
                        let s = getRandomInt(1,statusCards.bronze-1)
                        if (!duplicated.includes(s))
                            duplicated.push(s)
                            pack.push(bronzecards[s])
                            break
                    }
                }
                for(let i=0;i<5;i++){
                    while(true){
                        let s = getRandomInt(1,statusCards.epic-1)
                        if(!duplicated.includes[s])
                            duplicated.push(s)
                            pack.push(epiccards[s])
                            break
                    }
                }
                let res = pack[getRandomInt(0,10)]
                RemovePack(menu)
                totalpurashed--
                myCards.push(res)
                tickets.textContent=` Tickets Vendu : ${totalpurashed}`
                createPackRes(res)
                localStorage.setItem('myCards', JSON.stringify(myCards));
  
                
            }
            else if(but=="spell"){
                    let pack = [];
                    let duplicated = [];
                for(let i=0;i<8;i++){
                    while(true){
                        let s = getRandomInt(1,statusCards.spells-1)
                        if(!duplicated.includes[s])
                            duplicated.push(s)
                            pack.push(spellcards[s])
                            break
                    }
            }
                (pack)
                let res = pack[getRandomInt(0,10)]
                RemovePack(menu)
                totalpurashed--
                tickets.textContent=` Tickets Vendu : ${totalpurashed}`
                myCards.push(res)
                spellPack(res);
                localStorage.setItem('myCards', JSON.stringify(myCards));
        }          
    }})
