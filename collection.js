const mycards = JSON.parse(localStorage.getItem('myCards'));
const collectionmenu = document.querySelector('#m-cards');
const container = document.querySelector('.img-container');
console.log(mycards);

for(let i of mycards){
    console.log(i);
    if(i.isLegendary == "legendary"){
        let card = document.createElement('li');
        card.innerHTML = `<li style="background: rgba(95, 108, 77, 0.682)" class="items-center content-center justify-center">
                        <span> ${i.Name}</span>
                        <img src="${i.img}" style="margin: auto;padding: 20px;">
                        <div class="flex justify-between">
                            <span>ATTACK :${i.Properties.attack}</span>
                            <span>DEFF : ${i.Properties.def}</span>
                        </div>
                         <div class="flex justify-between">
                        <span> EPIC CARD</span>
                        <button style="border:solid yellow" class="id-${i.id}">Add My Fav</button>
                        </div>
                        </li>`;
        collectionmenu.appendChild(card);
    }
}              

for(let i of mycards){
    console.log(i);
    if(i.isLegendary == "epic"){
        let card = document.createElement('li');
        card.innerHTML = `<li style="background: rgba(195, 195, 204, 0.5)" class="items-center content-center justify-center">
                        <span> ${i.Name}</span>
                        <img src="${i.img}" style="margin: auto;padding: 20px;">
                        <div class="flex justify-between">
                            <span>ATTACK :${i.Properties.attack}</span>
                            <span>DEFF : ${i.Properties.def}</span>
                        </div>
                        <div class="flex justify-between">
                        <span> EPIC CARD</span>
                        <button style="border:solid yellow" class="id-${i.id}">Add My Fav</button>
                        </div>
                        </li>`;
        collectionmenu.appendChild(card);
    }
}              

for(let i of mycards){
    console.log(i);
    if(i.isLegendary == "bronze"){
        let card = document.createElement('li');
        card.innerHTML = `<li style="background: rgba(95, 108, 77, 0.682)" class="items-center content-center justify-center">
                        <span> ${i.Name}</span>
                        <img src="${i.img}" style="margin: auto;padding: 20px;">
                        <div class="flex justify-between">
                            <span>ATTACK :${i.Properties.attack}</span>
                            <span>DEFF : ${i.Properties.def}</span>
                        </div>
                        <div class="flex justify-between">
                        <span> EPIC CARD</span>
                        <button style="border:solid yellow" class="id-${i.id}">Add My Fav</button>
                        </div>
                        </li>`;
        collectionmenu.appendChild(card);
    }
}              

// Event listener to show clicked image and replace the previous one
collectionmenu.addEventListener('click', (e) => {
    let clickedimg = e.target.closest('img');
    if (!clickedimg) return;

    // Clear the container to remove the previous image
    container.innerHTML = '';

    let imaage = document.createElement('img');
    imaage.src = clickedimg.src;
    imaage.style.width = '100%';
    imaage.style.height = '100%';
    imaage.style.objectFit = 'contain';
    imaage.style.padding = '20px';

    container.appendChild(imaage);
});

collectionmenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.className.startsWith('id-')) {
        // Extract the card ID from the button's class name (e.g., "id-0" -> 0)
        const cardId = parseInt(e.target.className.replace('id-', ''));
        
        // Find the card from the stored cards
        const selectedCard = mycards.find(card => card.id === cardId);
        if (!selectedCard) return;

        // Get existing favorites from localStorage or initialize empty array
        let favorites = JSON.parse(localStorage.getItem('favoriteCards')) || [];

        // Check if it's already in favorites to avoid duplicates
        const exists = favorites.some(card => card.id === selectedCard.id);
        if (!exists) {
            favorites.push(selectedCard);
            localStorage.setItem('favoriteCards', JSON.stringify(favorites));
            alert(`${selectedCard.Name} added to your Favorites!`);
        } else {
            alert(`${selectedCard.Name} is already in your Favorites!`);
        }
    }
});