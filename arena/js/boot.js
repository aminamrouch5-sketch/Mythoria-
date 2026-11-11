function BotAddATK(pattack, pdeff, cards, getRandomInt) {
    const botcards = document.querySelectorAll('.bot-cards');
    const botattack = document.querySelectorAll('.atk-p2');
    if (botcards.length === 0) return;
    
    let cardImage = botcards[0];
    let id = cardImage.getAttribute('id').split('card-')[1];
    
    for (let i = 0; i < pattack.length; i++) {
        if (pattack[i] == null) {
            pattack[i] = cards[id];
            botattack[i].innerHTML = `<img src="../.${pattack[i].img}">`;
            cardImage.closest('li').remove(); 
            break;
        }
    }
}

function BotDeff(pdeff, cards, getRandomInt) {
    const botcards = document.querySelectorAll('.bot-cards');
    const botdeff = document.querySelectorAll('.deff-p2');
    if (botcards.length === 0) return;

    let cardImage = botcards[0];
    let id = cardImage.getAttribute('id').split('card-')[1];
    
    for (let i = 0; i < pdeff.length; i++) {
        if (pdeff[i] == null) {
            pdeff[i] = cards[id];
            botdeff[i].innerHTML = `<img src="../.${pdeff[i].img}">`;
            cardImage.closest('li').remove();
            break;
        }
    }
}

function BotDrag(cards, listmenu, getRandomInt) {
    let bcard = cards[getRandomInt(0, cards.length - 1)];
    let li = document.createElement('li');
    li.innerHTML = `<img src="../.${bcard.img}" class="bot-cards" id="card-${bcard.id}">`;
    listmenu.appendChild(li);
}
function botAttackFunction(botAttack, playerAttack, playerDefence, hp) {
   
    const pAtkElements = document.querySelectorAll(".atk-p1");
    const pDefElements = document.querySelectorAll(".deff-p1");

    botAttack.forEach((card, index) => {
        if (card != null && card.Properties) {
            let targetDefCard = playerDefence[index];
            let targetAtkCard = playerAttack[index];

           
            if (targetDefCard != null && targetDefCard.Properties) {
                targetDefCard.Properties.def -= card.Properties.attack;
                if (targetDefCard.Properties.def <= 0) {
                    if (pDefElements[index]) {
                        pDefElements[index].innerHTML = "";
                    }
                    playerDefence[index] = null; 
                }
            } 
         
            else if (targetAtkCard != null && targetAtkCard.Properties) {
                targetAtkCard.Properties.def -= card.Properties.attack;
                if (targetAtkCard.Properties.def <= 0) {
                    if (pAtkElements[index]) {
                        pAtkElements[index].innerHTML = "";
                    }
                    playerAttack[index] = null; 
                }
            } 

            else {
                if (hp) {
                    hp.playerhp -= card.Properties.attack;
                    if (hp.playerhp < 0) {
                        hp.playerhp = 0;
                        alert("YOU LOSE! BOT WINS");
                        location.reload(); 
                    }
                }
            }
        }
    });
}

export { BotAddATK, BotDeff, BotDrag ,botAttackFunction};