var Rafa = {        // criando o obeto Rafa
    nome: "Rafa",
    vitórias: 2,
    Empates:1,
    derrotas:1,
    pontos: 0,
}

var Paulo = {       // criando o objeto Paulo
    nome: "Paulo",
    vitórias: 1,
    Empates: 1,
    derrotas:2,
    pontos: 0,
}


var Felipe = {       // criando o objeto Felipe
    nome: "Felipe",
    vitórias: 3,
    Empates: 2,
    derrotas:1,
    pontos: 0,
}



function calculaPontos(jogador) {  //criando função pra retornar o valor de ponto dos jogadores
    var pontos = jogador.vitórias * 3 + jogador.Empates  //calculo de pontos
    return pontos;    
}

Rafa.pontos = calculaPontos(Rafa);  //criando variáveis ligadas a uma function
Paulo.pontos = calculaPontos(Paulo); //criando variáveis ligadas a uma function
Felipe.pontos = calculaPontos(Felipe); //criando variáveis ligadas a uma function

var jogadores = [Rafa, Paulo, Felipe]


function exibeJogadoresNaTela(jogadores){
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

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitórias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.Empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}
