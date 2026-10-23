import { monsters } from './data.js';
const boostermenu = document.querySelector('#booster') // from booster page
const basket = document.querySelector('#umenu') // from basket page
console.log("hi " )
console.log("hi " + basket)
let totalpurashed = 0
boostermenu.addEventListener('click',(e)=>{
    e.preventDefault()
    let but=e.target.closest("button").getAttribute('id')
    console.log(but)
    if( but=="bronze"){
        let il = document.createElement('li')
        il.innerHTML = `<li class="flex flex-col justify-between" style="background: rgba(92, 94, 26, 0.5)">
                            <span class="font-['Cinzel_Decorative'] text-3xl"> BRONZE</span>
                            <div class="flex flex-col justify-between">
                            <button class="font-['Cinzel_Decorative'] text-3xl" id="bronze"> PICK </button>
                            <button class="font-['Cinzel_Decorative'] text-3xl" id="bronze" id="cart-${totalpurashed}"> SUPPREMIER </button>
                            </div>

                        </li> `
        basket.appendChild(il)
    }
    else if(but=="epic"){
        let il = document.createElement('li')
        il.innerHTML=`<li class="flex flex-col justify-between" style="background: rgba(195, 195, 204, 0.5)">
                        <span class="font-['Cinzel_Decorative'] text-3xl"> EPIC PACK </span>
                        <div class="flex flex-col justify-between">
                        <button class="font-['Cinzel_Decorative'] text-3xl" id="epic"> PICK </button>
                        <button class="font-['Cinzel_Decorative'] text-3xl" name="bronze" id="cart-${totalpurashed}"> SUPPREMIER </button>
                        </div>
                      </li>`
        basket.appendChild(il)
        totalpurashed++
    }
    else if(but=="legendary"){
        let il = document.createElement('li')
            il.innerHTML=`<li class="flex flex-col justify-between text-amber-400 border-transparent " style="background:rgba(95, 108, 77, 0.682)">
                        <span class="font-['Cinzel_Decorative'] text-3xl"> LEGENDARY PACK </span>
                        <div class="flex flex-col justify-between">
                        <button class="font-['Cinzel_Decorative'] text-3xl" id="legendary"> PICK </button>
                        <button class="font-['Cinzel_Decorative'] text-3xl" name="legend" id="cart-${totalpurashed}"> SUPPREMIER </button>
                        </div>
                        
                      </li>`

        basket.appendChild(il)
        totalpurashed++

    }
    else if(but=="spells"){

        let il = document.createElement('li')
            il.innerHTML=`<li class="flex flex-col justify-between" style="background-color: rgba(22, 22, 173, 0.322);">
                        <span class="font-['Cinzel_Decorative'] text-3xl"> SPELLS PACK </span>
                        <div class="flex flex-col justify-between">
                            <button class="font-['Cinzel_Decorative'] text-3xl" id="spell"> PICK </button>
                            <button class="font-['Cinzel_Decorative'] text-3xl" name="spells" id="cart-${totalpurashed}"> SUPPREMIER </button>
                        </div>

                      </li>`

        basket.appendChild(il)
        totalpurashed++


    }
})