// Array que conta com as cenas do jogo
const cenas = [
    {
        cenario: 'src/images/bg1.webp',
        falante: 'Jogadora',
        dialogo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a justo urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a justo urna. ',
    },
    {
        cenario: 'src/images/bg2.jpg',
        falante: 'Ada Lovelace',
        dialogo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a justo urna. ',
    },
    {
        cenario: 'src/images/bg3.avif',
        falante: 'texto03',
        dialogo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a justo urna. ',
    }];

// Nessa parte, relacionamos os elementos do HTML ao Javascript
const cenarioElemento = document.getElementById('cenario');
const caixaDeDialogoElemento = document.getElementById('caixa-de-dialogo');
const falanteElemento = document.getElementById('falante');
const dialogoElemento = document.getElementById('dialogo');
const overlayElemento = document.getElementById('overlay');
const jogoElemento = document.getElementById('jogo');
const comecarBotaoElemento = document.getElementById('comecar-btn');

// Variável que guarda o índice de cada cena
let cenaAtual = 0;
let nomeJogadora = "";

// Aqui, quando o usuário clicar no botão de começar, 
comecarBotaoElemento.addEventListener('click', function (event) {

    event.preventDefault();
    // Nós conseguimos ter acesso ao css através de: nome da variável + "style" + propriedade do css
    
    const inputNome = document.getElementById('nome-jogadora');
    nomeJogadora = inputNome.value.trim();
    
    if (nomeJogadora === '') {
        alert('Digite seu nome para começar!');
        inputNome.focus();
        return;
    }
    
    overlayElemento.style.display = 'none'; // Aqui, alteramos o css de overlayElemento (o texto que tem no início) - colocamos display: none. Ou seja, não aparece na tela.

    //No css, o id 'caixa-de-dialogo' está com o display: 'none'. Isso significa que a caixa de diálogo, quando o jogador está na tela de começar, não aparece.
    // Por isso, precisamos mudar essa configuração, para que, na cena seguinte, apareça a caixa de diálogo.
    caixaDeDialogoElemento.style.display = 'flex';
    // Nós chamamos a função mostrarCena
    mostrarCena(cenaAtual);
});

function mostrarCena(indice) {

    // Aqui, as cenas se modificam de acordo com as informações colocadas no array
    //cenas[indice] vai até a posição do elemento do array de objetos. E "pega" os valores a partir de suas respectivas chaves.

    //Modifica o cenário a partir do do valor dado à chave em cada propriedade do array.
    cenarioElemento.style.backgroundImage = `url(${cenas[indice].cenario})`;

    //Modifica o nome do personagem a partir do valor dado à chave em cada propriedade do array.
    if (cenas[indice].falante === 'Jogadora') {
        falanteElemento.textContent = nomeJogadora;
    } else {
        falanteElemento.textContent = cenas[indice].falante;
    }

    //Modifica o diálogo a partir do do valor dado à chave em cada propriedade do array.
    dialogoElemento.textContent = cenas[indice].dialogo;
}


// O jogo acontece porque a jogadora aperta nos diálogos da caixa de diálogo. Assim, é necessária uma função que aumente o valor da cena atual sempre que houver um clique no diálogo!

dialogoElemento.addEventListener('click', function () {
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
    caixaDeDialogoElemento.style.display = 'none';
    overlayElemento.style.display = 'flex';
    overlayElemento.innerHTML = `
        <img src="src/images/logo/logoPreta.png" alt="">
        <p id="mensagem-final">Parabéns! Você completou o jogo!</p>
        <div class="jogar-novamente">
         <p id="jogar-novamente-msg">Deseja jogar novamente?</p>
         <button id="reiniciar-btn">Jogar novamente</button>
         </div>
     `;

    const reiniciarBotaoElemento = document.getElementById('reiniciar-btn');

    reiniciarBotaoElemento.addEventListener("click", function () {

        overlayElemento.innerHTML = `
      <img src="src/images/logo/logoPreta.png" alt="">
      <form onsubmit="return false">
          <label id="overlay_nome" for="nome">Digite o seu nome:</label>
          <input type="text" id="nome">

          <button id="comecar-btn" type="button">JOGAR</button>
      </form>
    `;

        const novoComecarBtn = document.getElementById('comecar-btn');

        novoComecarBtn.addEventListener('click', function (event) {
            event.preventDefault();

            const inputNome = document.getElementById('nome');
            nomeJogadora = inputNome.value.trim();

            if (nomeJogadora === '') {
                alert('Digite seu nome para começar!');
                inputNome.focus();
                return;
            }

            overlayElemento.style.display = 'none';
            caixaDeDialogoElemento.style.display = 'flex';

            mostrarCena(cenaAtual);
        });
    });

}