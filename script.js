

let order = [];
let clickOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

// função que sorteia as cores

let shuffleOrder = () => {
   let colorOrder = Math.floor(Math.random()*4);
   order[order.length] = colorOrder;
   clickOrder = [];

   for(let i in order) {
       let elementColor = createColorElement(order[i]);
       lightColor(elementColor, Number(i) + 1);
   }
} 

// proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
    element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
// acende e apaga as cores

// checa se os botoes clicados estao na  mesmas ordem das cores geradas pelo jogo
let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            gameOver();
            break;
        }       
    }
    if(clickOrder.length == order.length) {
        alert(`Pontuação:  ${score}\n Você acertou! Iniciando o próximo nível !`);
        nextLevel();
    }
}

//função para o click do usuario
let click = (color) => {
  clickOrder[clickOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('sected');
    checkOrder();
  }, 250);
} 

// criar função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color ==1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//função proximo nivel do jogo 
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função game over
let gameOver = () => {
    alert(`Pontuação: ${score} !\n Você perdeu o jogo !\n Click em OK para inicir um novo!`);
    order =[];
    clickOrder = [];
    playGame();
}

// função inicio do jogo
let playGame = () => {
    alert('Bem Vindo ao Gênius! Iniciando novo jogo!');
    score = 0;
    nextLevel();
}

//eventos de click
green.onclick('click', click(0));
blue.onclick('click', click(3));
red.onclick('click', click(1));
yellow.onclick('click', click(2));

playGame();

