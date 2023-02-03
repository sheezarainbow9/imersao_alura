// Meu AluraFlix
// https://upload.wikimedia.org/wikipedia/pt/d/dd/Pirates_of_silicon_valley_poster_promocional.png
// https://upload.wikimedia.org/wikipedia/pt/0/01/The_Net.jpg

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("legenda").value;
  var elementoListaFilmes = document.getElementById("listaFilmes");
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    elementoListaFilmes.innerHTML += `<img src=${filmeFavorito} </img><p>${nomeFilme}</p>`;

    document.getElementById("filme").value = "";
  } else {
    alert("Formato Inválido!");
    filmeFavorito.value = "";
    
  }
    elementoListaFilmes.value = "";
    nomeFilme.value = "";
}

function delFilme() {
  //let lastFilme = document.getElementById("listaFilmes");
  //lastFilme.removeChild(lastFilme.lastElementChild);
  document.getElementById('listaFilmes').remove();
  legenda.value="";
  
  };

