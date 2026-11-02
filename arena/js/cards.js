const cards = JSON.parse(localStorage.getItem("favoriteCards")) || [];
const mycards = JSON.parse(localStorage.getItem('myCards'))
const currentCards=[]
const gamewindow = document.getElementById('game')



function getRandomInt(min, max) { // random number function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function GenerateCards(){
    
}


gamewindow.addEventListener('click',(e)=>{
    e.preventDefault();
    if(cards.length<5){
   if(mycards.length<5){
    const mymonsters= [];
    alert("Sorry You have less then 5 cards you can't play")
    return
   }else{
        const duplicated = []
        for(let i=0;i<5;i++){
            while(true){
            let index = getRandomInt(1,mycards.length-1)
        if (!duplicated.includes(index)){
            currentCards.push(mycards[index])
            duplicated.push(index)
            break
            }}}
   }
}
else{
    const duplicated = []
        for(let i=0;i<5;i++){
            while(true){
            let index = getRandomInt(1,cards.length-1)
        if (!duplicated.includes(index)){
            currentCards.push(cards[index])
            duplicated.push(index)
            break
            }
        }
    }
}
console.log(currentCards)

})
