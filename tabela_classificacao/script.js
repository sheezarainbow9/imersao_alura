var paulo = {
  nome: "Paulo",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

// inserir jogadores:
var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela(); 

function exibirNaTela() {
  elementoTabela.innerHTML = `<tr>
<td>${paulo.nome}</td>
<td>${paulo.vitoria}</td>
<td>${paulo.empate}</td>
<td>${paulo.derrota}</td>
<td>${paulo.pontos}</td>
<td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
<td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
<td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
</tr>`;
}
/*
var rafa = {
  nome: "Rafa",
  vitoria: 20,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

var gui = {
  nome: "Gui",
  vitoria: 10,
  empate: 0,
  derrota: 0,
  pontos: 0,
};

var renato = {
  nome: "Renato",
  vitoria: 40,
  empate: 0,
  derrota: 0,
  pontos: 0,
};
*/

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela(); 
}

function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
}

function adicionarDerrota(jogador) {
    jogador.derrota++;
    jogador.pontos = jogador.pontos - 1;
    exibirNaTela();
}
