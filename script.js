// Array que conta com as cenas do jogo


// id: identificador do tipo de cena.
// cenario: imagem de fundo
// falante: personagem que fala
// dialogo: texto exibido
// tipo: indica cenas especiais
const cenas = [
    {
        id: "intro",
        cenario: "src/images/cenarios/mariecurie/laboratorio-Protagonistamaior.png",
        falante: "Jogadora",
        dialogo: "Porém, desde que eu iniciei minha carreira..."
    },   

    {
        id: "explicacao",
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Quando estiver pronta, pode começar."
    },

    {
        id: "investigacao",
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        tipo: "investigacao"
    },

    {
        id: "perguntaFinal",
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        tipo: "perguntaFinal"
    },

    {
        id: "respostaErrada",
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        tipo: "respostaErrada"
    },

    {
        id: "respostaCerta",
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Excelente observação! A Amostra B provavelmente contém urânio."
    }
];

// Relacionamos os elementos do HTML ao Javascript
const cenarioElemento = document.getElementById('cenario');
const caixaDeDialogoElemento = document.getElementById('caixa-de-dialogo');
const falanteElemento = document.getElementById('falante');
const dialogoElemento = document.getElementById('dialogo');
const overlayElemento = document.getElementById('overlay');
const botoesCenaElemento = document.getElementById('botoes-cena');
const comecarBotaoElemento = document.getElementById('comecar-btn');


// Variáveis de controle, elas armazenam o estado atual do jogo
let cenaAtual = 0;
let nomeJogadora = "";
let amostraAVista = false;
let amostraBVista = false;

// ========== Funções auxiliares ==========

// Procura uma cena pelo ID
function irParaCena(id) {
    const indice = cenas.findIndex(cena => cena.id === id);

    if (indice === -1) {
        console.error(`Cena "${id}" não encontrada.`);
        return;
    } else{
        cenaAtual = indice;
        mostrarCena(cenaAtual);
    }
}

// Altera o rosto do personagem na caixa de diálogo
function trocarRostoPersonagem(falante) {
    const rostoImg = document.querySelector('.rosto-personagem img');
    
    if (falante === nomeJogadora || falante === 'Jogadora') {
        rostoImg.src = 'src/images/caixa-de-dialogo/protagonista.jpg';
    } else if (falante === 'Marie Curie') {
        rostoImg.src = 'src/images/caixa-de-dialogo/mariecurie.jpg';
    }
}

// Exibe uma fala na caixa de diálogo (Adiciona nome do personagem, fala e retrato)
function mostrarDialogo(falante, dialogo) {
    caixaDeDialogoElemento.style.display = 'flex';
    falanteElemento.textContent = falante;
    dialogoElemento.textContent = dialogo;
    trocarRostoPersonagem(falante);
}

// Esconde a caixa de diálogo
function esconderDialogo() {
    caixaDeDialogoElemento.style.display = 'none';
}

// Remove os botões da tela
function limparBotoes() {
    botoesCenaElemento.innerHTML = '';
}

// Cria um botão no cenário
function criarBotao(texto, posicao, onClick) {
    const btn = document.createElement('button'); // Cria o elemento button pelo javascript
    btn.textContent = texto;
    btn.classList.add('botao-cena');
    Object.assign(btn.style, posicao);
    btn.addEventListener('click', onClick);
    botoesCenaElemento.appendChild(btn);
}

// Aguarda um clique no diálogo e executa a função
function aoClicarNoDialogo(callback) {
    dialogoElemento.addEventListener('click', callback, { once: true });
}

// ========= Botões reutilizáveis ==========

function mostrarBotoesInvestigacao() {
    limparBotoes();
    criarBotao('Amostra A', { bottom: '50%', left: '20%' }, onAmostraA);
    criarBotao('Amostra B', { bottom: '50%', right: '20%' }, onAmostraB);
}

// Mostra os botões das amostras
function mostrarBotoesResposta() {
    limparBotoes();

    criarBotao(
        'Amostra A',
        { bottom: '50%', left: '20%' },
        function () {

            mostrarDialogo(
            'Marie Curie',
            'Lembre dos resultados novamente. Qual das amostras provocou uma alteração no eletroscópio?'
        );

            
        }
    );

    criarBotao(
        'Amostra B',
        { bottom: '50%', right: '20%' },
        function () {

            irParaCena("respostaCerta");

        }
    );
}

// Lógica da amostra A, de Marie Curie

function onAmostraA() {
    amostraAVista = true;
    limparBotoes();
    mostrarDialogo('Marie Curie', 'Interessante. Parece que esta amostra não afetou o instrumento. Agora, clique na Amostra B.');

    // Mostra só o botão da Amostra B
    criarBotao('Amostra B', { bottom: '50%', right: '20%' }, function () {
        onAmostraB();
    });
}

// Lógica da amostra A, de Marie Curie

function onAmostraB() {
    amostraBVista = true;
    limparBotoes();

    cenarioElemento.style.backgroundImage =
        'url(src/images/cenarios/mariecurie/experimento/experimento-cena02.png)';

    if (amostraAVista) {
        // Veio depois da A: mostra o resultado e vai direto pra pergunta ao clicar
        mostrarDialogo('Marie Curie', 'Muito interessante. Esta amostra produziu um resultado diferente no eletroscópio.');

        aoClicarNoDialogo(function () {
            irParaPerguntaFinal();
        });

    } else {
        // Veio antes da A: pede pra clicar na A também
        mostrarDialogo('Marie Curie', 'Muito interessante. Esta amostra produziu um resultado diferente no eletroscópio. Clique na Amostra A.');

        // Mostra só o botão da Amostra A
        criarBotao('Amostra A', { bottom: '50%', left: '20%' }, function () {
            amostraAVista = true;
            limparBotoes();

            cenarioElemento.style.backgroundImage =
                'url(src/images/cenarios/mariecurie/experimento/experimento-cena01.png)';

            mostrarDialogo('Marie Curie', 'Interessante. Parece que esta amostra não afetou o instrumento.');

            aoClicarNoDialogo(function () {
                irParaPerguntaFinal();
            });
        });
    }
}

// Pergunta final do desafio
function irParaPerguntaFinal() {
    cenarioElemento.style.backgroundImage =
        'url(src/images/cenarios/mariecurie/experimento/experimento-cena01.png)';
    mostrarDialogo('Marie Curie', 'Qual das amostras provavelmente contém urânio?');
    mostrarBotoesResposta();
}

// O que os Ids significam

function mostrarCena(indice) {
    const cena = cenas[indice];

    cenarioElemento.style.backgroundImage = `url(${cena.cenario})`;
    limparBotoes();

    if (cena.tipo === 'investigacao') {
        esconderDialogo();
        mostrarBotoesInvestigacao();
        return;
    }

    if (cena.tipo === 'perguntaFinal') {
        irParaPerguntaFinal();
        return;
    }

    if (cena.tipo === 'respostaErrada') {
        aoClicarNoDialogo(function () {
            mostrarDialogo('Marie Curie', 'Observe os resultados novamente. Qual das amostras provocou uma alteração no eletroscópio?');
            mostrarBotoesResposta();
        });
        return;
    }

    // Cena normal com diálogo
    mostrarDialogo(
        cena.falante === 'Jogadora' ? nomeJogadora : (cena.falante ?? ''),
        cena.dialogo ?? ''
    );
}

// Avança para a próxima cena

dialogoElemento.addEventListener('click', function () {
    const cena = cenas[cenaAtual];

    // Cenas especiais são gerenciadas pelas suas próprias funções
    if (cena.tipo) return;

    cenaAtual++;
    if (cenaAtual < cenas.length) {
        mostrarCena(cenaAtual);
    } else {
        finalizarJogo();
    }
});

// ========== Começar o jogo ==========

comecarBotaoElemento.addEventListener('click', function (event) {
    event.preventDefault();

    const inputNome = document.getElementById('nome-jogadora');
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

// ========== Finalizar o jogo ==========

function finalizarJogo() {
    cenaAtual = 0;
    amostraAVista = false;
    amostraBVista = false;
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

    document.getElementById('reiniciar-btn').addEventListener('click', function () {
        overlayElemento.innerHTML = `
            <img src="src/images/logo/logoPreta.png" alt="">
            <form onsubmit="return false">
                <label id="overlay_nome" for="nome">Digite o seu nome:</label>
                <input type="text" id="nome-jogadora" placeholder="Digite o seu nome aqui">
                <button id="comecar-btn" type="button">JOGAR</button>
            </form>
        `;

        document.getElementById('comecar-btn').addEventListener('click', function (event) {
            event.preventDefault();
            const inputNome = document.getElementById('nome-jogadora');
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