// Array que conta com as cenas do jogo


// id: identificador do tipo de cena.
// cenario: imagem de fundo
// falante: personagem que fala
// dialogo: texto exibido
// tipo: indica cenas especiais

//os ids só são importantes se você estiver usando a função irParaCena().
// function irParaCena(id) {
//     const indice = cenas.findIndex(cena => cena.id === id);
//     if (indice === -1) {
//         console.error(`Cena "${id}" não encontrada.`);
//         return;
//     }
//     cenaAtual = indice;
//     mostrarCena(cenaAtual);
// }
// Ela procura uma cena pelo valor do id e pula diretamente para ela.


// No caso, nem todas as cenas precisam de id - nem de tipo. Então, você cria as cenas só com:
// {
//         cenario: ,
//         falante: ,
//         dialogo: 
//     },



const cenas = [
    //Escola

    {
        cenario: "src/images/cenarios/adalovelace/escritorioAda.png",
        falante: "Professora",
        dialogo: "Desde muito tempo, homens e mulheres dedicam suas vidas à ciência para entender o mundo e criar coisas que antes pareciam impossíveis."
    },

    {
        cenario: "src/images/cenarios/mariecurie/laboratorioMarie.png",
        falante: "Professora",
        dialogo: "Porém, desde que eu iniciei minha carreira, sempre percebi como as conquistas das cientistas mulheres possuem pouco reconhecimento pelas pessoas."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Professora",
        dialogo: "Muitas mulheres fizeram descobertas que mudaram o mundo, mas seus nomes nem sempre aparecem nos livros com o destaque que merecem."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Do que ela está falando? Parece que essa aula nunca acaba…"
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Eu nunca vou entender isso… Ciência definitivamente não é para mim. É apenas decorar fórmulas e fazer contas difíceis."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Finalmente acabou! Agora, posso trocar de sala."
    },

    //Corredor com portas
    {
        id: "corredorEscola",
        cenario: "src/images/cenarios/escola/corredorEscola.png",
    },

    //Clarão
    {
        cenario: "src/images/transicao/clarao.png",
        falante: "Jogadora",
        dialogo: "O que está acontecendo?"
    },


    // Ada Lovelace
    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "Talvez ela saiba o que está acontecendo."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Finalmente você chegou."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "Cheguei?"
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Sim. Eu estava aguardando a sua chegada."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "Aguardando? Mas nós nem nos conhecemos!"
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Talvez não da forma como imagina. Não se preocupe, tudo a seu tempo."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "Você sabe me dizer onde estou? E por que tudo aqui parece tão antigo?"
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Porque este lugar pertence a outra época. Você não está apenas em outro lugar. Você está no passado."
    },

    //  {
    //         cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
    //         falante: "Jogadora",
    //         dialogo: "Outra época?"
    //     },

    //  {
    //         cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
    //         falante: "Ada Lovelace",
    //         dialogo: "Sim. Você não está apenas em outro lugar. Você está no passado."
    //     },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "No passado?! Isso é impossível!"
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Imagino que pareça impossível para você. Mas, neste momento, você está em meu escritório."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "Seu escritório? Então, quem é você?"
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Sou a matemática e escritora Ada Lovelace."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Estou estudando uma máquina capaz de realizar cálculos automaticamente. Mas eu acredito que ela pode fazer muito mais do que apenas resolver contas."
    },
    //Talvez, pudéssemos juntar essas duas falas: "Para isso, escrevo sequências de instruções que dizem à máquina exatamente o que ela deve fazer, passo a passo." e "Essas sequências são chamadas de algoritmos."
    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Para isso, escrevo sequências de instruções que dizem à máquina exatamente o que ela deve fazer, passo a passo. Essas sequências são chamadas de algoritmos."
    },

    //  {
    //         cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
    //         falante: "Ada Lovelace",
    //         dialogo: "Essas sequências são chamadas de algoritmos."
    //     },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "Você é tão importante, por que é tão pouco conhecida?"
    },

    //Talvez, pudéssemos juntar essas duas falas: "Houve diversas mulheres importantes na história do campo das exatas." e  "Porém, devido ao preconceito, muitas de nós não temos o devido reconhecimento."
    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Houve diversas mulheres importantes na história do campo das exatas. Porém, devido ao preconceito, muitas de nós não temos o devido reconhecimento."
    },

    //  {
    //         cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
    //         falante: "Ada Lovelace",
    //         dialogo: "Porém, devido ao preconceito, muitas de nós não temos o devido reconhecimento."
    //     },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "A minha professora fez a mesma observação, mulheres nas áreas das ciências não são muito reconhecidas."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Diga-me... Você acredita que a ordem das coisas realmente importa?"
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "Depende da situação, eu acho."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Às vezes, uma pequena mudança na sequência pode alterar completamente o resultado."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "Então a ordem é mais importante do que parece?"
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Exatamente. Que tal testar isso por conta própria?"
    },

    // Experimento Ada

    // {
    //     cenario: "src/images/cenarios/adalovelace/experimento/experimento.png",
    //     falante: "Ada Lovelace",
    //     dialogo: "Vamos começar o experimento. Você deve começá-lo após a minha autorização."
    // },

    {
        cenario: "src/images/cenarios/adalovelace/experimento/experimento.png",
        falante: "Ada Lovelace",
        dialogo: "Vou lhe explicar o que você deve fazer. Você deve começá-lo após a minha autorização."
    },
    {
        cenario: "src/images/cenarios/adalovelace/experimento/experimento.png",
        falante: "Ada Lovelace",
        dialogo: "Observe o padrão apresentado. Você deverá reproduzi-lo. Para isso, você deverá organizar as oito próximas peças na ordem correta."
    },

    {
        cenario: "src/images/cenarios/adalovelace/experimento/experimento.png",
        falante: "Jogadora",
        dialogo: "E como vou saber qual é a ordem?"
    },

    {
        cenario: "src/images/cenarios/adalovelace/experimento/experimento.png",
        falante: "Ada Lovelace",
        dialogo: "Comece pela primeira forma e observe a sequência. Não tente adivinhar o resultado."
    },

    {
        cenario: "src/images/cenarios/adalovelace/experimento/experimento.png",
        falante: "Jogadora",
        dialogo: "Então preciso apenas repetir o padrão?"
    },

    {
        cenario: "src/images/cenarios/adalovelace/experimento/experimento.png",
        falante: "Ada Lovelace",
        dialogo: "Exatamente. Quando seguimos as instruções corretas, o resultado aparece naturalmente."
    },

    {
        cenario: "src/images/cenarios/adalovelace/experimento/experimento.png",
        falante: "Ada Lovelace",
        dialogo: "Você deverá arrastar os elementos ao lado da caixa para dentro dela. Caso perceba que errou, você pode retirá-los da caixa. Agora tente."
    },
    {
        cenario: "src/images/cenarios/adalovelace/experimento/experimento.png",
        tipo: "experimentoAda"
    },




    // resposta correta para o experimento da Ada

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "Então era só prestar atenção na ordem."
    },

    //Juntar as próximas duas falas
    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Precisamente. As máquinas funcionam da mesma forma, apenas seguem as instruções que recebem."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Você aprendeu algo muito importante hoje: algoritmos são conjuntos de instruções criados para orientar a execução de uma tarefa."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Máquinas também funcionam dessa maneira: executando instruções passo a passo para alcançar um objetivo."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Jogadora",
        dialogo: "Interessante... Eu sempre achei que programação fosse algo muito complicado, mas percebi que começa com algo simples como saber organizar os passos de uma tarefa."
    },

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Exatamente. Infelizmente, nosso tempo está acabando."
    },



    //Amuleto- cena na época da Ada

    {
        cenario: "src/images/cenarios/adalovelace/escritorio-Adamaior.png",
        falante: "Ada Lovelace",
        dialogo: "Antes de você partir, pegue uma coisa no seu bolso."
    },

    {
        cenario: "src/images/cenarios/adalovelace/amuleto.png",
        falante: "Jogadora",
        dialogo: "O que é isso?"
    },
    {
        cenario: "src/images/cenarios/adalovelace/amuletoECristal.png",
        falante: "Ada Lovelace",
        dialogo: "Você vai descobrir. Agora, vou lhe dar um objeto muito importante. Tome cuidado com ele, pois será útil em sua jornada."
    },
    // {
    //     cenario: "src/images/cenarios/adalovelace/amuletoECristal.png",
    //     falante: "Jogadora",
    //     dialogo: "Tome cuidado com ele, pois será útil em sua jornada."
    // },
    {
        cenario: "src/images/cenarios/adalovelace/amuletoComCristal.png",
        falante: "Ada Lovelace",
        dialogo: "{nome}, encaixe este cristal no seu amuleto. Boa viagem!"
    },

    // Tela branca
    {
        cenario: "src/images/transicao/clarao.png",
        falante: "Jogadora",
        dialogo: "Meu Deus! Não acredito que isso está acontecendo de novo!"
    },

    // Marie Curie

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Jogadora",
        dialogo: "Quem será essa?"
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Jogadora",
        dialogo: "Com licença…"
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Olá, {nome}. Você já deve estar familiarizada com a situação e deve me conhecer também."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Jogadora",
        dialogo: "Acho que já vi o seu rosto em um dos meus livros de química."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "É muito bom saber que meu legado seguiu. Eu sou a cientista Marie Curie."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Dedico minha vida ao estudo da radioatividade e, durante minhas pesquisas, descobri dois novos elementos químicos: o polônio e o rádio."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Meus estudos mostram que alguns átomos podem liberar energia espontaneamente."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Chamamos esse fenômeno de radioatividade."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Essa descoberta está transformando a forma como compreendemos a matéria e a energia."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Jogadora",
        dialogo: "Caramba! Isso parece muito importante."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Acredito que você está pronta para a sua próxima descoberta..."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Jogadora",
        dialogo: "Descoberta? E porque preciso usar essas coisas?"
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Não se preocupe, na área das ciências é sempre bem-vindo utilizar equipamentos e vestimentas adequadas."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Esses equipamentos são usados quando estamos no laboratório para garantir a nossa integridade..."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Jogadora",
        dialogo: "Hum... Faz sentido."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Ótimo. Agora que está pronta, quero lhe mostrar algo que tem chamado minha atenção."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Jogadora",
        dialogo: "Mostrar o quê?"
    },

    // experimento Marie Curie
    //  {
    //     tipo: "experimentoMarie",
    //    cenario: "src/images/cenarios/mariecurie/marieempe.png",
    //    falante: "Marie Curie",
    //     dialogo: "Quando estiver pronta, pode começar."
    // },

    //       {
    //      cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
    //        tipo: "investigacaoMarie"
    //   },



    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Na bancada, observe atentamente o eletroscópio. Este aparelho é capaz de detectar pequenas interações elétricas no ambiente."
    },

    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Quando materiais radioativos estão por perto, eles podem modificar o comportamento do ar ao seu redor."
    },

    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Quando ele recebe carga elétrica, as duas folhas ficam com cargas iguais e se repelem, afastando-se uma da outra."
    },
    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Suspeito que uma dessas amostras contenha um elemento radioativo chamado urânio. Mas não se preocupe. Essas doses estão controladas.."

    }, {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Vamos testá-las?"

    },
    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        tipo: "investigacaoMarie"
    },

    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Interessante. Parece que esta amostra não afetou o instrumento."
    },

    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena02.png",
        falante: "Marie Curie",
        dialogo: "Muito interessante. Esta amostra produziu um resultado diferente."
    },

    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Qual das amostras provavelmente contém urânio?"
    },

    // resposta incorreta para o experimento da Marie
    //    {
    //        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
    //        tipo: "respostaErradaMarie"
    //    },


    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        tipo: "respostaErradaMarie",
        falante: "Marie Curie",
        dialogo: "Observe os resultados novamente."
    },

    //  {
    //      cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
    //      tipo: "perguntaFinalMarie"
    //  },

    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
        falante: "Marie Curie",
        dialogo: "Qual das amostras provocou uma alteração no eletroscópio?"
    },
    // resposta correta para o experimento da Marie
    //    {
    //        id: "respostaCertaMarie",
    //        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena01.png",
    //        falante: "Marie Curie",
    //        dialogo: "Excelente observação! Logo, a Amostra B provavelmente contém urânio."
    //    },
    {
        cenario: "src/images/cenarios/mariecurie/experimento/experimento-cena02.png",
        id: "respostaCertaMarie",
        falante: "Marie Curie",
        dialogo: "Excelente observação!"
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "A radiação emitida pelo urânio alterou o ar ao redor do eletroscópio, fazendo suas folhas se moverem."
    },

    // explicação depois do experimento da Marie

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Foi estudando esse tipo de efeito que descobri que alguns elementos liberam energia naturalmente, um fenômeno que chamamos de radioatividade."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Jogadora",
        dialogo: "Como uma mulher tão importante para a humanidade não tem seu devido reconhecimento?"
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "{nome}, não é fácil para as mulheres serem ouvidas na ciência."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Muitas precisam trabalhar dobrado para que suas descobertas sejam levadas a sério."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "Você deve sempre lembrar que observar, pensar, questionar e raciocinar tudo ao nosso redor é a base para o conhecimento científico."
    },

    {
        cenario: "src/images/cenarios/mariecurie/marieempe.png",
        falante: "Marie Curie",
        dialogo: "E também, eu gostaria que ficasse com isto."
    },

    {
        cenario: "src/images/cenarios/mariecurie/amuletoECristal.png",
        falante: "Jogadora",
        dialogo: "Outro cristal?"
    },

    {
        cenario: "src/images/cenarios/mariecurie/amuletoECristal.png",
        falante: "Marie Curie",
        dialogo: "Sim. Agora, coloque-o em seu amuleto. Boa viagem!"
    },

    {
        cenario: "src/images/cenarios/mariecurie/amuletoComCristal.png",
        id: "amuletoCompletoMarie",
        falante: "Jogadora",
        dialogo: "Obrigada, Marie."
    },

    // Tela branca
    {
        cenario: "src/images/transicao/clarao.png",
        falante: "Jogadora",
        dialogo: "Agora tudo está começando a fazer sentido."
    },

    {
        cenario: "src/images/transicao/clarao.png",
        falante: "Jogadora",
        dialogo: "Eu preciso reunir todas essas pedras para descobrir o verdadeiro propósito dessa jornada."
    },
    // Rosalind Franklin
    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Outro laboratório..."
    },
    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Então você deve ser a próxima cientista."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Você não parece surpresa por estar aqui, {nome}."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Na verdade, seria estranho se eu estivesse. Essa já é a terceira vez que sou teletransportada para conhecer uma cientista."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Primeiro, conheci Ada Lovelace, depois, Marie Curie. Então imagine minha curiosidade para descobrir quem vem agora."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Nesse caso, vou me apresentar. Sou Rosalind Franklin."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Confesso que esse nome não me parece familiar."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Não se preocupe. Você não é a primeira pessoa a dizer isso."
    },
    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "E o que você faz?"
    },
    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Sou uma cientista da área da biologia. Dedico minha vida a estudar o DNA utilizando uma técnica chamada difração de raios X."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Uma das imagens que produzo, conhecida como Fotografia 51, traz evidências fundamentais para compreender a estrutura do DNA."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Espera... você ajudou a descobrir a estrutura do DNA?"
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Sim. Essa descoberta está revolucionando a biologia e ajudando os cientistas a compreender melhor como as informações genéticas dos seres vivos são armazenadas e transmitidas."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Então seu nome deve estar em todos os livros de ciências!"
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Gostaria que fosse tão simples. Infelizmente, uma parte do meu trabalho foi compartilhada sem a minha autorização e ajudou outros cientistas a desenvolver o modelo do DNA."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Infelizmente, não recebo tanto reconhecimento pela minha contribuição."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Isso é um absurdo! Primeiro a Ada Lovelace, depois a Marie Curie... E agora você."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Por que tantas mulheres importantes parecem ter sido esquecidas?"
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Nem todas receberam o mesmo reconhecimento ao longo da história. Mas o conhecimento permanece, e isso é o mais importante."
    },

    //experimento Rosalind Franklin
    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Falando em DNA, queria te mostrar algo."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena1.png",
        falante: "Rosalind Franklin",
        dialogo: "Na bancada, temos um morango, uma solução de lise, um filtro, um álcool em gel e um recipiente. Precisaremos de tudo isso para o nosso experimento."
    },
    {
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena1.png",
        falante: "Rosalind Franklin",
        dialogo: "Vamos tentar encontrar o DNA que está escondido dentro deste morango. Para isso, precisamos seguir algumas etapas."
    },
    {
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena1.png",
        falante: "Rosalind Franklin",
        dialogo: "Pode começar amassando o morango e adicionando a solução de lise no recipiente."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena2.png",
        tipo: "amassarRosalind"
    },



    {
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena3.png",
        tipo: "misturarRosalind",
        falante: "Rosalind Franklin",
        dialogo: "O próximo passo é remover os pedaços maiores que podem atrapalhar nossa observação."
    },
    {
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena4.png",
        tipo: "filtrarRosalind",

    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena4.png",
        // tipo: "filtrarRosalind",
        falante: "Rosalind Franklin",
        dialogo: "Por fim, adicione o álcool gelado."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena5.png",
        tipo: "adicionarRosalind"
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena6.png",
        tipo: "perguntaDNARosalind",
        falante: "Rosalind Franklin",
        dialogo: "Observe com atenção. Qual dessas partes você acha que é o DNA?"
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena6.png",
        tipo: "respostaErradaRosalind",
        falante: "Rosalind Franklin",
        dialogo: "Não tenho certeza se este é o correto. O DNA aparece como um material esbranquiçado após a adição do álcool."
    },
    {
        id: "finalDNARosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/experimentos/cena6.png",
        falante: "Rosalind Franklin",
        dialogo: "Muito bem! Esse material esbranquiçado é o DNA. Eu trabalho estudando essa substância e tentando descobrir como ela é organizada."
    },

    // explicação depois do experimento da Rosalind
    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Então eu realmente consegui ver o DNA?"
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Conseguiu sim. Normalmente ele fica protegido dentro das células e não pode ser visto a olho nu."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Primeiro, você amassou o morango para quebrar parte de suas células."
    },
    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Depois, a solução de lise ajudou a liberar o material que estava guardado dentro delas."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Em seguida, o filtro removeu os pedaços maiores da fruta. Por fim, o álcool fez com que o DNA se agrupasse e se separasse do restante da mistura."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "É por isso que conseguimos enxergar essa nuvem branca."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Então isso tudo é DNA?"
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Exatamente. O DNA é como um conjunto de instruções presente em todos os seres vivos."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Ele guarda informações sobre nossas características, como cor do cabelo, pele, olhos… E ajuda as células a saberem como devem funcionar."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "É graças a ele que os nossos traços podem ser transmitidos de uma geração para outra."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Jogadora",
        dialogo: "Incrível... Eu nunca imaginei que algo tão importante estivesse escondido dentro de um simples morango."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "A ciência costuma ser assim. Muitas das coisas mais importantes do mundo nem sempre são percebidas à primeira vista."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "Descobertas científicas são como uma herança. Uma pessoa aprende algo, compartilha com outras e esse conhecimento continua avançando através do tempo."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/lab-rosalind.png",
        falante: "Rosalind Franklin",
        dialogo: "E é por isso que gostaria que você ficasse com isto."
    },

    //Amuleto- cena na época da Rosalind
    {
        cenario: "src/images/cenarios/rosalindfrankiln/amuletoECristal.png",
        falante: "Rosalind Franklin",
        dialogo: "Assim como o DNA guarda informações essenciais para a vida, este cristal guardará uma parte do conhecimento que você adquiriu aqui."
    },
    {
        cenario: "src/images/cenarios/adalovelace/amuletoECristal.png",
        falante: "Rosalind Franklin",
        dialogo: "Agora, coloque-o em seu amuleto e continue sua jornada."
    },

    {
        cenario: "src/images/cenarios/rosalindfrankiln/amuletoComCristal.png",
        falante: "Jogadora",
        dialogo: "Eu vou guardar isso com cuidado. Adeus!"
    },

    {
        id: "amuletoCompletoRosalind",
        cenario: "src/images/cenarios/rosalindfrankiln/amuletoComCristal.png",
        falante: "Rosalind Franklin",
        dialogo: "Tenho certeza de que vai. Boa viagem, {nome}."
    },

    //  {
    //      id: "amuletoCompletoRosalind",
    //      cenario: "src/images/cenarios/adalovelace/amuletoComCristal.png",
    //  },

    // Tela branca
    {
        cenario: "src/images/transicao/clarao.png",
        falante: "Jogadora",
        dialogo: "Nossa, quantas mulheres incríveis a humanidade tem..."
    },

    {
        cenario: "src/images/transicao/clarao.png",
        falante: "Jogadora",
        dialogo: "Agora, eu estou empolgada para saber quem será a próxima nessa jornada!"
    },

    // Katherine Johnson

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Nossa... Esse lugar é realmente diferente dos outros laboratórios. Tem alguma coisa relacionada ao espaço aqui."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Você tem um bom olhar para os detalhes."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "E eu nem estou usando jaleco desta vez."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Nem todo laboratório exige os mesmos equipamentos."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Olá, {nome}! Seja bem-vinda ao meu laboratório, querida! Meu nome é Katherine Johnson."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Então você é a próxima cientista?"
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Sou sim! Sou matemática e trabalho para a NASA."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Estamos em uma época em que os computadores não conseguem realizar muitos dos cálculos necessários para as missões espaciais."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Meu trabalho é usar a matemática para prever trajetórias, calcular rotas e verificar se os astronautas irão conseguir viajar e retornar à Terra com segurança."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Participo de projetos importantes do programa espacial americano, incluindo missões que levam seres humanos à órbita da Terra."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Muitos astronautas confiam mais nos meus cálculos do que nos computadores da NASA."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Você ajudou pessoas a chegarem ao espaço?"
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Ajudo a calcular o caminho para que isso seja possível."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Isso é incrível!"
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Cada número precisa estar correto. Um pequeno erro pode fazer uma nave sair da rota."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Agora entendi por que seu trabalho é tão importante."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "E hoje você vai me ajudar em uma tarefa parecida."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Eu?"
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Não se preocupe!"
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Estou analisando três possíveis trajetórias para um mesmo foguete em uma simulação de lançamento."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "É um teste simples, mas baseado no mesmo tipo de raciocínio matemático que usamos para prever o caminho de foguetes reais."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Todos possuem a mesma velocidade. A única diferença é o ângulo de lançamento."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Mas por que mudar o ângulo faz diferença?"
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Porque o ângulo influencia a trajetória do foguete."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Se ele for lançado muito para frente, não ficará muito tempo no ar. Se for lançado muito para cima, ganhará altura, mas não avançará tanto."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Então precisamos encontrar um equilíbrio?"
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Exatamente. Na engenharia, usamos uma medida chamada alcance."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "O alcance é a distância que o foguete percorre no chão, desde o ponto onde foi lançado até o ponto onde ele cai."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Meu trabalho é justamente prever trajetórias como essa usando matemática, antes mesmo de qualquer lançamento acontecer."
    },

    //experimento Katherine

    {
        cenario: "src/images/cenarios/katherinejohnson/experimento/computador.png",
        falante: "Katherine Johnson",
        dialogo: "Vamos observar três simulações e descobrir qual delas possui o maior alcance."
    },
    {
        cenario: "src/images/cenarios/katherinejohnson/experimento/computador.png",
        falante: "Katherine Johnson",
        dialogo: "Vamos agora observar a trajetória de um foguete com o ângulo de lançamento de 30°."
    },
    {
        tipo: "trajetoria30Katherine",
        cenario: "src/images/cenarios/katherinejohnson/experimento/computador30.png",
        falante: "Katherine Johnson",
        dialogo: "Esta é a trajetória de um foguete com o ângulo de lançamento de 30°. Vamos ver agora a trajetória de um foguete com o ângulo de lançamento de 45°."
    },
    {
        tipo: "trajetoria45Katherine",
        cenario: "src/images/cenarios/katherinejohnson/experimento/computador45.png",
        falante: "Katherine Johnson",
        dialogo: "Esta é a trajetória de um foguete com o ângulo de lançamento de 45°. Vamos ver agora a trajetória de um foguete com o ângulo de lançamento de 60°."
    },
    {
        tipo: "trajetoria60Katherine",
        cenario: "src/images/cenarios/katherinejohnson/experimento/computador60.png",
        falante: "Katherine Johnson",
        dialogo: "Esta é a trajetória de um foguete com o ângulo de lançamento de 60°."
    },
    {
        cenario: "src/images/cenarios/katherinejohnson/experimento/computador.png",
        tipo: "perguntaFinalKatherine",
        falante: "Katherine Johnson",
        dialogo: "Qual lançamento percorreu a maior distância?"
    },

    //explicação Katherine


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Mas por que justamente 45°?"
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Vamos analisar cada trajetória."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "No lançamento de 30°, o foguete avança bastante para frente, mas não ganha muita altura."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Como ele permanece menos tempo no ar, acaba percorrendo uma distância menor do que poderia."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Já no lançamento de 60°, acontece o contrário."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "O foguete sobe mais alto, mas grande parte de sua velocidade é utilizada para ganhar altitude."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Por isso, ele avança menos para frente."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "O ângulo de 45° cria um equilíbrio entre altura e distância."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "O foguete sobe o suficiente para permanecer mais tempo no ar e, ao mesmo tempo, continua avançando para frente."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Em condições ideais, esse equilíbrio produz o maior alcance horizontal possível."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Então não basta lançar o foguete o mais alto possível?"
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Isso mesmo! Na matemática e na engenharia, muitas vezes a melhor solução está no equilíbrio entre diferentes fatores."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Agora entendo por que os seus cálculos são tão importantes."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Antes que qualquer foguete deixe a Terra, é preciso prever sua trajetória com precisão."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "É usando matemática que conseguimos transformar viagens espaciais em realidade."
    },


    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Nossa, como mulheres fazem tantas descobertas e mal sabemos dessas informações? Isso é muito injusto!"
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Fico pensando... se as histórias de vocês fossem mais conhecidas, poderiam ter influenciado várias outras meninas a ingressarem nas ciências."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Jogadora",
        dialogo: "Quem sabe, até eu…"
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Minha querida, a ciência pertence a todos que têm curiosidade para descobrir como o mundo funciona."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "E eu acredito que você ainda vai descobrir muitas coisas pelo seu caminho."
    },

    {
        cenario: "src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png",
        falante: "Katherine Johnson",
        dialogo: "Mas, antes de partir, gostaria que levasse isto com você."
    },



    //Amuleto- cena na época da Katherine
    {
        cenario: "src/images/cenarios/adalovelace/amuleto.png",
        falante: "Jogadora",
        dialogo: "O último cristal…"
    },


    {
        cenario: "src/images/cenarios/adalovelace/amuletoECristal.png",
        falante: "Katherine Johnson",
        dialogo: "Coloque-o em seu amuleto."
    },
    {
        id: "amuletoCompletoKatherine",
        cenario: "src/images/cenarios/adalovelace/amuletoComCristal.png",
        falante: "Katherine Johnson",
        dialogo: "Continue seguindo sua trajetória, {nome}, Quem sabe até onde ela pode levar você?"
    },
    {
        cenario: "src/images/cenarios/adalovelace/amuletoComCristal.png",
        falante: "Jogadora",
        dialogo: "Obrigada, Katherine."
    },
    {
        cenario: "src/images/cenarios/adalovelace/amuletoComCristal.png",
        falante: "Katherine Johnson",
        dialogo: "Boa viagem, querida. E nunca deixe que alguém diga que seus sonhos são grandes demais."
    },

    // Tela branca
    {
        cenario: "src/images/transicao/clarao.png",
        falante: "Jogadora",
        dialogo: "Consegui todos os cristais. Qual será a minha próxima missão?"
    },

    // Sala de aula - final

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "O quê? Eu voltei? Então…"
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Foi tudo um sonho?"
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Ada Lovelace, Marie Curie, Rosalind Franklin, Katherine Johnson..."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Aprendi tanto com elas: Sobre lógica. Sobre observação. Sobre descobrir coisas que ninguém tinha descoberto antes."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Tantas mulheres mudaram o mundo e não receberam o reconhecimento que mereciam."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Engraçado..."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Antes eu achava que ciência era só decorar fórmulas, fazer contas difíceis e tirar notas em provas."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Mas elas me mostraram que ciência é fazer perguntas, é ser curiosa, é tentar entender como o mundo funciona."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Se eu nunca tivesse passado por tudo isso, talvez continuasse acreditando que ciência não era para mim."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Agora eu percebo que talvez eu nunca tenha dado uma chance para ela."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Na verdade…"
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Acho que pela primeira vez consigo me imaginar fazendo parte desse mundo."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Melhor guardar minhas coisas, está quase na hora de ir embora."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "Espera um pouco."
    },

    {
        cenario: "src/images/cenarios/escola/inicioEscola.png",
        falante: "Jogadora",
        dialogo: "O que é isso?"
    },

    //INT. LABORATÓRIO - DIA (futuro) - Cena final


    {
        cenario: "src/images/cenarios/mariecurie/protagonistaempe.png",
        falante: "Jogadora",
        dialogo: "Alguns anos depois..."
    },

    {
        cenario: "src/images/cenarios/mariecurie/protagonistaempe.png",
        falante: "Jogadora",
        dialogo: "As histórias delas mudaram a minha."
    },

    {
        cenario: "src/images/cenarios/mariecurie/protagonistaempe.png",
        falante: "Jogadora",
        dialogo: "A curiosidade virou interesse. O interesse virou estudo. E o estudo se transformou em uma profissão."
    },

    {
        cenario: "src/images/cenarios/mariecurie/protagonistaempe.png",
        falante: "Jogadora",
        dialogo: "Assim como Marie, Ada, Rosalind e Katherine fizeram antes de mim."
    },

    {
        cenario: "src/images/cenarios/mariecurie/protagonistaempe.png",
        falante: "Jogadora",
        dialogo: "Aquelas cientistas me ensinaram que a ciência não pertence a um tipo  específico de pessoa."
    },

    {
        cenario: "src/images/cenarios/mariecurie/protagonistaempe.png",
        falante: "Jogadora",
        dialogo: "Ela pertence a todos que têm coragem de questionar, aprender e descobrir."
    },

    {
        cenario: "src/images/cenarios/mariecurie/protagonistaempe.png",
        falante: "Jogadora",
        dialogo: "E espero que, no futuro, outras meninas também descubram aquilo que eu descobri."
    },

    {
        cenario: "src/images/cenarios/mariecurie/protagonistaempe.png",
        falante: "Jogadora",
        dialogo: "Que a ciência também pode ser para elas."
    },

    {
        cenario: "src/images/cenarios/mariecurie/protagonistaempe.png",
        falante: "Jogadora",
        dialogo: "E você? Quer ser a sexta passageira?"
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
const botaoFinalizarAda = document.getElementById("finalizar-ada");
// const elementosLogo = document.getElementById("elementos-logo");



// Variáveis de controle, elas armazenam o estado atual do jogo
let cenaAtual = 0; // índice da cena atualmente exibida no array "cenas"
let nomeJogadora = ""; // nome digitado pela jogadora, usado para personalizar o diálogo
let amostraAMarieFoiAnalisada = false; // Indica se a Amostra A da Marie já foi observada
let amostraBMarieFoiAnalisada = false; // Indica se a Amostra B da Marie já foi observada 
let listenerDialogoAtual = null; // guarda referência do listener de clique atual no diálogo, para poder removê-lo depois
let sequenciaCorretaAda = [
    "triangulo",
    "estrela",
    "circulo",
    "quadrado",
    "triangulo",
    "estrela",
    "circulo",
    "quadrado"
];
let sequenciaJogadoraAda = [];
let containerExperimentoAda = null;
let relembrandoKatherine = false;

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
    } else if (falante === 'Ada Lovelace') {
        rostoImg.src = 'src/images/caixa-de-dialogo/mariecurie.jpg';
    } else if (falante === 'Marie Curie') {
        rostoImg.src = 'src/images/caixa-de-dialogo/mariecurie.jpg';
    } else if (falante === 'Rosalind Franklin') {
        rostoImg.src = 'src/images/caixa-de-dialogo/mariecurie.jpg';
    }
    else if (falante === 'Katherine Johnson') {
        rostoImg.src = 'src/images/caixa-de-dialogo/mariecurie.jpg';
    }
    else if (falante === 'Professora') {
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
            mostrarDialogo(
                "Rosalind Franklin",
                "Não tenho certeza se este é o correto. O DNA aparece como um material esbranquiçado após a adição do álcool."
            );

            desabilitarBotoesDNA();

            aoClicarNoDialogo(function () {

                habilitarBotoesDNA();

                esconderDialogo();
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

            mostrarDialogo(
                "Rosalind Franklin",
                "Não tenho certeza se este é o correto. O DNA aparece como um material esbranquiçado após a adição do álcool."
            );

            desabilitarBotoesDNA();

            aoClicarNoDialogo(function () {

                habilitarBotoesDNA();

                esconderDialogo();
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

function desabilitarBotoesDNA() {
    const botoes = document.querySelectorAll(".botao-cena");

    botoes.forEach(botao => {
        botao.style.pointerEvents = "none";
        botao.style.opacity = "0.7";
    });
}

function habilitarBotoesDNA() {
    const botoes = document.querySelectorAll(".botao-cena");

    botoes.forEach(botao => {
        botao.style.pointerEvents = "all";
        botao.style.opacity = "1";
    });
}

// Função central que controla a exibição de cada cena, com base no índice recebido

function mostrarCena(indice) {
    const cena = cenas[indice]; // obtém o objeto da cena correspondente ao índice

    cenarioElemento.style.backgroundImage = `url(${cena.cenario})`; // atualiza a imagem de fundo conforme a cena
    limparBotoes(); // remove qualquer botão que estivesse na tela anteriormente
    const textoDialogo = (cena.dialogo ?? "").replace("{nome}", nomeJogadora);

    console.log("Nome:", nomeJogadora);
    console.log("Original:", cena.dialogo);
    console.log("Substituído:", textoDialogo);

    mostrarDialogo(
        cena.falante === "Jogadora" ? nomeJogadora : (cena.falante ?? ""),
        textoDialogo
    );

     if (
        cena.tipo === "trajetoria30Katherine" ||
        cena.tipo === "trajetoria45Katherine" ||
        cena.tipo === "trajetoria60Katherine"
    ) {

        aoClicarNoDialogo(function () {

            if (
                relembrandoKatherine &&
                cena.tipo === "trajetoria60Katherine"
            ) {

                relembrandoKatherine = false;

                const indicePergunta = cenas.findIndex(
                    c => c.tipo === "perguntaFinalKatherine"
                );

                cenaAtual = indicePergunta;
                mostrarCena(cenaAtual);
                return;
            }

            cenaAtual++;
            mostrarCena(cenaAtual);
        });

        return;
    }
    if (cena.tipo === "trajetoria60Katherine") {



        aoClicarNoDialogo(function () {

            const indicePergunta = cenas.findIndex(
                cena => cena.tipo === "perguntaFinalKatherine"
            );

            cenaAtual = indicePergunta;

            mostrarCena(cenaAtual);
        });

        return;
    }

    // Cenas de amuleto completo
    if (cena.id === "corredorEscola") {

        esconderDialogo();

        criarBotao(
            "Abrir porta",
            {
                bottom: "40%",
                left: "75%"
            },
            function () {

                cenaAtual++;
                mostrarCena(cenaAtual);

            }
        );

        return;
    }
    if (cena.id && cena.id.startsWith("amuletoCompleto")) {

        esconderDialogo();

        criarBotao(
            "AVANÇAR",
            {
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)"
            },
            function () {

                cenaAtual++;

                if (cenaAtual < cenas.length) {
                    mostrarCena(cenaAtual);
                } else {
                    finalizarJogo();
                }
            }
        );

        return;
    }

    if (cena.tipo === "experimentoAda") {

        iniciarExperimentoAda();

        return;
    }

    //Experimento Katherine
    if (cena.tipo === "perguntaFinalKatherine") {

        mostrarCardsKatherineDesabilitados();

        mostrarDialogo(
            "Katherine Johnson",
            "Qual lançamento possui o maior alcance?"
        );

        aoClicarNoDialogo(function () {

            limparBotoes();

            mostrarBotoesKatherine();

            mostrarBotaoRelembrarKatherine();

        });

        return;
    }

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
            "A lise dissolve as membranas celulares, liberando o material que existe dentro delas, incluindo o DNA."
        );

        mostrarDialogo( // mostra explicação sobre o processo de lise/filtragem
            "Rosalind Franklin",
            "O próximo passo é remover os pedaços maiores que podem atrapalhar nossa observação. Para isso, vamos filtrar a solução."
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

    if (cena.tipo === "perguntaDNARosalind") {

        mostrarBotoesDNA(); // mostra os 3 botões imediatamente

        desabilitarBotoesDNA(); // deixa eles visíveis mas bloqueados

        mostrarDialogo(
            "Rosalind Franklin",
            "Observe com atenção. Qual das partes você acha que é o DNA?"
        );

        aoClicarNoDialogo(function () {

            habilitarBotoesDNA(); // libera os cliques

            esconderDialogo();
        });

        return;
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
    mostrarDialogo(
        cena.falante === "Jogadora" ? nomeJogadora : (cena.falante ?? ""),
        textoDialogo
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

// FUnções para Katherine
function mostrarBotaoRelembrarKatherine() {

    criarBotao(
        "Relembrar alcances",
        {
            bottom: "43%",
            right: "40%"
        },
        function () {

            relembrandoKatherine = true;

            cenaAtual = cenas.findIndex(
                cena => cena.tipo === "trajetoria30Katherine"
            );

            limparBotoes();
            mostrarCena(cenaAtual);

        }
    );
}

function criarCardKatherine(imagem, posicao, onClick) {

    const btn = document.createElement("button");

    btn.style.position = "absolute";
    btn.style.zIndex = "1000";
    btn.style.pointerEvents = "all";

    Object.assign(btn.style, posicao);

    btn.classList.add("card-katherine");

    const img = document.createElement("img");

    img.src = imagem;
    img.style.width = "90px";
    img.style.display = "block";

    btn.appendChild(img);

    btn.addEventListener("click", onClick);

    botoesCenaElemento.appendChild(btn);
}

function mostrarBotoesKatherine() {
    esconderDialogo();
    limparBotoes();

    criarCardKatherine(
        "src/images/cenarios/katherinejohnson/experimento/card-30.png",
        { left: "35%", bottom: "60%" },
        respostaErradaKatherine
    );

    criarCardKatherine(
        "src/images/cenarios/katherinejohnson/experimento/card-45.png",
        { left: "45%", bottom: "60%" },
        respostaCertaKatherine
    );

    criarCardKatherine(
        "src/images/cenarios/katherinejohnson/experimento/card-60.png",
        { left: "55%", bottom: "60%" },
        respostaErradaKatherine
    );
}

function mostrarCardsKatherineDesabilitados() {

    esconderDialogo();
    limparBotoes();

    criarCardKatherine(
        "src/images/cenarios/katherinejohnson/experimento/card-30.png",
        { left: "35%", bottom: "60%" },
        () => { }
    );

    criarCardKatherine(
        "src/images/cenarios/katherinejohnson/experimento/card-45.png",
        { left: "45%", bottom: "60%" },
        () => { }
    );

    criarCardKatherine(
        "src/images/cenarios/katherinejohnson/experimento/card-60.png",
        { left: "55%", bottom: "60%" },
        () => { }
    );

    desabilitarCardsKatherine();
}

function desabilitarCardsKatherine() {

    const cards = document.querySelectorAll(".card-katherine");

    cards.forEach(card => {
        card.style.pointerEvents = "none";
        card.style.opacity = "0.7";
    });
}

function habilitarCardsKatherine() {

    const cards = document.querySelectorAll(".card-katherine");

    cards.forEach(card => {
        card.style.pointerEvents = "all";
        card.style.opacity = "1";
    });
}

function respostaErradaKatherine() {

    const cards = document.querySelectorAll(".card-katherine");

    cards.forEach(card => {
        card.style.pointerEvents = "none";
        card.style.opacity = "0.7"; // opcional
    });

    mostrarDialogo(
        "Katherine Johnson",
        "Relembre novamente as trajetórias. Qual delas parece ter percorrido a maior distância antes de tocar o solo?"
    );

    aoClicarNoDialogo(function () {

        cards.forEach(card => {
            card.style.pointerEvents = "all";
            card.style.opacity = "1";
        });

        esconderDialogo();
        if (!relembrandoKatherine) {
            mostrarBotaoRelembrarKatherine();
        }
    });
}

function respostaCertaKatherine() {

    relembrandoKatherine = false;

    limparBotoes();

    cenarioElemento.style.backgroundImage =
        "url(src/images/cenarios/katherinejohnson/escritorio-Katherinemaior.png)";

    mostrarDialogo(
        "Katherine Johnson",
        "Excelente! O lançamento de 45° possui o maior alcance horizontal."
    );

    aoClicarNoDialogo(function () {
        cenaAtual++;
        mostrarCena(cenaAtual);
    });
}


// ========== Função para Ada Lovelace =========
function iniciarExperimentoAda() {

    esconderDialogo();
    limparBotoes();

    sequenciaJogadoraAda = [];

    criarAreaExperimentoAda();

    criarFormasDisponiveisAda();

}

function criarAreaExperimentoAda() {

    const experimento = document.createElement("div");

    experimento.id = "experimento-ada";

    experimento.innerHTML = `
        <div id="area-montagem-ada"></div>
        <div id="pecas-ada"></div>
    `;

    botoesCenaElemento.appendChild(experimento);

    const areaMontagem =
        document.getElementById("area-montagem-ada");

    const areaPecas =
        document.getElementById("pecas-ada");

    areaMontagem.addEventListener(
        "dragover",
        e => e.preventDefault()
    );

    areaMontagem.addEventListener(
        "drop",
        receberFormaAda
    );

    areaPecas.addEventListener(
        "dragover",
        e => e.preventDefault()
    );

    areaPecas.addEventListener(
        "drop",
        devolverFormaAda
    );
}

const pecasAda = [
    "triangulo",
    "triangulo",
    "triangulo",

    "estrela",
    "estrela",
    "estrela",

    "circulo",
    "circulo",
    "circulo",

    "quadrado",
    "quadrado",
    "quadrado"
];


function criarFormasDisponiveisAda() {

    const container =
        document.getElementById("pecas-ada");

    const pecasEmbaralhadas =
        [...pecasAda].sort(() => Math.random() - 0.5);

    pecasEmbaralhadas.forEach((tipo, indice) => {

        const img = document.createElement("img");

        img.src =
            `src/images/cenarios/adalovelace/experimento/${tipo}.png`;

        img.dataset.tipo = tipo;
        img.dataset.id = indice;

        img.draggable = true;

        configurarDragAda(img, tipo);

        container.appendChild(img);
    });
}



function configurarDragAda(img, tipo) {

    img.addEventListener("dragstart", (e) => {

        e.dataTransfer.setData("forma", tipo);

        window.pecaArrastada = img;
    });

}

function devolverFormaAda(e) {

    e.preventDefault();

    const peca = window.pecaArrastada;

    if (!peca) return;

    document.getElementById("pecas-ada").appendChild(peca);

    atualizarSequenciaAda();

    window.pecaArrastada = null;

    if (sequenciaJogadoraAda.length < 8) {
        document.getElementById("finalizar-ada")?.remove();
    }
}

function receberFormaAda(e) {

    e.preventDefault();

    const peca = window.pecaArrastada;

    if (!peca) return;

    e.currentTarget.appendChild(peca);

    atualizarSequenciaAda();

    window.pecaArrastada = null;

    if (sequenciaJogadoraAda.length === 8) {
        criarBotaoFinalizarAda();
    }
}

function atualizarSequenciaAda() {

    const areaMontagem =
        document.getElementById("area-montagem-ada");

    sequenciaJogadoraAda = Array.from(
        areaMontagem.querySelectorAll("img")
    ).map(img => img.dataset.tipo);
}

function verificarRespostaAda() {
    if (botaoFinalizarAda) {
        botaoFinalizarAda.remove();
    }

    const acertou =
        JSON.stringify(sequenciaJogadoraAda) ===
        JSON.stringify(sequenciaCorretaAda);

    if (acertou) {

        removerExperimentoAda();


        cenarioElemento.style.backgroundImage =
            "url(src/images/cenarios/adalovelace/escritorio-Protagonistamaior.png)";

        mostrarDialogo(
            "Ada Lovelace",
            "Excelente! Você observou o padrão e seguiu as instruções corretamente."
        );

        aoClicarNoDialogo(() => {
            cenaAtual++;
            mostrarCena(cenaAtual);
        });

    } else {

        respostaErradaAda();

    }
}

function respostaErradaAda() {

    mostrarDialogo(
        "Ada Lovelace",
        "Essa não é a sequência correta. Vamos tentar novamente."
    );

    aoClicarNoDialogo(() => {

        removerExperimentoAda();

        iniciarExperimentoAda();
    });
}

function removerExperimentoAda() {

    const exp =
        document.getElementById("experimento-ada");

    if (exp) {
        exp.remove();
    }

    sequenciaJogadoraAda = [];

    document
        .querySelectorAll("#pecas-ada img")
        .forEach(img => img.remove());
}


function criarBotaoFinalizarAda() {

    if (document.getElementById("finalizar-ada")) return;

    const btn = document.createElement("button");

    btn.id = "finalizar-ada";
    btn.textContent = "FINALIZAR";
    btn.classList.add("botao-cena");

    btn.addEventListener(
        "click",
        verificarRespostaAda
    );

    document
        .getElementById("experimento-ada")
        .appendChild(btn);
}






// ========== Começar o jogo ==========

comecarBotaoElemento.addEventListener('click', function (event) { // registra o clique no botão "JOGAR"
    event.preventDefault(); // previne o comportamento padrão (ex: envio de formulário)
    // elementosLogo.style.display = "none";
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
    // elementosLogo.style.display = "flex";
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
            // elementosLogo.style.display = "none";

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
