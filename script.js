const escolha = prompt("Escolha pedra, papel ou tesoura:")
const myArray = [
  "Pedra",
  "Papel",
  "Tesoura"
];
const randomItem = myArray[Math.floor(Math.random() * myArray.length)];
alert("Sua escolha é: " + escolha)
alert("O programa escolheu: " + randomItem)

if (escolha === "pedra" && randomItem === "Pedra") {
  alert("Empate")
} else if (escolha === "pedra" && randomItem === "Papel") {
  alert(" Você Perdeu")
} else if (escolha === "pedra" && randomItem === "Tesoura") {
  alert("Você Ganhou")
} else if (escolha === "papel" && randomItem === "Papel") {
  alert("Empate")
} else if (escolha === "papel" && randomItem === "Tesoura") {
  alert("Você Perdeu")
} else if (escolha === "papel" && randomItem === "Pedra") {
  alert("Você Ganhou")
} else if (escolha === "tesoura" && randomItem === "Tesoura") {
  alert("Empate")
} else if (escolha === "tesoura" && randomItem === "Pedra") {
  alert("Você Perdeu")
} else if (escolha === "tesoura" && randomItem === "Papel") {
  alert("Você Ganhou")
} else {
  alert("Não entendi a sua escolha! Por favor reinicie.")
}
