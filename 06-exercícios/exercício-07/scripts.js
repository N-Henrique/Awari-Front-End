const number = window.prompt("Digite um número :", "0");

function showPar() {
  for (let par = 0; par <= number; par++) {
    if (par % 2 === 0) {
      console.log(par);
    }
  }
}
function showImpar() {
  for (let impar = 0; impar <= number; impar++) {
    if (impar % 2 !== 0) {
      console.log(impar);
    }
  }
}
console.log("NUMEROS IMPARES:");
showImpar();

console.log("NUMEROS PARES:");
showPar();
