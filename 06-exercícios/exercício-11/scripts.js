const altura = parseInt(window.prompt("Digite a altura do triângulo:", "10"));

function triangulo(altura) {
  for (let linha = 1; linha <= altura; linha++) {
    let asteriscos = " ";
    for (let coluna = 1; coluna <= linha; coluna++) {
      asteriscos += "*";
    }
    console.log(asteriscos);
  }
}

triangulo(altura);
