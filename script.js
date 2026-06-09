// Array que conta com as cenas do jogo
const cenas = [
    {
        cenario: 'src/images/bg1.webp',
        falante: 'texto01',
        dialogo: 'bla1',
    },
    {
        cenario: 'src/images/bg2.jpg',
        falante: 'texto02',
        dialogo: 'bla02',
    },
    {
        cenario: 'src/images/bg3.avif',
        falante: 'texto03',
        dialogo: 'Bla 03',
    }];

// Nessa parte, relacionamos os elementos do HTML ao Javascript
const cenarioElemento = document.getElementById('cenario');
const caixaDeTextoElemento = document.getElementById('caixa-de-texto');
const falanteElemento = document.getElementById('falante');
const dialogoElemento = document.getElementById('dialogo');
const overlayElemento = document.getElementById('overlay');
const jogoElemento = document.getElementById('jogo');
const comecarBotaoElemento = document.getElementById('comecar-btn');

// Variável que guarda o índice de cada cena
let cenaAtual = 0;

// Aqui, quando o usuário clicar no botão de começar, 
comecarBotaoElemento.addEventListener('click', function (event) {

    event.preventDefault();
    // Nós conseguimos ter acesso ao css através de: nome da variável + "style" + propriedade do css
    overlayElemento.style.display = 'none'; // Aqui, alteramos o css de overlayElemento (o texto que tem no início) - colocamos display: none. Ou seja, não aparece na tela.

    //No css, o id 'caixa-de-texto' está com o display: 'none'. Isso significa que a caixa de texto, quando o jogador está na tela de começar, não aparece.
    // Por isso, precisamos mudar essa configuração, para que, na cena seguinte, apareça a caixa de texto.
    caixaDeTextoElemento.style.display = 'flex';
    // Nós chamamos a função mostrarCena
    mostrarCena(cenaAtual);
});

function mostrarCena(indice) {

    // Aqui, as cenas se modificam de acordo com as informações colocadas no array
    //cenas[indice] vai até a posição do elemento do array de objetos. E "pega" os valores a partir de suas respectivas chaves.

    //Modifica o cenário a partir do do valor dado à chave em cada propriedade do array.
    cenarioElemento.style.backgroundImage = `url(${cenas[indice].cenario})`;

    //Modifica o nome do personagem a partir do valor dado à chave em cada propriedade do array.
    falanteElemento.textContent = cenas[indice].falante;

    //Modifica o diálogo a partir do do valor dado à chave em cada propriedade do array.
    dialogoElemento.textContent = cenas[indice].dialogo;
}


// O jogo acontece porque a jogadora aperta nos diálogos da caixa de texto. Assim, é necessária uma função que aumente o valor da cena atual sempre que houver um clique no diálogo!

caixaDeTextoElemento.addEventListener('click', function () {
    cenaAtual++;
    //Se no array de cenas tem 5 objetos, as posições de cada objeto variam de 0 a 4. 
    // Por isso, caso o usuário clique novamente no diálogo e a quantidade de objetos no array ter acabado, elevai para a tela de finalizar o jogo.

    if (cenaAtual < cenas.length) {
        mostrarCena(cenaAtual);
    } else {
        finalizarJogo();
    }
});

function finalizarJogo() {   
    cenaAtual = 0;
    cenarioElemento.style.backgroundImage = 'none';
    caixaDeTextoElemento.style.display = 'none';
    overlayElemento.style.display = 'flex';
    overlayElemento.innerHTML = `
         <h3>Fim da demonstração</h3>
         <button id="reiniciar-btn">Jogar novamente</button>
     `;

    const reiniciarBotaoElemento = document.getElementById('reiniciar-btn');

    reiniciarBotaoElemento.addEventListener("click", function () {
     
        overlayElemento.innerHTML = `
          <img src="src/logo/svg-2.svg" alt="">
            <form>
                <label id="overlay_nome" for="nome">Digite o seu nome:</label>
                <input type="text" id="nome">

                <button id="comecar-btn" type="submit">JOGAR</button>
            </form>
     `;
        const recomecarBotaoElemento = document.getElementById('recomecar-btn');
        recomecarBotaoElemento.addEventListener('click', function (event) {

            event.preventDefault();
            overlayElemento.style.display = 'none'; 
            caixaDeTextoElemento.style.display = 'flex';
            mostrarCena(cenaAtual);
        });
    })

}