function DrawChess() {
    let mainBoard = document.querySelector('.main-board');
    let square;
    let flag = true;
    for (let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){

            if (j==0) flag =!flag;
            square = document.createElement('div');
            let g = i*8+j;
            square.setAttribute('id', 's'+g);
          
            if(flag) square.className = 'square black';
            else square.className = 'square white';

            mainBoard.appendChild(square);

            flag = !flag;
        }
    }
    setDroppable();
   
  }  
let divFigure = '<div id="f$id" class="figure">$figure</div>';
function showFigureAt(id, figure){
    map[id] = figure;
    $('#s'+ id).html(divFigure.replace('$id', id).replace('$figure', getChessSymb(figure)));
}

function getChessSymb(figure) {
    switch(figure){
        case 'K': return '&#9812';
        case 'Q': return '&#9813';
        case 'R': return '&#9814';
        case 'B': return '&#9815';
        case 'N': return '&#9816';
        case 'P': return '&#9817';
        case 'k': return '&#9818';
        case 'q': return '&#9819';
        case 'r': return '&#9820';
        case 'b': return '&#9821';
        case 'n': return '&#9822';
        case 'p': return '&#9823';
        default : return '';
    }
}

function showFigures(figures){
    for(let c = 0; c < 64; c++){
        showFigureAt(c, figures.charAt(c));
    }
    setDraggable();
} 

function setDraggable(){
    $('.figure').draggable();
}
function setDroppable(){
    $('.square').droppable({
        drop : function(e, ui){
            let frId = ui.draggable.attr('id').substring(1);
            let toGo = this.id.substring(1);
            
            moveFigure(frId, toGo);
        }
    });
}

function moveFigure(frId, toGo){
    console.log('move from'+ frId + 'to' + toGo);
    figure = map[frId];
    showFigureAt(frId, '1');
    showFigureAt(toGo, figure);
    setDraggable();

}

let map;
function start(){
    map = new Array(64);
    DrawChess();
showFigures('rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR');
}



start();