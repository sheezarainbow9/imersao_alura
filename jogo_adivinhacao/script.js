/* Math.random() vai escolher um número (inteiro) aleatoriamente de 0 até 999 aqui:*/
var numeroSecreto = parseInt(Math.random() * 1001);
var tentativa = 3;

while (chute != numeroSecreto) {
  var chute = parseInt(prompt("Digite um número entre 1 e 1000: "));
  if (chute < 0 || chute > 1000) {
    alert("Válido somente número entre 0 e 1000.");
  } else if (chute == numeroSecreto) {
    alert(`Parabéns, você acertou!`);
    break;
  } else if (chute > numeroSecreto) {
    alert("Errou! O número secreto é menor!");
  } else if (chute < numeroSecreto) {
    alert("Errou! O número secreto é maior!");
  }
  -- tentativa
  if (tentativa < 1) {
    alert("Você alcançou o limite de tentativas!");
    break;
  }
}
