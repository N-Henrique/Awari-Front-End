const number = window.prompt(
  "Digite as idades:",
  "0, 0, 0, 0, 0, 0, 0, 0, 0, 0"
);

const idades = number.split(", ");
function show18up() {
  let maiores = [];
  for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
      console.log(idades[i]);
      maiores.push(idades[i]);
    }
  }
  console.log(`${maiores.length} usuarios são maiores de 18 anos`);
}
show18up();
//10, 20, 30, 15, 25, 35, 18, 17, 19, 16
