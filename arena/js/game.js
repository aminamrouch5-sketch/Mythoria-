
function AddCarte(e,pattack,pdeff,cards,body){
    let info = document.createElement('div')
    let full = true
    info.innerHTML=`<div class="font-['Cinzel_Decorative'] text-3xl fixed flex flex-col  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-[500px] h-[500px] text-center items-center justify-between" style="background: rgba(95, 108, 77, 0.682)">
                        <img src="${e.target.closest('img').src}" class="w-[200px] h-[300px]">
                        <div class="flex justify-between gap-[150px] text-[15px] text-amber-600">
                        <span id="att" class="hover:bg-white" style="color:black;width:110px;border-radius:20px;height:35px"> ATTACK </span>
                        <span id="deff" class="hover:bg-white" style="color:black;width:110px;border-radius:20px;height:35px"> DEFFENCE </span>
                        </div>
                    </div>`
    let id = e.target.closest('img').getAttribute('id').split('card-')[1]
    let imageclicked = e.target.closest('li').parentNode
    if(!id)
        {return}
    console.log(id)
    body.appendChild(info)
    info.addEventListener('click',(e)=>{
        e.preventDefault()
        let butt = e.target.closest('span');
        if(!butt)
             return;

        if(butt.getAttribute('id')=="att"){
            const attacks = document.querySelectorAll(".atk-p1")
            for(let i=0;i<pattack.length;i++){
                if(pattack[i]==null){
                   pattack[i]=cards[id]
                   attacks[i].innerHTML=`<img src="../.${pattack[i].img}">`
                   imageclicked.remove()
                   full=false
                   break
                }
            }
            info.remove()
            }
        else if(butt.getAttribute('id')=="deff"){
            
            const deffs = document.querySelectorAll(".deff-p1")
            for(let i=0;i<pdeff.length;i++){
            
                if(pdeff[i]==null){
                        console.log(1)
                    pdeff[i]=cards[id]
                    deffs[i].innerHTML=`<img src="../.${pdeff[i].img}">`
                    imageclicked.remove()
                    full=false
                    break
                }
            }
            info.remove()
        }
        if(full){
            alert("FULL PLACES")
        }
            
        }
    )
}
function BotAddCarte(pattack,pdeff,cards,getRandomInt){
const botcards = document.querySelectorAll('.bot-cards')
const botattack = document.querySelectorAll('.atk-p2')
let cardImage = botcards[0]
let id = cardImage.getAttribute('id').split('card-')[1]
 for(let i=0;i<pattack.length;i++){
    if(pattack[i]==null){
       pattack[i]=cards[id]
       botattack[i].innerHTML=`<img src="../.${pattack[i].img}">`
       cardImage.remove()
       break
    }
 }
function BotDeff(pdeff,cards){
    const botcards = document.querySelectorAll('.bot-cards')
    const botdeff = document.querySelectorAll('.deff-p2')
    let cardImage=botcards[0]
    let id = cardImage.getAttribute('id').split('card-')[1]
    for(let i=0;i<pdeff;i++){
        pdeff[i]=cards[id]
        botdeff[i].innerHTML=`<img src="${pdeff.img}">`
        cardImage.remove()
        break
    }
}

function dragCard(mycards,currentCards,getRandomInt,menudom){
            if(currentCards.length>5){
                return 
            }
            if(menudom.getAttribute('id')=="player1"){
            let draged = mycards[getRandomInt(0,mycards.length-1)]
            let li = document.createElement('li')
            li.innerHTML=`<li>
                        <img src="../.${draged.img}" id="card-${draged.id}" class="p1-cards">
                          </li>`
            menudom.appendChild(li)
            }else{
            let draged = mycards[getRandomInt(0,mycards.length-1)]
            let li = document.createElement('li')
            li.innerHTML=`<li>
            <img src="../.${draged.img}" id="card-${draged.id}" class="bot-cards">
                </li>`
            menudom.appendChild(li)
            }
}

}
export {AddCarte,BotAddCarte}

