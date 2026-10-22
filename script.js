import { monsters } from './data.js';
const boostermenu = document.querySelector('#booster') // from booster page
const basket = document.querySelector('#basket') // from basket page
console.log("hi " )
console.log("hi " + basket)
let totalpurashed = 0
boostermenu.addEventListener('click',(e)=>{
    e.preventDefault()
    let but=e.target.closest("button").getAttribute('id')
    console.log(but)
    if( but=="bronze"){
        let il = document.createElement('li')
        il.innerHTML = `<li>
                            <span class="font-['Cinzel_Decorative'] text-3xl"> LEGENDARY PACK</span>
                            <button class="font-['Cinzel_Decorative'] text-3xl" id="legendary"> PICK </button>
                        </li> `;
        basket.appendChild(il)
        console.log(il)
    }
    else if(but=="epic"){

    }
    else if(but=="legendary"){

    }
    else if(but=="spells"){

    }
}
)