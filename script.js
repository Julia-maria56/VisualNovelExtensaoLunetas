// Array que conta com as cenas do jogo
const cenas = [
    {
        cenario: 'src/images/bg1.webp',
        falante: 'Jogadora',
        dialogo: 'Lorem ipsum...',
    },
    {
        cenario: 'src/images/cenarios/mariecurie/experimento/experimento-cena01.png',
        falante: 'Marie Curie',
        dialogo: 'Quando estiver pronta, pode começar.',
    },
      {
        cenario: 'src/images/cenarios/mariecurie/experimento/experimento-cena01.png',
        mostrarDialogo: false,
        botoes: [
            {
                texto: 'Amostra A',
                posicao: { bottom: '30%', left: '20%' },
                acao: 'amostraA'
            },
            {
                texto: 'Amostra B',
                posicao: { bottom: '30%', right: '20%' },
                acao: 'amostraB'
            }
        ]
    },
    // cena da amostra B (índice 3)
    {
        cenario: 'src/images/cenarios/mariecurie/experimento/experimento-cena02.png',
        falante: 'Marie Curie',
        dialogo: 'Muito interessante. Esta amostra produziu um resultado diferente.',
        mostrarDialogo: true,
        botoes: [
            {
                texto: 'Amostra A',
                posicao: { bottom: '30%', left: '20%' },
                acao: 'amostraA'
            },
            {
                texto: 'Amostra B',
                posicao: { bottom: '30%', right: '20%' },
                acao: 'amostraB'
            }
        ]
    },
    // cena da pergunta final (índice 4)
    {
        cenario: 'src/images/cenarios/mariecurie/experimento/experimento-cena01.png',
        falante: 'Marie Curie',
        dialogo: 'Qual das amostras provavelmente contém urânio?',
        mostrarDialogo: true,
        botoes: [
            {
                texto: 'Amostra A',
                posicao: { bottom: '30%', left: '20%' },
                proximaCena: 5
            },
            {
                texto: 'Amostra B',
                posicao: { bottom: '30%', right: '20%' },
                proximaCena: 6
            }
        ]
    },
    // índice 5 - resposta ERRADA (Amostra A)
    {
        cenario: 'src/images/cenarios/mariecurie/experimento/experimento-cena01.png',
        falante: 'Marie Curie',
        dialogo: 'Observe os resultados novamente.',
        mostrarDialogo: true,
        proximaFala: {
            falante: 'Marie Curie',
            dialogo: 'Qual das amostras provocou uma alteração no eletroscópio?',
            botoes: [
                {
                    texto: 'Amostra A',
                    posicao: { bottom: '30%', left: '20%' },
                    proximaCena: 5
                },
                {
                    texto: 'Amostra B',
                    posicao: { bottom: '30%', right: '20%' },
                    proximaCena: 6
                }
            ]
        }
    },
    // índice 6 - resposta CERTA (Amostra B)
    {
        cenario: 'src/images/cenarios/mariecurie/experimento/enquadramento-laboratorio.png',
        falante: 'Marie Curie',
        dialogo: ' Excelente observação! A Amostra B provavelmente contém urânio.',
        mostrarDialogo: true,
    },
];

// Nessa parte, relacionamos os elementos do HTML ao Javascript
const cenarioElemento = document.getElementById('cenario');
const caixaDeDialogoElemento = document.getElementById('caixa-de-dialogo');
const falanteElemento = document.getElementById('falante');
const dialogoElemento = document.getElementById('dialogo');
const overlayElemento = document.getElementById('overlay');
const jogoElemento = document.getElementById('jogo');
const comecarBotaoElemento = document.getElementById('comecar-btn');
const botoesCenaElemento = document.getElementById('botoes-cena');


// Variável que guarda o índice de cada cena
let cenaAtual = 0;
let nomeJogadora = "";

let amostraAVista = false;
let amostraBVista = false;

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
    const cena = cenas[indice];

    cenarioElemento.style.backgroundImage = `url(${cena.cenario})`;

    if (cena.mostrarDialogo === false) {
        caixaDeDialogoElemento.style.display = 'none';
    } else {
        caixaDeDialogoElemento.style.display = 'flex';

        if (cena.falante === 'Jogadora') {
            falanteElemento.textContent = nomeJogadora;
        } else {
            falanteElemento.textContent = cena.falante ?? '';
        }

        dialogoElemento.textContent = cena.dialogo ?? '';
    }

    botoesCenaElemento.innerHTML = '';

    botoesCenaElemento.innerHTML = '';

    if (cena.botoes) {
        cena.botoes.forEach(function (botao) {
            const btn = document.createElement('button');
            btn.textContent = botao.texto;
            btn.classList.add('botao-cena');
            Object.assign(btn.style, botao.posicao);

            btn.addEventListener('click', function () {
                if (botao.acao === 'amostraA') {
                    amostraAVista = true;
                    caixaDeDialogoElemento.style.display = 'flex';
                    falanteElemento.textContent = 'Marie Curie';
                    dialogoElemento.textContent = 'Interessante. Parece que esta amostra não afetou o instrumento.';

                    if (amostraAVista && amostraBVista) {
                        setTimeout(function () {
                            cenaAtual = 4;
                            mostrarCena(cenaAtual);
                        }, 2500);
                    }

                } else if (botao.acao === 'amostraB') {
                    amostraBVista = true;
                    cenaAtual = 3;
                    mostrarCena(cenaAtual);

                    if (amostraAVista && amostraBVista) {
                        setTimeout(function () {
                            cenaAtual = 4;
                            mostrarCena(cenaAtual);
                        }, 2500);
                    }

                } else {
                    cenaAtual = botao.proximaCena;
                    mostrarCena(cenaAtual);
                }
            });

            botoesCenaElemento.appendChild(btn);
        });
    }

    // Se a cena tem uma segunda fala encadeada, mostra após clique no diálogo
    if (cena.proximaFala) {
        const falaEncadeada = cena.proximaFala;

        dialogoElemento.addEventListener('click', function handler() {
            falanteElemento.textContent = falaEncadeada.falante;
            dialogoElemento.textContent = falaEncadeada.dialogo;

            // Troca os botões se a próxima fala tiver os seus próprios
            if (falaEncadeada.botoes) {
                botoesCenaElemento.innerHTML = '';
                falaEncadeada.botoes.forEach(function (botao) {
                    const btn = document.createElement('button');
                    btn.textContent = botao.texto;
                    btn.classList.add('botao-cena');
                    Object.assign(btn.style, botao.posicao);

                    btn.addEventListener('click', function () {
                        cenaAtual = botao.proximaCena;
                        mostrarCena(cenaAtual);
                    });

                    botoesCenaElemento.appendChild(btn);
                });
            }

            // Remove o listener para não acumular
            dialogoElemento.removeEventListener('click', handler);
        }, { once: true });
    }
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