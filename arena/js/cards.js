
const getRandomInt = function (min, max) { // random number function
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const GenerateCards = function (cards,newcardes,max){
    for(let i=0;i<max;i++){
        let duplicated=[]
        while(true){
            let s = getRandomInt(0,cards.length-1)
            if (!duplicated.includes(s)){
                newcardes.push(cards[s])
                duplicated.push(s)
                break
            }
        }
    }
}

export { GenerateCards,getRandomInt }