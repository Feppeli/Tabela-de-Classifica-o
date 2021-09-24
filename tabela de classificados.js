var Rafa = {        // criando o obeto Rafa
    nome: "Rafa",
    vitórias: 0,
    Empates:0,
    derrotas:0,
    pontos: 0,
}

var Paulo = {       // criando o objeto Paulo
    nome: "Paulo",
    vitórias: 0,
    Empates: 0,
    derrotas:0,
    pontos: 0,
}


var Felipe = {       // criando o objeto Felipe
    nome: "Felipe",
    vitórias: 0,
    Empates: 0,
    derrotas:0,
    pontos: 0,
}



function calculaPontos(jogador) {  //criando função pra retornar o valor de ponto dos jogadores
    var pontos = jogador.vitórias * 3 + jogador.Empates  //calculo de pontos
    return pontos;    
}

Rafa.pontos = calculaPontos(Rafa);  //criando variáveis ligadas a uma function
Paulo.pontos = calculaPontos(Paulo); //criando variáveis ligadas a uma function
Felipe.pontos = calculaPontos(Felipe); //criando variáveis ligadas a uma function

var jogadores = [Rafa, Paulo, Felipe] // váriavel para englobar os jogadores em uma lista


function exibeJogadoresNaTela(jogadores){ // função para imprimir no html os espaçoes e botões 
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {
        elemento +=     "<tr><td>"+ jogadores[i].nome +"</td>";
        elemento +=     "<td>"+ jogadores[i].vitórias +"</td>";
        elemento +=     "<td>"+ jogadores[i].Empates +"</td>";
        elemento +=     "<td>"+ jogadores[i].derrotas +"</td>";
        elemento +=     "<td>"+ jogadores[i].pontos +"</td>";
        elemento +=     "<td><button onclick='adicionarVitoria("+ i +")'>Vitória</button></td>";
        elemento +=     "<td><button onclick='adicionarEmpate("+ i +")'>Empate</button></td>";
        elemento +=     "<td><button onclick='adicionarDerrota("+ i +")'>Derrota</button></td>";
        elemento +=     "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;

}

exibeJogadoresNaTela(jogadores); // chamando a função para mostrar os itens da tabela e seus respectivos jogadores

function adicionarVitoria(i) {  // função criada para adicionar ponto no espaço vitória
    var jogador = jogadores[i];
    jogador.vitórias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){   // função criada para adicionar ponto no espaço Derrota
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i){    // função criada para adicionar ponto no espaço Empate
    var jogador = jogadores[i];
    jogador.Empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}
