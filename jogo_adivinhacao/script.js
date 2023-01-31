/* Math.random() vai escolher um número (inteiro) aleatoriamente de 0 até 19 aqui:*/
var numeroSecreto = parseInt(Math.random() * 21);
var tentativa = 7;

while (chute != numeroSecreto) {
  var chute = parseInt(prompt("Digite um número entre 1 e 20: "));
  if (chute < 0 || chute > 20) {
    alert("Válido somente número entre 0 e 20.");
  } else if (chute == numeroSecreto) {
    alert(`Parabéns, você acertou!`);
    break;
  } else if (chute > numeroSecreto) {
    alert(`Errou! O número secreto é menor! Você tem mais ${tentativa-1} tentativas.`);
  } else if (chute < numeroSecreto) {
    alert(`Errou! O número secreto é maior! Você tem mais ${tentativa-1} tentativas.`);
  }
  -- tentativa
  if (tentativa < 1) {
    alert("Você alcançou o limite de tentativas!");
    break;
  }
}
