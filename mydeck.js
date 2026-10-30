const favoriteContainer = document.querySelector('.divboster');
const favCards = JSON.parse(localStorage.getItem('favoriteCards')) || [];
const cardlist = document.querySelector('.divboster');
console.log(favCards)


if (favCards.length === 0) {
    favoriteContainer.innerHTML = `<p class="text-white text-2xl w-full text-center">No favorite cards added yet!</p>`;
} else {
    favoriteContainer.className += " overflow-y-scroll grid grid-cols-3 gap-6"; // Add styling layout
    favoriteContainer.style.height = "800px";

    for (let i of favCards) {
        let bgColor = "rgba(95, 108, 77, 0.682)";
        if (i.isLegendary == "epic") {
            bgColor = "rgba(195, 195, 204, 0.5)";
        }

        let card = document.createElement('div');
        card.style.width = "300px";
        card.style.height = "400px";
        card.style.background = bgColor;
        card.className = "flex flex-col items-center justify-between p-4 border border-black rounded-lg text-white";
        card.id = `${i.id}`
        
        card.innerHTML = `
            <span class="font-bold text-lg">${i.Name}</span>
            <img src="${i.img}" style="width: 200px; height: 240px; object-fit: cover;">
            <div class="flex justify-between w-full px-4">
                <span>ATTACK: ${i.Properties.attack}</span>
                <span>DEFF: ${i.Properties.def}</span>
                
            </div>
            <button style="border: solid black;border-radius:5px;"> UNFAV </button>
        `;
        favoriteContainer.appendChild(card);
    }
}
cardlist.addEventListener('click',e => {
     const but = e.target.closest('button')
        const cardli = but.parentNode
        if(but)
            for(let i in favCards){
        if (favCards[i].id==cardli.getAttribute('id').split('id-'))
            favCards.splice(i,1)
        console.log(favCards)
        }
        localStorage.setItem('favoriteCards', JSON.stringify(favCards));
            cardli.remove()
})
console.log(favCards)