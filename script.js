// Array que conta com as cenas do jogo


// id: identificador do tipo de cena.
// cenario: imagem de fundo
// falante: personagem que fala
// dialogo: texto exibido
// tipo: indica cenas especiais
const cenas = [
    {
        id: "intro",
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Jogadora",
        dialogo: "Eu acho que ciência não é para mim"
    },
    {
        id: "intro",
        cenario: "src/images/cenarios/mariecurie/protagonistaempe.png",
        falante: "Marie Curie",
        dialogo: "Eu trabalho com radioatividade."
    },

    {
        id: "experimentoRosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Falando em DNA, queria te mostrar algo."

    },

    {
        id: "DNARosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena1.png",
        falante: "Rosalind Franklin",
        dialogo: "Na bancada, temos um morango, uma solução de lise, um filtro, um álcool em gel e um recipiente. Precisaremos de tudo isso para o nosso experimento."
    },
    {
        id: "DNARosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena1.png",
        falante: "Rosalind Franklin",
        dialogo: "Vamos tentar encontrar o DNA que está escondido dentro deste morango. Para isso, precisamos seguir algumas etapas. Pode começar amassando o morango e adicionando a solução de lise no recipiente."
    },

    {
        id: "experimentoInicioRosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena2.png",
        tipo: "amassarRosalind"
    },

    {
        id: "experimentoMisturarRosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena3.png",
        tipo: "misturarRosalind"
    },

    {
        id: "experimentoFiltrarRosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena4.png",
        tipo: "filtrarRosalind"
    },

    {
        id: "experimentoAdicionarRosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena5.png",
        tipo: "adicionarRosalind"
    },

    {
        id: "perguntaDNARosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena6.png",
        tipo: "perguntaDNARosalind"
    },

    {
        id: "finalDNARosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena6.png",
        falante: "Rosalind Franklin",
        dialogo: "Muito bem! Esse material esbranquiçado é o DNA. Eu trabalho estudando essa substância e tentando descobrir como ela é organizada."
    },

    {
        id: "explicacaoMarie",
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Quando estiver pronta, pode começar."
    },

    {
        id: "investigacaoMarie",
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        tipo: "investigacaoMarie"
    },

    {
        id: "perguntaFinalMarie",
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        tipo: "perguntaFinalMarie"
    },

    {
        id: "respostaErradaMarie",
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        tipo: "respostaErradaMarie"
    },

    {
        id: "respostaCertaMarie",
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Excelente observação! Logo, a Amostra B provavelmente contém urânio."
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
let cenaAtual = 0; // índice da cena atualmente exibida no array "cenas"
let nomeJogadora = ""; // nome digitado pela jogadora, usado para personalizar o diálogo
let amostraAMarieFoiAnalisada = false; // Indica se a Amostra A da Marie já foi observada
let amostraBMarieFoiAnalisada = false; // Indica se a Amostra B da Marie já foi observada 
let listenerDialogoAtual = null; // guarda referência do listener de clique atual no diálogo, para poder removê-lo depois

// ========== Funções auxiliares ==========

// Procura uma cena pelo ID e navega até ela
function irParaCena(id) {
    const indice = cenas.findIndex(cena => cena.id === id); // procura no array a cena cujo id corresponde ao parâmetro

    if (indice === -1) { // se não encontrou nenhuma cena com esse id
        console.error(`Cena "${id}" não encontrada.`); // exibe erro no console para ajudar a debugar
        return; // interrompe a função sem fazer nada
    } else {
        cenaAtual = indice; // atualiza a cena atual para o índice encontrado
        mostrarCena(cenaAtual); // exibe a cena correspondente na tela
    }
}

// // Altera o rosto do personagem na caixa de diálogo de acordo com quem está falando
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
    caixaDeDialogoElemento.style.display = 'flex'; // garante que a caixa de diálogo esteja visível
    falanteElemento.textContent = falante; // define o nome de quem está falando
    dialogoElemento.textContent = dialogo; // define o texto da fala
    trocarRostoPersonagem(falante); // atualiza o retrato de acordo com o falante
}

// Esconde a caixa de diálogo
function esconderDialogo() {
    caixaDeDialogoElemento.style.display = 'none'; // oculta o elemento da caixa de diálogo
}

// Remove os botões da tela
function limparBotoes() {
    botoesCenaElemento.innerHTML = '';  // esvazia o container de botões, removendo qualquer botão existente
}

// Cria um botão no cenário
function criarBotao(texto, posicao, onClick) {
    const btn = document.createElement('button'); // cria um novo elemento <button> via JavaScript
    btn.textContent = texto; // define o texto exibido no botão
    btn.classList.add('botao-cena'); // adiciona a classe CSS padrão dos botões de cena
    Object.assign(btn.style, posicao); // aplica o objeto de posição (ex: { bottom: '40%', left: '20%' }) como estilos inline
    btn.addEventListener('click', onClick); // associa a função de clique passada como parâmetro
    botoesCenaElemento.appendChild(btn); // insere o botão no container de botões da cena
}

// Aguarda um clique no diálogo e executa a função de callback (substitui o listener anterior, se existir)
function aoClicarNoDialogo(callback) {
    if (listenerDialogoAtual) { // se já existe um listener anterior registrado
        dialogoElemento.removeEventListener( // remove o listener antigo
            'click',
            listenerDialogoAtual
        );
    }
 
    listenerDialogoAtual = callback; // guarda a nova função como o listener atual
 
    dialogoElemento.addEventListener( // registra o novo listener no elemento de diálogo
        'click',
        listenerDialogoAtual,
        { once: true } // a função executa apenas uma vez e depois é automaticamente removida
    );
}

// ========= Botões reutilizáveis ==========

// Mostra os botões "Amostra A" e "Amostra B" durante a etapa de investigação da Marie
function mostrarBotoesInvestigacaoMarie() {
    limparBotoes(); // remove botões anteriores
    criarBotao('Amostra A', { bottom: '50%', left: '20%' }, analisarAmostraAMarie); // cria botão da Amostra A, posicionado à esquerda
    criarBotao('Amostra B', { bottom: '50%', right: '20%' }, analisarAmostraBMarie); // cria botão da Amostra B, posicionado à direita
}

// Mostra os botões das amostras na etapa de resposta final (pergunta sobre qual contém urânio)
function mostrarBotoesRespostaMarie() {
    limparBotoes(); // remove botões anteriores
 
    criarBotao( // cria o botão da Amostra A (resposta incorreta)
        'Amostra A',
        { bottom: '50%', left: '20%' },
        function () { // ao clicar na Amostra A...
 
            mostrarDialogo( // mostra um diálogo pedindo para reconsiderar
                'Marie Curie',
                'Lembre dos resultados novamente. Qual das amostras provocou uma alteração no eletroscópio?'
            );
 
            // (obs: aqui não há aoClicarNoDialogo nem nova chamada de botões, o fluxo fica parado até o jogador clicar em Amostra B)
 
        }
    );
 
    criarBotao( // cria o botão da Amostra B (resposta correta)
        'Amostra B',
        { bottom: '50%', right: '20%' },
        function () { // ao clicar na Amostra B...
 
            irParaCena("respostaCertaMarie"); // navega para a cena de resposta correta
 
        }
    );
}

// Lógica da amostra A, de Marie Curie
function analisarAmostraAMarie() {
    amostraAMarieFoiAnalisada = true; // marca que a Amostra A já foi analisada
    limparBotoes(); // remove os botões atuais
    mostrarDialogo('Marie Curie', 'Interessante. Parece que esta amostra não afetou o instrumento. Agora, clique na Amostra B.'); // explica o resultado e pede para analisar a Amostra B
 
    // Mostra só o botão da Amostra B
    criarBotao('Amostra B', { bottom: '50%', right: '20%' }, function () { // cria o botão da Amostra B
        analisarAmostraBMarie();; // ao clicar, chama a análise da Amostra B (ponto e vírgula duplicado é só um detalhe de sintaxe sem efeito)
    });
}

// Lógica da amostra A, de Marie Curie

function analisarAmostraBMarie() {
    amostraBMarieFoiAnalisada = true; // marca que a Amostra B já foi analisada
    limparBotoes(); // remove os botões atuais
 
    cenarioElemento.style.backgroundImage = // troca o cenário de fundo
        'url(src/images/cenarios/mariecurie/experimento/experimento-cena02.png)'; // para a imagem da segunda cena do experimento
 
    if (amostraAMarieFoiAnalisada) { // se a Amostra A já havia sido analisada antes...
        // Veio depois da A: mostra o resultado e vai direto pra pergunta ao clicar
        mostrarDialogo('Marie Curie', 'Muito interessante. Esta amostra produziu um resultado diferente no eletroscópio.'); // mostra o resultado da Amostra B
 
        aoClicarNoDialogo(function () { // ao clicar no diálogo...
            mostrarPerguntaFinalMarie() // avança direto para a pergunta final
        });
 
    } else { // se a Amostra A ainda não foi analisada...
        // Veio antes da A: pede pra clicar na A também
        mostrarDialogo('Marie Curie', 'Muito interessante. Esta amostra produziu um resultado diferente no eletroscópio. Clique na Amostra A.'); // mostra resultado da B e pede para verificar a A
 
        // Mostra só o botão da Amostra A
        criarBotao('Amostra A', { bottom: '50%', left: '20%' }, function () { // cria botão da Amostra A
            amostraAMarieFoiAnalisada = true; // marca a Amostra A como analisada
            limparBotoes(); // remove os botões
 
            cenarioElemento.style.backgroundImage = // volta o cenário de fundo
                'url(src/images/cenarios/mariecurie/experimento/experimento-cena01.png)'; // para a imagem da primeira cena do experimento
 
            mostrarDialogo('Marie Curie', 'Interessante. Parece que esta amostra não afetou o instrumento.'); // mostra o resultado da Amostra A
 
            aoClicarNoDialogo(function () { // ao clicar no diálogo...
                mostrarPerguntaFinalMarie() // avança para a pergunta final
            });
        });
    }
}

// Pergunta final do desafio
function mostrarPerguntaFinalMarie() {
    cenarioElemento.style.backgroundImage = // garante que o cenário volte à imagem original
        'url(src/images/cenarios/mariecurie/experimento/experimento-cena01.png)'; // imagem da primeira cena do experimento
    mostrarDialogo('Marie Curie', 'Qual das amostras provavelmente contém urânio?'); // exibe a pergunta final
    mostrarBotoesRespostaMarie(); // exibe os botões de resposta (Amostra A / Amostra B)
}

// ========== Botões do experimento Rosalind ==========

function mostrarBotaoAmassarRosalind() {

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


function mostrarBotaoMisturarRosalind() {

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


function mostrarBotaoFiltrarRosalind() {
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


function mostrarBotaoAdicionarRosalind() {

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
            irParaCena("finalDNARosalind");
        }

    );

}

// Função central que controla a exibição de cada cena, com base no índice recebido

function mostrarCena(indice) {
    const cena = cenas[indice]; // obtém o objeto da cena correspondente ao índice
 
    cenarioElemento.style.backgroundImage = `url(${cena.cenario})`; // atualiza a imagem de fundo conforme a cena
    limparBotoes(); // remove qualquer botão que estivesse na tela anteriormente
 
    // Experimento Rosalind DNA
 
    if (cena.tipo === "amassarRosalind") { // se a cena for do tipo "amassar"
 
        esconderDialogo(); // esconde a caixa de diálogo
 
        mostrarBotaoAmassarRosalind(); // mostra o botão de amassar
 
        return; // encerra a função aqui, sem processar diálogo normal
    }
 
 
    if (cena.tipo === "misturarRosalind") { // se a cena for do tipo "misturar"
 
        esconderDialogo(); // esconde a caixa de diálogo
 
        mostrarBotaoMisturarRosalind(); // mostra o botão de misturar
 
        return; // encerra a função
    }
 
 
    if (cena.tipo === "filtrarRosalind") { // se a cena for do tipo "filtrar"
 
        limparBotoes(); // garante que não há botões na tela
 
        mostrarDialogo( // mostra explicação sobre o processo de lise/filtragem
            "Rosalind Franklin",
            "A lise dissolve as membranas celulares, liberando o material que existe dentro delas, incluindo o DNA. O próximo passo é remover os pedaços maiores que podem atrapalhar nossa observação. Para isso, vamos filtrar a solução."
        );
 
        aoClicarNoDialogo(function () { // ao clicar no diálogo (após ler a explicação)... 
            mostrarBotaoFiltrarRosalind(); // mostra o botão de filtrar
        });
 
 
        return; // encerra a função
    }
 
 
    if (cena.tipo === "adicionarRosalind") { // se a cena for do tipo "adicionar"
 
        esconderDialogo(); // esconde a caixa de diálogo
        mostrarBotaoAdicionarRosalind(); // mostra o botão de adicionar
        return; // encerra a função
    }
 
    if (cena.tipo === "perguntaDNARosalind") { // se a cena for a pergunta sobre qual parte é o DNA
        mostrarDialogo( // mostra a pergunta
            "Rosalind Franklin",
            "Observe com atenção. Qual das partes você acha que é o DNA?"
        );
 
        aoClicarNoDialogo(function () { // ao clicar no diálogo (após ler a pergunta)...
            mostrarBotoesDNA(); // mostra as opções de resposta
 
        });
 
        return; // encerra a função
    }
 
    // Experimento Marie Curie Eletroscópio
 
    if (cena.tipo === 'investigacaoMarie') { // se a cena for a etapa de investigação das amostras
        esconderDialogo(); // esconde a caixa de diálogo
        mostrarBotoesInvestigacaoMarie(); // mostra os botões "Amostra A" e "Amostra B"
        return; // encerra a função
    }
 
    if (cena.tipo === 'perguntaFinalMarie') { // se a cena for a pergunta final
        mostrarPerguntaFinalMarie() // chama a função que monta a pergunta e os botões de resposta
        return; // encerra a função
    }
 
    if (cena.tipo === 'respostaErradaMarie') { // se a cena for de tratamento de resposta errada
        aoClicarNoDialogo(function () { // ao clicar no diálogo...
            mostrarDialogo('Marie Curie', 'Observe os resultados novamente. Qual das amostras provocou uma alteração no eletroscópio?'); // repete a pergunta com uma dica
            mostrarBotoesRespostaMarie(); // mostra novamente os botões de resposta
        });
        return; // encerra a função
    }
 
    // Cena normal com diálogo
    mostrarDialogo( // para cenas sem "tipo" especial, mostra o diálogo normalmente
        cena.falante === 'Jogadora' ? nomeJogadora : (cena.falante ?? ''), // se o falante for "Jogadora", usa o nome digitado; senão usa o nome do falante (ou string vazia se não houver)
        cena.dialogo ?? '' // usa o texto do diálogo, ou string vazia se não houver
    );
}
 
// Avança para a próxima cena ao clicar na caixa de diálogo
 
dialogoElemento.addEventListener('click', function () { // registra um listener de clique permanente no elemento de diálogo
    const cena = cenas[cenaAtual]; // obtém a cena atual
 
    // Cenas especiais são gerenciadas pelas suas próprias funções
    if (cena.tipo) return; // se a cena tiver um "tipo" especial, não faz nada aqui (o controle é feito por outras funções/listeners)
 
    cenaAtual++; // avança o índice da cena
    if (cenaAtual < cenas.length) { // se ainda existem cenas no array...
        mostrarCena(cenaAtual); // exibe a próxima cena
    } else { // se chegou ao fim do array...
        finalizarJogo(); // finaliza o jogo
    }
});

// ========== Começar o jogo ==========

comecarBotaoElemento.addEventListener('click', function (event) { // registra o clique no botão "JOGAR"
    event.preventDefault(); // previne o comportamento padrão (ex: envio de formulário)
 
    const inputNome = document.getElementById('nome-jogadora'); // obtém o campo de input do nome
    nomeJogadora = inputNome.value.trim(); // armazena o nome digitado, removendo espaços extras
 
    if (nomeJogadora === '') { // se o nome estiver vazio...
        alert('Digite seu nome para começar!'); // exibe um alerta pedindo o nome
        inputNome.focus(); // coloca o foco de volta no campo de input
        return; // interrompe a função, não inicia o jogo
    }
 
    overlayElemento.style.display = 'none'; // esconde a tela de overlay (tela inicial)
    caixaDeDialogoElemento.style.display = 'flex'; // exibe a caixa de diálogo
    mostrarCena(cenaAtual); // exibe a primeira cena do jogo (cenaAtual = 0)
});

// ========== Finalizar o jogo ==========

function finalizarJogo() {
    cenaAtual = 0; // reseta o índice da cena para o início
    amostraAMarieFoiAnalisada = false; // reseta o estado da Amostra A
    amostraBMarieFoiAnalisada = false; // reseta o estado da Amostra B
    cenarioElemento.style.backgroundImage = 'none'; // remove a imagem de fundo da cena
    caixaDeDialogoElemento.style.display = 'none'; // esconde a caixa de diálogo
    overlayElemento.style.display = 'flex'; // exibe a tela de overlay (tela final)
    overlayElemento.innerHTML = ` 
        <img src="src/images/logo/logoPreta.png" alt=""> 
        <p id="mensagem-final">Parabéns! Você completou o jogo!</p> 
        <div class="jogar-novamente"> 
            <p id="jogar-novamente-msg">Deseja jogar novamente?</p> 
            <button id="reiniciar-btn">Jogar novamente</button> 
        </div>
    `;
 
    document.getElementById('reiniciar-btn').addEventListener('click', function () { // registra o clique no botão "Jogar novamente"
        overlayElemento.innerHTML = ` 
            <img src="src/images/logo/logoPreta.png" alt=""> 
            <form onsubmit="return false"> 
                <label id="overlay_nome" for="nome">Digite o seu nome:</label> 
                <input type="text" id="nome-jogadora" placeholder="Digite o seu nome aqui"> 
                <button id="comecar-btn" type="button">JOGAR</button> 
            </form>
        `;
 
        document.getElementById('comecar-btn').addEventListener('click', function (event) { // registra o clique no novo botão "JOGAR"
            event.preventDefault(); // previne comportamento padrão
            const inputNome = document.getElementById('nome-jogadora'); // obtém o novo campo de input
            nomeJogadora = inputNome.value.trim(); // armazena o novo nome digitado
 
            if (nomeJogadora === '') { // se o nome estiver vazio...
                alert('Digite seu nome para começar!'); // exibe alerta
                inputNome.focus(); // foca no campo
                return; // interrompe a função
            }
 
            overlayElemento.style.display = 'none'; // esconde o overlay
            caixaDeDialogoElemento.style.display = 'flex'; // exibe a caixa de diálogo
            mostrarCena(cenaAtual); // reinicia o jogo a partir da cena 0
        });
    });
}