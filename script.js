// Array que conta com as cenas do jogo
const cenas = [
    // índice 0
    {
        cenario: 'src/images/bg1.webp',
        falante: 'Jogadora',
        dialogo: 'Lorem ipsum...',
    },
    // índice 1
    {
        cenario: 'src/images/cenarios/mariecurie/experimento/experimento-cena01.png',
        falante: 'Marie Curie',
        dialogo: 'Quando estiver pronta, pode começar. Clique na amostra que você deseja analisar primeiro.',
    },
    // índice 2 - cena dos botões de investigação
    {
        cenario: 'src/images/cenarios/mariecurie/experimento/experimento-cena01.png',
        tipo: 'investigacao',
    },
    // índice 3 - pergunta final
    {
        cenario: 'src/images/cenarios/mariecurie/experimento/experimento-cena01.png',
        tipo: 'perguntaFinal',
    },
    // índice 4 - resposta errada
    {
        cenario: 'src/images/cenarios/mariecurie/experimento/experimento-cena01.png',
        tipo: 'respostaErrada',
    },
    // índice 5 - resposta certa
    {
        cenario: 'src/images/cenarios/mariecurie/experimento/experimento-cena01.png',
        falante: 'Marie Curie',
        dialogo: 'Excelente observação! A Amostra B provavelmente contém urânio.',
    },
];

// Relacionamos os elementos do HTML ao Javascript
const cenarioElemento = document.getElementById('cenario');
const caixaDeDialogoElemento = document.getElementById('caixa-de-dialogo');
const falanteElemento = document.getElementById('falante');
const dialogoElemento = document.getElementById('dialogo');
const overlayElemento = document.getElementById('overlay');
const botoesCenaElemento = document.getElementById('botoes-cena');
const comecarBotaoElemento = document.getElementById('comecar-btn');

let cenaAtual = 0;
let nomeJogadora = "";
let amostraAVista = false;
let amostraBVista = false;

// ─── Funções auxiliares ───────────────────────────────────────────

function mostrarDialogo(falante, dialogo) {
    caixaDeDialogoElemento.style.display = 'flex';
    falanteElemento.textContent = falante;
    dialogoElemento.textContent = dialogo;
}

function esconderDialogo() {
    caixaDeDialogoElemento.style.display = 'none';
}

function limparBotoes() {
    botoesCenaElemento.innerHTML = '';
}

// Cria um botão no cenário
function criarBotao(texto, posicao, onClick) {
    const btn = document.createElement('button');
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

// ─── Botões reutilizáveis ─────────────────────────────────────────

function mostrarBotoesInvestigacao() {
    limparBotoes();
    criarBotao('Amostra A', { bottom: '50%', left: '20%' }, onAmostraA);
    criarBotao('Amostra B', { bottom: '50%', right: '20%' }, onAmostraB);
}

function mostrarBotoesResposta() {
    limparBotoes();
    criarBotao('Amostra A', { bottom: '50%', left: '20%' }, function () {
        // Errou
        mostrarDialogo('Marie Curie', 'Lembre dos resultados novamente.');
        aoClicarNoDialogo(function () {
            mostrarDialogo('Marie Curie', 'Qual das amostras provocou uma alteração no eletroscópio?');
            mostrarBotoesResposta();
        });
    });
    criarBotao('Amostra B', { bottom: '50%', right: '20%' }, function () {
        // Acertou
        cenaAtual = 5;
        mostrarCena(cenaAtual);
    });
}

// ─── Ações das amostras ───────────────────────────────────────────

function onAmostraA() {
    amostraAVista = true;
    limparBotoes();
    mostrarDialogo('Marie Curie', 'Interessante. Parece que esta amostra não afetou o instrumento. Agora, clique na Amostra B.');

    // Mostra só o botão da Amostra B
    criarBotao('Amostra B', { bottom: '50%', right: '20%' }, function () {
        onAmostraB();
    });
}

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

function irParaPerguntaFinal() {
    cenarioElemento.style.backgroundImage =
        'url(src/images/cenarios/mariecurie/experimento/experimento-cena01.png)';
    mostrarDialogo('Marie Curie', 'Qual das amostras provavelmente contém urânio?');
    mostrarBotoesResposta();
}

// ─── Mostrar cena ─────────────────────────────────────────────────

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
        mostrarDialogo('Marie Curie', '(CONT\'D) Observe os resultados novamente.');
        aoClicarNoDialogo(function () {
            mostrarDialogo('Marie Curie', '(CONT\'D) Qual das amostras provocou uma alteração no eletroscópio?');
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

// ─── Listener global de clique no diálogo (avança cenas normais) ──

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

// ─── Iniciar jogo ─────────────────────────────────────────────────

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

// ─── Finalizar jogo ───────────────────────────────────────────────

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