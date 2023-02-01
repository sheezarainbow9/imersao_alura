// Meu AluraFlix
// https://upload.wikimedia.org/wikipedia/pt/d/dd/Pirates_of_silicon_valley_poster_promocional.png
// https://upload.wikimedia.org/wikipedia/pt/0/01/The_Net.jpg
// https://upload.wikimedia.org/wikipedia/pt/b/b2/A_Rede_Social.png

function addFilme() {
  var filmeUrl = document.querySelector("#url");
  var nomeFilme = document.querySelector("#nome-filme");
  var tituloFilme = String(nomeFilme.value);
  var filmeInserido = filmeUrl.value;
  if (filmeInserido.endsWith(".jpg") || filmeInserido.endsWith(".png")) {
    listarFilmes(filmeInserido, tituloFilme);
  } else {
    alert("Formato Inválido!");
  }
  // Limpar os campos após inserir:
  filmeUrl.value = "";
  nomeFilme.value = "";
}

function listarFilmes(filmeUrl, tituloFilme) {
  var container = document.querySelector("#container-input");
  container.innerHTML += "<img src=" + filmeUrl + ">" + tituloFilme;
}

//for (var i = 0; i < listaFilmes.length; i++) {
//document.write("<img src=" + listaFilmes[i] + ">");
//}

/* O JS tem o poder de escrever no documento com document.write:
document.write("<img src=" + listaFilmes[0] + ">");
document.write("<img src=" + listaFilmes[1] + ">");
document.write("<img src=" + listaFilmes[2] + ">");
*/
