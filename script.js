/* Conversor de moedas
var moeda = prompt(
  "Qual moeda deseja converter o valor? D: dólar, B: bitcoin ou E: euro: "
);

var valor = prompt("Qual o valor que deseja converter? ");

var cotacaoEuro = 5.54;
var cotacaoBitcoin = 117930.68;
var cotacaoDolar = 5.01;

//var.toFixed(2); - Arredonda os valores para 2 casas decimais.
if (moeda == "D") {
  var valorEmReal = cotacaoDolar * valor;
  alert(`O valor de $${valor} = R$${valorEmReal.toFixed(2)}`);
} else if (moeda == "B") {
  var valorEmReal = cotacaoBitcoin * valor;
  alert(`O valor de ₿${valor} = R$${valorEmReal.toFixed(2)}`);
} else {
  if (moeda == "E") {
    var valorEmReal = cotacaoEuro * valor;
    alert(`O valor de €${valor} = R$${valorEmReal.toFixed(2)}`);
  }
}
*/

/* Conversor de temperaturas:
var nome = prompt("Qual seu nome? ");
var valor = prompt(`${nome}, digite um valor em °C: `);
var grau = prompt(
  `Em qual unidade deseja converter? F: fahrenheit ou K: kelvin: `
);

if (grau == "F" || grau == "f") {
  var valorfah = (valor * 9) / 5 + 32;
  alert(`${valor}°C = ${valorfah}°F`);
} else if (grau == "K" || grau == "k") {
  var valorKel = valor + 273.15;
  alert(`${valor}°C = ${Math.round(valorKel)}°K`);
}
*/

/* Distâncias:
var nome = prompt("Qual seu nome? ");
var valor = prompt(`${nome}, digite uma distância em Km: `);
var anosLuz = 9.461e15;
var res = valor * anosLuz;

alert(`${valor}Km = ${res.toFixed(2)} anos-luz.`);
*/
