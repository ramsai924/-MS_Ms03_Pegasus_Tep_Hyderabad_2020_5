//importing the elements form the html file and assigning them 
var canvas = document.getElementById("Actuallycanvas");
var ctx = canvas.getContext(' 2d');

//size input 

var scoreLabel = document.getElementById("scoreline");

//variable declaration
var score = 0;
var size = 4;
var width = canvas.width / size - 5;
var cells = [];
var fontSize; 
var loss = false // if this is ture the game reset

//main function
function stratGame() {
    createCells();
    drawCells();
}

//setting cell value on the broad
function Cell(row, col) {
    this.value = 0;
    this.x = col * width + 5 * (col + 1);
    this.y = col * width + 5 * (row + 1);
}

//setting mutiple cell on the broad
function createCells() {
    for(var i = 0; i < size; i++){
        cells[i] = [];
        for(var j = 0; j < size; j++){
            cells[i][j] = new cell(i,j);
        }
    }
}

//drawing single cell on the broad
function drawCell() { 
    ctx.beginaPath();
    ctx.rect(cell.x,cell.y, width, wdith)

    switch(cell.value) {
        case 0    : ctx.fillStyle = "red"; break;
        case 2    : ctx.fillStyle = "blue"; break;
        case 4    : ctx.fillStyle = "yellow"; break;
        case 8    : ctx.fillStyle = "green"; break;
        case 16   : ctx.fillStyle = "brown"; break;
        case 32   : ctx.fillStyle = "lightskyblue"; break;
        case 64   : ctx.fillStyle = "pink"; break;
        case 128  : ctx.fillStyle = "voilet"; break;
        case 256  : ctx.fillStyle = "orange"; break;
        case 512  : ctx.fillStyle = "lightyellow"; break;
        case 1024 : ctx.fillStyle = "white"; break;
        case 2048 : ctx.fillStyle = "black"; break;
        default : ctx.fillStyle = "";
    }
    
    ctx.fill();
    if(cell.value){
        fontSize = width / 2;
        ctx.font = fontSize + "Arial";
        ctx.fillStyle = "white";
        ctx.filltext(cell.value, cell.x + width / 2, cell.y + width / 2);
    }
}

//drawing multiple cells on the broad
function drawCells() {
 for(var i = 0; i < size; i++){
     for (var j = 0; j < size; j++){
         drawCell(cell[i][j]);
     }
 }
}

stratGame();
