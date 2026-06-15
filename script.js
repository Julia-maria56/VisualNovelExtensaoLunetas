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
        id: "experimentoRosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Falando em DNA, queria te mostrar algo."

    },

    {
        id: "rosalindDNA",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena1.png",
        falante: "Rosalind Franklin",
        dialogo: "Na bancada, temos um morango, uma solução de lise, um filtro, um álcool em gel e um recipiente. Precisaremos de tudo isso para o nosso experimento."
    },
    {
        id: "rosalindDNA",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena1.png",
        falante: "Rosalind Franklin",
        dialogo: "Vamos tentar encontrar o DNA que está escondido dentro deste morango. Para isso, precisamos seguir algumas etapas. Pode começar amassando o morango e adicionando a solução de lise no recipiente."
    },

    {
        id: "experimentoInicio",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena2.png",
        tipo: "amassar"
    },

    {
        id: "experimentoMisturar",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena3.png",
        tipo: "misturar"
    },

    {
        id: "experimentoFiltrar",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena4.png",
        tipo: "filtrar"
    },

    {
        id: "experimentoAdicionar",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena5.png",
        tipo: "adicionar"
    },

    {
        id: "perguntaDNA",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena6.png",
        tipo: "perguntaDNA"
    },

    {
        id: "finalDNA",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena6.png",
        falante: "Rosalind Franklin",
        dialogo: "Muito bem! Esse material esbranquiçado é o DNA. Eu trabalho estudando essa substância e tentando descobrir como ela é organizada."
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
let listenerDialogoAtual = null;
let processandoClique = false;

// ========== Funções auxiliares ==========

// Procura uma cena pelo ID
function irParaCena(id) {
    const indice = cenas.findIndex(cena => cena.id === id);

    if (indice === -1) {
        console.error(`Cena "${id}" não encontrada.`);
        return;
    } else {
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
    } else if (falante === 'Rosalind Franklin') {
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
    if (listenerDialogoAtual) {
        dialogoElemento.removeEventListener(
            'click',
            listenerDialogoAtual
        );
    }

    listenerDialogoAtual = callback;

    dialogoElemento.addEventListener(
        'click',
        listenerDialogoAtual,
        { once: true }
    );
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

// ─── Botões do experimento Rosalind ───────────────────────────────

function mostrarBotaoAmassar() {

    limparBotoes();

    criarBotao(
        "AMASSAR",
        {
            bottom: "40%",
            left: "20%"
        },
        function () {

            cenaAtual++;
            mostrarCena(cenaAtual);

        }
    );
}


function mostrarBotaoMisturar() {

    limparBotoes();

    criarBotao(
        "MISTURAR",
        {
            bottom: "40%",
            left: "30%"
        },
        function () {

            cenaAtual++;

            mostrarCena(cenaAtual);

        }
    );
}


function mostrarBotaoFiltrar() {
    esconderDialogo();
    limparBotoes();

    criarBotao(
        "FILTRAR",
        {
            bottom: "40%",
            left: "40%"
        },
        function () {

            cenaAtual++;
            mostrarCena(cenaAtual);

        }
    );
}


function mostrarBotaoAdicionar() {

    limparBotoes();

    criarBotao(
        "ADICIONAR",
        {
            bottom: "40%",
            left: "55%"
        },
        function () {

            cenaAtual++;
            mostrarCena(cenaAtual);

        }
    );
}

function mostrarBotoesDNA() {
    esconderDialogo();
    limparBotoes();


    // Líquido rosado - errado
    criarBotao(
        "Líquido rosado",
        {
            bottom: "50%",
            left: "50%"
        },
        function () {
            limparBotoes()
            mostrarDialogo(
                "Rosalind Franklin",
                "Não tenho certeza se este é o correto. O DNA aparece como um material esbranquiçado após a adição do álcool."
            );


            aoClicarNoDialogo(function () {

                mostrarBotoesDNA();

            });

        }
    );


    // Sementes - errado
    criarBotao(
        "Sementes",
        {
            bottom: "32%",
            left: "50%"
        },
        function () {

            limparBotoes();
            mostrarDialogo(
                "Rosalind Franklin",
                "Não tenho certeza se este é o correto. O DNA aparece como um material esbranquiçado após a adição do álcool."
            );


            aoClicarNoDialogo(function () {

                mostrarBotoesDNA();

            });

        }
    );


    // Nuvem branca - certo
    criarBotao(
        "Nuvem branca",
        {
            bottom: "70%",
            right: "32%"
        },
        function () {

            limparBotoes();
            esconderDialogo();

            listenerDialogoAtual = null;
            limparBotoes();
            irParaCena("finalDNA");
        }

    );

}

// O que os Ids significam

function mostrarCena(indice) {
    const cena = cenas[indice];

    cenarioElemento.style.backgroundImage = `url(${cena.cenario})`;
    limparBotoes();

    // Experimento Rosalind DNA

    if (cena.tipo === "amassar") {

        esconderDialogo();

        mostrarBotaoAmassar();

        return;
    }


    if (cena.tipo === "misturar") {

        esconderDialogo();

        mostrarBotaoMisturar();

        return;
    }


    if (cena.tipo === "filtrar") {

        limparBotoes();

        mostrarDialogo(
            "Rosalind Franklin",
            "A lise dissolve as membranas celulares, liberando o material que existe dentro delas, incluindo o DNA. O próximo passo é remover os pedaços maiores que podem atrapalhar nossa observação. Para isso, vamos filtrar a solução."
        );


        aoClicarNoDialogo(function () {

            mostrarBotaoFiltrar();

        });


        return;
    }


    if (cena.tipo === "adicionar") {

        esconderDialogo();

        mostrarBotaoAdicionar();

        return;
    }

    if (cena.tipo === "perguntaDNA") {


        mostrarDialogo(
            "Rosalind Franklin",
            "Observe com atenção. Qual das partes você acha que é o DNA?"
        );


        aoClicarNoDialogo(function () {

            mostrarBotoesDNA();

        });


        return;
    }

    // Experimento Marie Curie Eletroscópio

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