const number = window.prompt("Digite um número para multiplicar:", "01");

function tabuada() {
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const resultado = multiplicador * number;
    console.log(`${multiplicador} * ${number} = ${resultado}`);
  }
}

tabuada();
