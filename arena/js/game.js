function AddCarte(e, pattack, pdeff, cards, body) {
    let info = document.createElement('div');
    info.innerHTML = `<div class="font-['Cinzel_Decorative'] text-3xl fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-[500px] h-[500px] text-center items-center justify-between" style="background: rgba(95, 108, 77, 0.682)">
                        <img src="${e.target.closest('img').src}" class="w-[200px] h-[300px]">
                        <div class="flex justify-between gap-[150px] text-[15px] text-amber-600">
                        <span id="att" class="hover:bg-white cursor-pointer" style="color:black;width:110px;border-radius:20px;height:35px;line-height:35px;"> ATTACK </span>
                        <span id="deff" class="hover:bg-white cursor-pointer" style="color:black;width:110px;border-radius:20px;height:35px;line-height:35px;"> DEFFENCE </span>
                        </div>
                    </div>`;
    
    let targetImg = e.target.closest('img');
    if (!targetImg) return;
    let id = targetImg.getAttribute('id').split('card-')[1];
    let imageclicked = targetImg.closest('li'); 
    
    if (!id) return;
    body.appendChild(info);

    info.addEventListener('click', (e) => {
        e.preventDefault();
        let butt = e.target.closest('span');
        if (!butt) return;

        let added = false;

        if (butt.getAttribute('id') == "att") {
            const attacks = document.querySelectorAll(".atk-p1");
            for (let i = 0; i < pattack.length; i++) {
                if (pattack[i] == null) {
                    pattack[i] = cards[id];
                    attacks[i].innerHTML = `<img src="../.${pattack[i].img}">`;
                    imageclicked.remove();
                    added = true;
                    break;
                }
            }
        } else if (butt.getAttribute('id') == "deff") {
            const deffs = document.querySelectorAll(".deff-p1");
            for (let i = 0; i < pdeff.length; i++) {
                if (pdeff[i] == null) {
                    pdeff[i] = cards[id];
                    deffs[i].innerHTML = `<img src="../.${pdeff[i].img}">`;
                    imageclicked.remove();
                    added = true;
                    break;
                }
            }
        }

        info.remove();

        if (!added) {
            alert("FULL PLACES");
        }
    });
}

function BotAddCarte(pattack, pdeff, cards, getRandomInt) {
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

function dragCard(mycards, currentCards, getRandomInt, menudom) {
    if (currentCards.length > 5) {
        return;
    }
    let draged = mycards[getRandomInt(0, mycards.length - 1)];
    let li = document.createElement('li');
    
    if (menudom.getAttribute('id') == "player1") {
        li.innerHTML = `<img src="../.${draged.img}" id="card-${draged.id}" class="p1-cards">`;
    } else {
        li.innerHTML = `<img src="../.${draged.img}" id="card-${draged.id}" class="bot-cards">`;
    }
    menudom.appendChild(li);
}

function attack(playerAttack, botAttack, botDeff, hp) {
    const atkElements = document.querySelectorAll(".atk-p2");
    const defElements = document.querySelectorAll(".deff-p2");

    playerAttack.forEach((card, index) => {
        if (card != null) {
            if (botAttack != null && botAttack.Properties) {
                botAttack.Properties.def -= card.Properties.attack;
                if (botAttack.Properties.def <= 0) {
                    if (atkElements[index]) {
                        atkElements[index].remove();
                    }
                }
            } 
            else if (botDeff != null && botDeff.Properties) {
                botDeff.Properties.def -= card.Properties.attack;
                if (botDeff.Properties.def <= 0) {
                    if (defElements[index]) {
                        defElements[index].remove();
                    }
                }
            } 
            else {
                if (hp) {
                    hp.boothp -= card.Properties.attack;
                    if (hp.boothp < 0) {
                        hp.boothp = 0;
                        alert("YOU WIN")
                        location.reload();
                    }
                }
            }
        }
    });
}

export { AddCarte, dragCard,attack };