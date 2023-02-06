var listaJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

function addJogador() {
  var nomeJogador = prompt("Insira o nome do jogador:");
  var novoJogador = {
    nomes: nomeJogador,
    pontos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
  };

  listaJogadores.push(novoJogador);
  exibirNaTela();
}

function exibirNaTela() {
  var resultado = "";
  for (var i = 0; i < listaJogadores.length; i++) {
    resultado += `<tr>
<td>${listaJogadores[i].nomes}</td>
<td>${listaJogadores[i].vitorias}</td>
<td>${listaJogadores[i].empates}</td>
<td>${listaJogadores[i].derrotas}</td>
<td>${listaJogadores[i].pontos}</td>
<td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
<td><button onClick="adicionarEmpate(${i})">Empate</button></td>
<td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
</tr>`;
  }
  elementoTabela.innerHTML = resultado;
}

function adicionarVitoria(jogador) {
  listaJogadores[jogador].vitorias++;
  listaJogadores[jogador].pontos = listaJogadores[jogador].pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(jogador) {
  listaJogadores[jogador].empates++;
  listaJogadores[jogador].pontos = listaJogadores[jogador].pontos + 1;
  exibirNaTela();
}

function adicionarDerrota(jogador) {
  listaJogadores[jogador].derrotas++;
  listaJogadores[jogador].pontos = listaJogadores[jogador].pontos - 1;
  exibirNaTela();
}

function removerJogador() {
  listaJogadores.length = 0;
  exibirNaTela();
}

function zerarPontos() {
  listaJogadores.forEach(function (jogador) {
    jogador.pontos = 0;
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
});

exibirNaTela();
}

