//query que acessa a classe da imagem mario através do seletor do css
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// lógica da função jump que acessa a classe jump do css e adiciona na classe 'mario' .
const jump = () =>{
    mario.classList.add('jump')

    //funcao que espera o tempo adicionado (nesse caso 500ms) e em seguida executa a função.
    //nesse caso está removendo a função jump para executa-lá novamente sempre que chamada fazendo assim o mario pular sob o pipe sempre que pressionarmos a tecla.
    //sem essa função ele só executa uma vez no navegador o jump e para.
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition= +window.getComputedStyle(mario).bottom.replace('px','');

    //condição caso o tubo estej na posição 120px(que fica proximo ao mario) e o mario esteja na altura de 80px signfica que ele bateu no tubo e o jogo acaba
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

},10);
// evento para quando o usúario clicar em qualquer tecla ,ele chama a função de pular (jump)
document.addEventListener('keydown',jump);