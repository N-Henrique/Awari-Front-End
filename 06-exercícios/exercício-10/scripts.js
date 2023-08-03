const input = prompt("Digite um número inteiro:", "10");

let result = "";
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= input; j++) {
    result += "º";
  }
  result += "\n";
}
console.log(result);
