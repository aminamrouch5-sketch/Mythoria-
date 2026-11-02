//  const arenamap = document.querySelector('');
const dragcont = document.querySelector('#drag-con')
let pick = JSON.parse(localStorage.getItem('side'))
dragcont.addEventListener('click',(e)=>
{
    let clicked = e.target.closest('div');
    if(clicked.getAttribute("id")=="p1")
    {
    
    }
})
