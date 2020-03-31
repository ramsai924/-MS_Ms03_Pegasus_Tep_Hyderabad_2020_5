//Implementing Restart button functionality

var restartb=document.querySelector('#b')
var cells=document.querySelectorAll('td')
function clearAllCells(){
    for (var i = 0; i < cells.length; i++) {
    cells[i].textContent=''
    }
}
restartb.addEventListener('click',clearAllCells)

//Add content change functionality of the cells

function changeContent(){
    if (this.textContent==='') {
        this.textContent='X'
    } else if (this.textContent=='X') {
        this.textContent='O'
    } else {
        this.textContent=''
    }
}

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click',changeContent)
}

